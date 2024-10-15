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
        enddatetime
    } = batch;

    return (
        <div className="display-batch-container">
            <div className="display-votes-ans">
                <p>{upvote.length - downvote.length}</p>
                <p>votes</p>
            </div>
            <div className="display-votes-ans">
                <p>{noofjoins}</p>
                <p>students</p>
            </div>
            <div className="display-batch-details">
                <Link to={`/batch/${batch._id}`} className='batch-title-link'>
                    {batchtitle.length > (window.innerWidth <= 400 ? 70 : 90)
                        ? batchtitle.substring(0, window.innerWidth <= 400 ? 70 : 90) + "..."
                        : batchtitle
                    }
                </Link>
                <div className="display-tags-time">
                    <div className="display-tags">
                        {batchtags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                    <p className="display-time">
                        added {moment(askedon).fromNow()} by {userposted}
                    </p>
                </div>
                <div className="display-datetime">
                    <p>
                        Start Date: {moment(startdatetime).format('MMMM Do YYYY')}
                    </p>
                    <p>
                        End Date: {moment(enddatetime).format('MMMM Do YYYY')}
                    </p>
                </div>
                {/* <div className="display-datetime">
                    <p>
                        Start Time: {moment(startdatetime).format('h:mm a')}
                    </p>
                    <p>
                        End Time: {moment(enddatetime).format('h:mm a')}
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default Batch;
