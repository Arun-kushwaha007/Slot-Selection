import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Batch = ({ batch = {} }) => {
  const {
    upvote = [],
    downvote = [],
    noofjoins = 0,
    batchtitle = '',
    batchtags = [],
    askedon,
    userposted = '',
    startdatetime,
    enddatetime,
    thumbnailUrl = '' // Assuming batch object contains a thumbnail URL
  } = batch;

  return (
    <div className="bg-white shadow-lg w-full lg:w-[1400px]  rounded-lg p-6 mb-6 transition-transform hover:scale-105 flex">
      {/* Image Container Section */}
      <div className="w-1/4 pr-4">
        <div className="relative w-full h-32 overflow-hidden rounded-lg bg-gray-200">
          <img
            src={thumbnailUrl || 'https://via.placeholder.com/300x200'} // Dummy image if no thumbnail
            alt="Batch Thumbnail"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Batch Details Section */}
      <div className="w-3/4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-center">
            <p className="text-xl font-semibold text-green-600">{upvote.length - downvote.length}</p>
            <p className="text-sm text-gray-600">Votes</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-blue-600">{noofjoins}</p>
            <p className="text-sm text-gray-600">Students</p>
          </div>
        </div>

        <div className="mb-4">
          <Link
            to={`/batch/${batch._id}`}
            className="text-2xl font-bold text-indigo-600 hover:underline block text-center"
          >
            {batchtitle.length > (window.innerWidth <= 400 ? 50 : 70)
              ? `${batchtitle.substring(0, window.innerWidth <= 400 ? 50 : 70)}...`
              : batchtitle}
          </Link>
        </div>

        <div className="flex flex-wrap justify-center mb-4">
          {batchtags.map((tag) => (
            <span key={tag} className="bg-indigo-200 text-indigo-800 text-sm px-2 py-1 rounded-full m-1">
              {tag}
            </span>
          ))}
        </div>

        <div className="text-sm text-gray-500 mb-4 text-center">
          Added {moment(askedon).fromNow()} by <span className="font-semibold">{userposted}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-gray-600 text-sm">Start Date</p>
            <p className="font-semibold">{moment(startdatetime).format('MMMM Do YYYY')}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">End Date</p>
            <p className="font-semibold">{moment(enddatetime).format('MMMM Do YYYY')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batch;
