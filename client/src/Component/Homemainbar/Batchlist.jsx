import React from 'react';
import Batch from './Batch'; // Import Batch

function Batchlist({ batchlist = [] }) {
  return (
    <>
      {batchlist.map((batch) => (
        <Batch batch={batch} key={batch._id} />
      ))}
    </>
  );
}

export default Batchlist;
