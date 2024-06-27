import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Avatar from '../../Component/Avatar/Avatar';


const Displayanswer = ({question, handleshare}) => {
  const user = null;
  const handledelete=(answerid, noofanswer)=>{

  }
  return (
    <div>
      {
        question.answer.map((ans)=>(
          <div className="display-ans" key={ans._id}>
            <p>{ans.answerbody}</p>
            <div className="question-actions-user">
              <div>
                <button type='button' onClick={handleshare}> Share</button>
                {user?.result?._id ===ans?.userid && (
                  <button type='button' onClick={()=>handledelete(ans._id, question.noofanswer)} >Delete</button>
                )}
              </div>
              <div>
              <p>answered {moment(ans.answeredon).fromNow()}</p>
              <Link to={`Users/${ans.userid}`} className='user-link' style={{color:"#0086d8"}}>
                        <Avatar backgroundColor="orange" px="8px" py="5px" borderRadius="4px">
                          {ans.useransered.charAt(0).toUpperCase()}
                        </Avatar>
                        <div>{ans.useransered}</div>
                        </Link>
                        </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Displayanswer