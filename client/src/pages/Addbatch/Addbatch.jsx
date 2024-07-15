import React, { useState } from 'react'
import './Addbatch.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { addbatch } from '../../actions/batch'
import Slot from './Slot'

const Addbatch = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mentor = useSelector((state) => state.currentmentorreducer);
    const [batchtitle, setbatchtitle] = useState("");
    const [batchbody, setbatchbody] = useState("");
    const [batchtag, setbatchtags] = useState("");
    const [startdate, setstartdate] = useState("");
    const [starttime, setstarttime] = useState("");
    const [enddate, setenddate] = useState("");
    const [endtime, setendtime] = useState("");
    const [maxStudents, setmaxStudents] = useState(20); // Default value of 20 students

    const handlesubmit = (e) => {
        e.preventDefault();
        if (mentor) {
            if (batchbody && batchtitle && batchtag.length && startdate && starttime && enddate && endtime && maxStudents) {
                const startdatetime = new Date(`${startdate}T${starttime}`);
                const enddatetime = new Date(`${enddate}T${endtime}`);
                dispatch(addbatch({
                    batchtitle,
                    batchbody,
                    batchtags: batchtag,
                    userposted: mentor.result.name,
                    startdatetime,
                    enddatetime,
                    maxStudents
                }, navigate));
                alert("You have successfully posted a batch");
            } else {
                alert("Please enter all the fields");
            }
        } else {
            alert("Login as a mentor to post a batch");
        }
    };

    const handleenter = (e) => {
        if (e.code === 'Enter') {
            setbatchbody(batchbody + "\n");
        }
    }

    return (
        <div className="add-batch">
            <div className="add-batch-container">
                <h1>Post a public batch</h1>
                <form onSubmit={handlesubmit}>
                    <div className="add-form-container">
                        <label htmlFor="add-batch-title">
                            <h4>Title</h4>
                            <p>Keep it short </p>
                            <input 
                                type="text" 
                                id="add-batch-title"
                                onChange={(e) => setbatchtitle(e.target.value)} 
                                placeholder='e.g. --- subject of ssb by ---' 
                            />
                        </label>
                        <label htmlFor="add-batch-body">
                            <h4>Body</h4>
                            <p>Include all the information about your batch</p>
                            <textarea 
                                id="add-batch-body" 
                                onChange={(e) => setbatchbody(e.target.value)}
                                cols="30" 
                                rows="10" 
                                onKeyDown={handleenter} 
                            ></textarea>
                        </label>
                        <label htmlFor="add-batch-tags">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe your batch</p>
                            <input 
                                type="text" 
                                id="add-batch-tags" 
                                onChange={(e) => setbatchtags(e.target.value.split(" "))} 
                                placeholder='Enter values with space' 
                            />
                        </label>
                        <div className="date-time-container">
                            <label htmlFor="add-batch-startdate">
                                <h4>Start Date</h4>
                                <input 
                                    type="date" 
                                    id="add-batch-startdate" 
                                    onChange={(e) => setstartdate(e.target.value)}
                                />
                            </label>
                            <label htmlFor="add-batch-enddate">
                                <h4>End Date</h4>
                                <input 
                                    type="date" 
                                    id="add-batch-enddate" 
                                    onChange={(e) => setenddate(e.target.value)}
                                />
                            </label>
                            
                        </div>
                        <div className="date-time-container">
                        <label htmlFor="add-batch-starttime">
                                <h4>Start Time</h4>
                                <input 
                                    type="time" 
                                    id="add-batch-starttime" 
                                    onChange={(e) => setstarttime(e.target.value)}
                                />
                            </label>
                            
                            <label htmlFor="add-batch-endtime">
                                <h4>End Time</h4>
                                <input 
                                    type="time" 
                                    id="add-batch-endtime" 
                                    onChange={(e) => setendtime(e.target.value)}
                                />
                            </label>
                        </div>
                        <label htmlFor="add-batch-maxstudents">
                            <h4>Maximum Students</h4>
                            <p>Set the maximum number of students allowed in this batch</p>
                            <input 
                                type="number" 
                                id="add-batch-maxstudents" 
                                onChange={(e) => setmaxStudents(parseInt(e.target.value, 10))} 
                                value={maxStudents} 
                                min="1"
                            />
                        </label>
                    </div>
                    <input 
                        type="submit" 
                        value="Review your batch" 
                        className='review-btn' 
                    />
                </form>
            </div>
        </div>
    )
}

export default Addbatch;
