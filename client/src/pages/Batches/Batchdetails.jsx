import React, { useState } from "react";
import moment from "moment";
import copy from "copy-to-clipboard";
import upvote from "../../Assets/sort-up.svg";
import downvote from "../../Assets/sort-down.svg";
import "./Batch.css";
import Avatar from "../../Component/Avatar/Avatar";
import BatchJoin from "./BatchJoin";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { deletebatch, votebatch } from "../../actions/batch";
import Footer from "../../Component/Homemainbar/Footer/Footer";

const placeholderImage = "https://via.placeholder.com/150";

const Batchdetails = () => {
  const [termsChecked, setTermsChecked] = useState(false);
  const dispatch = useDispatch();
  const batchlist = useSelector((state) => state.batchreducer);
  const { id } = useParams();
  const user = useSelector((state) => state.currentuserreducer);
  const location = useLocation();
  const navigate = useNavigate();
  const url = "https://slot-selection-server.vercel.app/";

  const hasJoinedBatch = (batch) => {
    return batch.join.some((join) => join.userid === user?.result?._id);
  };

  const handlePostJoin = (e, joinlength, maxStudents) => {
    e.preventDefault();
    if (user === null) {
      navigate("/Auth");
    } else if (!termsChecked) {
      alert("Please confirm all the terms and conditions before proceeding.");
    } else {
      const batch = batchlist.data.find((batch) => batch._id === id);
      if (hasJoinedBatch(batch)) {
        alert("You have already joined this batch.");
      } else if (batch.noofjoins >= maxStudents) {
        alert("This batch is already full.");
      } else {
        navigate('/payment');
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied URL: " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deletebatch(id, navigate));
  };

  const handleVote = (type) => {
    if (user === null) {
      navigate("/Auth");
    } else {
      dispatch(votebatch(id, type));
    }
  };

  return (
    <div className="batch-details-page bg-gray-100 p-8 m-6 rounded-lg shadow-md">
      <div className="heading bg-gradient-to-r from-orange-500 to-yellow-500 mt-6 rounded-lg shadow-lg">
        <div className="flex flex-col justify-center text-white p-8">
          <h1 className="font-bold text-4xl">NDA Dropper Batch I</h1>
          <p className="text-lg mt-4">
            We provide you with one of the best online coaching, video lectures for all students preparing for NDA, along with all necessary resources, all-time support, etc. Join us to make the most out of your preparation.
          </p>
        </div>
      </div>

      <div className="batchpage flex mt-10">
        <div className="BatchDetails flex flex-col w-2/5 mr-10">
          <div className="details mb-6 bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-semibold text-xl mb-4 text-blue-600">Batch Details</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>PDF notes of each class will be uploaded on the app</li>
              <li>Regular quizzes and assignments</li>
              <li>Access to exclusive study materials</li>
              <li>Live doubt-solving sessions</li>
              <li>24/7 online support</li>
            </ul>
          </div>
          <div className="faculty mt-6 bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-semibold text-xl mb-2 text-blue-600">Faculty</h2>
            <p className="text-lg text-gray-700">Mr. Rakesh Kumar</p>
          </div>
        </div>

        {batchlist.data === null ? (
          <h1 className="text-2xl text-center">Loading...</h1>
        ) : (
          batchlist.data
            .filter((batch) => batch._id === id)
            .map((batch) => {
              const userHasJoined = hasJoinedBatch(batch);
              const isBatchFull = batch.noofjoins >= batch.maxStudents;

              return (
                <div key={batch._id} className="w-3/5">
                  <section className="batch-details-container bg-white shadow-lg p-6 rounded-lg mb-6">
                    <div className="mb-4">
                      <img
                        src={batch.imageURL || placeholderImage}
                        alt="Batch Image"
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <h1 className="font-bold text-3xl text-gray-800 mb-4">{batch.batchtitle}</h1>
                    <div className="batch-details-container-2 flex">
                      <div className="batch-votes flex items-center mr-4">
                        <img
                          src={upvote}
                          alt="upvote"
                          width={20}
                          className="votes-icon cursor-pointer hover:scale-110 transition-transform"
                          onClick={() => handleVote("upvote")}
                        />
                        <p className="text-lg mx-3 text-gray-700">{batch.upvote.length - batch.downvote.length}</p>
                        <img
                          src={downvote}
                          alt="downvote"
                          width={20}
                          className="votes-icon cursor-pointer hover:scale-110 transition-transform"
                          onClick={() => handleVote("downvote")}
                        />
                      </div>
                      <div className="w-full">
                        <p className="batch-body mb-6 text-lg text-gray-700">{batch.batchbody}</p>
                        <div className="batch-details-tags flex flex-wrap gap-3">
                          {batch.batchtags.map((tag) => (
                            <span key={tag} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm shadow-sm">{tag}</span>
                          ))}
                        </div>
                        <div className="batch-actions-user mt-6 flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
                              onClick={handleShare}
                            >
                              Share
                            </button>
                            {user?.result?._id === batch?.userid && (
                              <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
                                onClick={handleDelete}
                              >
                                Delete
                              </button>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <p className="text-sm text-gray-500">
                              Added {moment(batch.askedon).fromNow()} by
                            </p>
                            <Link
                              to={`Users/${batch.userid}`}
                              className="user-link text-blue-600 flex items-center"
                            >
                              <Avatar backgroundColor="orange" px="8px" py="5px" borderRadius="4px">
                                {batch.userposted.charAt(0).toUpperCase()}
                              </Avatar>
                              <span className="ml-2">{batch.userposted}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="batch-datetime mt-6 flex justify-between">
                          <div className="batch-date text-sm text-gray-600">
                            <p>Start Date: {moment(batch.startdatetime).format("LL")}</p>
                            <p>End Date: {moment(batch.enddatetime).format("LL")}</p>
                          </div>
                          <div className="batch-time text-sm text-gray-600">
                            <p>Start Time: {moment(batch.startdatetime).format("LT")}</p>
                            <p>End Time: {moment(batch.enddatetime).format("LT")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {batch.noofjoins !== 0 && (
                    <section className="mt-8">
                      <h3 className="text-lg font-semibold text-gray-800">{batch.noofjoins} Joined</h3>
                      <BatchJoin
                        key={batch._id}
                        batch={batch}
                        handleShare={handleShare}
                      />
                    </section>
                  )}
                  {!userHasJoined && !isBatchFull && (
                    <section className="post-ans-container mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-gray-800">Choose your Slot</h3>
                      <form
                        onSubmit={(e) => handlePostJoin(e, batch.join.length, batch.maxStudents)}
                      >
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={termsChecked}
                            onChange={() => setTermsChecked(!termsChecked)}
                            className="mr-2"
                          />
                          <span className="text-gray-700">I confirm all terms and conditions.</span>
                        </label>
                        <button
                          type="submit"
                          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md mt-4 hover:bg-green-700 disabled:opacity-50"
                          disabled={!termsChecked}
                        >
                          Proceed to Join
                        </button>
                      </form>
                    </section>
                  )}
                  {isBatchFull && (
                    <section className="post-ans-container mt-6">
                      <p className="text-red-500 font-semibold">This batch is already full.</p>
                    </section>
                  )}
                </div>
              );
            })
            
        )}
      </div>
      <div className="my-5"></div>
      <Footer />
    </div>
  );
};

export default Batchdetails;
