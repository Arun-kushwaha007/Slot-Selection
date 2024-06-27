import React, {useState} from 'react';
import moment from 'moment';
import copy from 'copy-to-clipboard'
import upvote from '../../Assets/sort-up.svg'
import downvote from '../../Assets/sort-down.svg'
import './Question.css'
import Avatar from '../../Component/Avatar/Avatar'
import Displayanswer from './Displayanswer';
import { Link, useNavigate , useLocation, useParams} from 'react-router-dom';

const Questiondetails = () => {
  const [answer, setanswer] = useState("");
  const questionlist = [{
    "_id":"q1",
    "questiontitle": "loremkladnfads fl kfjaslkfjdfja",
    "questionbody":"ki difaijfdsij  dfdkfdkf kfjdfkj fj d",
    "questiontags": ["pyt","ddkfj","Binary search"],
    "noofanswers": 2,
    "upvote":["user123", "userer32"],
    "downvote":[ " user87"],
    "userposted": "codenewbie",
    "userid": "ul3434",
    "askedon":"2024-06-10T12:00:00Z",
    "answer":[
      {
        "answerbody": "kasdfjeifja difj fjdkfj kfjdjfk",
        "useranswered": "algoexper",
        "userid":"u3487",
        "answeredon":"2024-06-10T12:00:00Z"
      },
      {
        "answerbody": "jkfja kadj d fdkfjakj jeifja difj fjdkfj kfjdjfk",
        "useranswered": "techguru",
        "userid":"u39887",
        "answeredon":"2024-06-10T12:00:00Z"
      }
    ]
  }];
  const {id} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const user = null;
  const url = "http://localhost:3000"
  const handlepostans = (e, answerlength)=>{
    e.preventDefault();
    if(user === null){
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    }else{
      if(answer===""){
        alert("Enter an answer before submitting")
      }else{
        setanswer("")
      }
    }
  }

  const handleshare=()=>{
    copy(url + location.pathname);
    alert("copied url : " + url + location.pathname)
  }

  const handledelete=()=>{

  }

  const handleupvote=()=>{
    if(user === null){
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    }
  }

  const handledownvote=()=>{
    if(user === null){
      alert("Login or Signup to answer a question");
      navigate("/Auth");
    }
  }

  return (
    
    <div className="question-details-page">
      {questionlist === null ?(
        <h1>Loading...</h1>
      ):(
        <>
        {
          questionlist.data.filter((question)=> question._id).map((question)=>(
            <div key={question._id}>
              <section className="question-details-container">
                <h1>{question.questiontitle}</h1>
                <div className="question-details-container-2">
                  <div className="question-votes">
                    <img src={upvote} width={18} className='votes-icon' onClick={handleupvote} alt="" />
                    <p>{question.upvote.length - question.downvote.length}</p>
                    <img src={downvote} width={18} className='votes-icon' onClick={handledownvote} alt="" />
                  </div>
                  <div style={{width:"100%"}}>
                    <p className="question-body">{question.questionbody}</p>
                    <div className="question-details-tags">
                      {question.questiontags.map((tag)=>(
                        <p key={tag}>{tag}</p>
                      ))}
                    </div>
                    <div className="question-actions-user">
                      <div>
                        <button type='button' onClick={handleshare}>
                          Share
                        </button>
                        {
                          user?.result?._id === question.user._id && (
                            <button type='button' onClick={handledelete}>
                              Delete
                            </button>
                          )
                        }
                      </div>
                      <div>
                        <p>Asked {moment(question.askedon).fromNow()}</p>
                        <Link to={`Users/$question.userid)`} className='user-link' style={{color:"#0086d8"}}>
                        <Avatar backgroundColor="orange" px="8px" py="5px" borderRadius="4px">
                          {question.userposted.charAt(0).toUpperCase()}
                        </Avatar>
                        <div>{question.userposted}</div>
                        </Link>

                      </div>
                    </div>

                  </div>
                </div>
                </section>
                {question.noofanswers !== 0 && (
                  <section>
                    <h3>{question.noofanswers} Answers</h3>
                    <Displayanswer key={question._id} question={question} handleshare={handleshare}/>
                    
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form onSubmit={(e)=>{
                    handlepostans(e,question.answer.length)
                  }}>
                    <textarea name="" id="" cols="30" rows="10" value={answer} onChange={(e)=>setanswer(e.target.value)}></textarea>
                    <br />
                    <input type="submit"  className='post-ans-btn' value="Post your Answer"/>
                  </form>
                  <p>Browse other Question tagged
                    {
                      question.questiontags.map((tag)=>(
                        <Link to="/Tags" key={tag} className='ans-tag'>
                          (" ")
                          (tag)(" ")
                        </Link>
                      ))
                    }{" "}
                    or
                    <Link to="/Askquestion" style={{textDecoration:"none", color:"#009dff"}}>
                    {" "}
                    Ask your own question
                    </Link>
                  </p>
                </section>
            </div>
          ))
        }
        </>
      )}
    </div>
  )
}

export default Questiondetails