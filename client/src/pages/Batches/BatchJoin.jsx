import React from 'react'
import moment from 'moment'
import { Link,useParams } from 'react-router-dom'
import Avatar from '../../Component/Avatar/Avatar'
import { useDispatch ,useSelector} from 'react-redux'
import { deletejoin } from '../../actions/batch'
const BatchJoin = ({ batch, handleshare }) => {
  const user =useSelector((state)=>state.currentuserreducer)
  const {id}=useParams();
  const dispatch=useDispatch()
  const handledelete = (joinid, noofjoins) => {
    dispatch(deletejoin(id,joinid,noofjoins -1))
  }
  return (
    <div>
      {batch.join.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.joinbody}</p>
          <div className="batch-actions-user">
            <div>
              {/* <button type='button' onClick={handleshare} >Share</button> */}
              {user?.result?._id === ans?.userid && (
                <button type='button' onClick={() => handledelete(ans._id, batch.noofjoins)}>Delete</button>
              )}
            </div>
            <div>
            <p>Joined {moment(ans.joinedon).fromNow()}</p>
            <Link to={`Users/${ans.userid}`} className='user-limk' style={{ color: "#0086d8" }}>
              <Avatar backgroundColor="lightgreen"px="2px" py="2px" borderRadius="2px">
                {ans.userjoined.charAt(0).toUpperCase()}
              </Avatar>
              <div>{ans.userjoined}</div>
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BatchJoin