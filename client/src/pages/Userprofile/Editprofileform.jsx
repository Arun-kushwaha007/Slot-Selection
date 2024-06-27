import React, { useState } from 'react';
import './Editprofileform.css'; // Import your CSS file for styling

const Editprofileform = ({ currentuser, setSwitch }) => {
    const [name, setname] = useState(currentuser?.name);
    const [about, setabout] = useState(currentuser?.about);
    const [tags, settags] = useState([]);

    const handlesubmit = (e) => {
        e.preventDefault();
        if (tags[0] === '' || tags.length === 0) {
            alert("Please update the tags field.");
            return;
        }
        setSwitch(false);
    }

    return (
        <div className="edit-profile-container">
            <h1 className="edit-profile-title">Edit Your Profile</h1>
            <h2 className="edit-profile-title-2">Public Information</h2>
            <form className='edit-profile-form' onSubmit={handlesubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Display Name
                    </label>
                    <input type="text" id="name" value={name} onChange={(e) => setname(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="about" className="form-label">
                        About Me
                    </label>
                    <textarea id="about" value={about} onChange={(e) => setabout(e.target.value)} className="form-textarea"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="tags" className="form-label">
                        Tags (separated by commas)
                    </label>
                    <input type="text" id="tags" value={tags} onChange={(e) => settags(e.target.value.split(','))} className="form-input" placeholder="e.g., JavaScript, React, CSS" />
                </div>
                <div className="button-group">
                    <input type="submit" className='user-submit-btn' value="Save Profile" />
                    <button className="user-cancel-btn" type='button' onClick={() => setSwitch(false)}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Editprofileform;
