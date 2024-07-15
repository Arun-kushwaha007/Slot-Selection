import React from 'react';
import './Profilebio.css'; // Import your CSS file for styling

const Profilebio = ({ currentprofile }) => {
  return (
    <div className="profile-bio-container">
      <div className="tags-watched">
        {currentprofile?.tags.length !== 0 ? (
          <>
            <h4>Tags Watched</h4>
            <div className="tag-list">
              {currentprofile?.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </>
        ) : (
          <p className="no-tags">No tags watched</p>
        )}
      </div>
      <div className="about-section">
        {currentprofile?.about ? (
          <>
            <h4>About</h4>
            <p>{currentprofile?.about}</p>
          </>
        ) : (
          <p className="no-bio">No bio found</p>
        )}
      </div>
    </div>
  );
}

export default Profilebio;
