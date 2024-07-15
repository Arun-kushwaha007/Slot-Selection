import React from 'react'
import Batch from './Batch'
function Batchlist({batchlist}) {
  // console.log(batchlist)
  return (
    <>
    {batchlist.map((batch)=>(
      <Batch batch={batch} key ={batch._id}/>
    ))}
    </>
  )
}

export default Batchlist