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

const Batchdetails = () => {
  const [termsChecked, setTermsChecked] = useState(false);
  const dispatch = useDispatch();
  const batchlist = useSelector((state) => state.batchreducer);
  const { id } = useParams();
  const user = useSelector((state) => state.currentuserreducer);
  const location = useLocation();
  const navigate = useNavigate();
  const url = "http://localhost:3000";

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
        navigate('/payment'); // Redirect to payment page
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
    <div className="batch-details-page">
      {batchlist.data === null ? (
        <h1>Loading...</h1>
      ) : (
        batchlist.data
          .filter((batch) => batch._id === id)
          .map((batch) => {
            const userHasJoined = hasJoinedBatch(batch);
            const isBatchFull = batch.noofjoins >= batch.maxStudents;

            return (
              <div key={batch._id}>
                <section className="batch-details-container">
                  <h1>{batch.batchtitle}</h1>
                  <div className="batch-details-container-2">
                    <div className="batch-votes">
                      <img
                        src={upvote}
                        alt="upvote"
                        width={18}
                        className="votes-icon"
                        onClick={() => handleVote("upvote")}
                      />
                      <p>{batch.upvote.length - batch.downvote.length}</p>
                      <img
                        src={downvote}
                        alt="downvote"
                        width={18}
                        className="votes-icon"
                        onClick={() => handleVote("downvote")}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="batch-body">{batch.batchbody}</p>
                      <div className="batch-details-tags">
                        {batch.batchtags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="batch-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {user?.result?._id === batch?.userid && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>Added {moment(batch.askedon).fromNow()} by</p>
                          <Link
                            to={`Users/${batch.userid}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {batch.userposted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{batch.userposted}</div>
                          </Link>
                        </div>
                        <div className="batch-datetime">
                          <div className="batch-date">
                            <p>
                              Start Date:{" "}
                              {moment(batch.startdatetime).format("LL")}
                            </p>
                            <p>
                              End Date:{" "}
                              {moment(batch.enddatetime).format("LL")}
                            </p>
                          </div>
                          <div className="batch-time">
                            <p>
                              Start Time:{" "}
                              {moment(batch.startdatetime).format("LT")}
                            </p>
                            <p>
                              End Time:{" "}
                              {moment(batch.enddatetime).format("LT")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {batch.noofjoins !== 0 && (
                  <section>
                    <h3>{batch.noofjoins} Joined</h3>
                    <BatchJoin
                      key={batch._id}
                      batch={batch}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                {!userHasJoined && !isBatchFull && (
                  <section className="post-ans-container">
                    <h3>Choose your Slot</h3>
                    <form
                      onSubmit={(e) => handlePostJoin(e, batch.join.length, batch.maxStudents)}
                    >
                      <label htmlFor="terms-checkbox">
                        <input
                          type="checkbox"
                          id="terms-checkbox"
                          checked={termsChecked}
                          onChange={(e) => setTermsChecked(e.target.checked)}
                        />
                        Confirm all terms and conditions
                      </label>
                      <br />
                      <input
                        type="submit"
                        className="post-ans-btn"
                        value="Proceed"
                        disabled={!termsChecked}
                      />
                    </form>
                  </section>
                )}
                {isBatchFull && (
                  <section className="post-ans-container">
                    <h3>Batch Full</h3>
                    <p>The batch has reached the maximum number of students.</p>
                  </section>
                )}
              </div>
            );
          })
      )}
    </div>
  );
};

export default Batchdetails;
