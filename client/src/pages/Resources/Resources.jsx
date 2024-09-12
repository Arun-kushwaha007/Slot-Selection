import React, { useState } from 'react';
import Pyq from './Pyq';
import PIQ_form from './PIQ_form';
import ImpDoc from './ImpDoc';
import NewSection from './NewSection';

const Resources = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('previous-questions');

  // Function to change the active section when a card is clicked
  const handleCardClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      {/* Main Section with Cards */}
      <section className="my-20">
        <span className="flex justify-evenly">
          {/* Previous Asked Questions Card */}
          <div 
            onClick={() => handleCardClick('previous-questions')} 
            className={`cir-cards flex flex-col justify-center items-center cursor-pointer ${
              activeSection === 'previous-questions' ? 'bg-gray-200' : ''
            }`}
          >
            <div className="cirle-img rounded-full bg-[#FF9900] h-[150px] w-[150px] flex align-middle justify-center text-center items-center">
              ffdfdf
            </div>
            <div className="title my-3 text-lg text-center">Previous Asked Question</div>
          </div>

          {/* PIQ FORM Card */}
          <div 
            onClick={() => handleCardClick('piq-form')} 
            className={`cir-cards flex flex-col justify-center items-center cursor-pointer ${
              activeSection === 'piq-form' ? 'bg-gray-200' : ''
            }`}
          >
            <div className="cirle-img rounded-full bg-[#FF9900] h-[150px] w-[150px] flex align-middle justify-center text-center items-center">
              ffdfdf
            </div>
            <div className="title my-3 text-lg text-center">PIQ FORM</div>
          </div>

          {/* Important Documents Card */}
          <div 
            onClick={() => handleCardClick('important-documents')} 
            className={`cir-cards flex flex-col justify-center items-center cursor-pointer ${
              activeSection === 'important-documents' ? 'bg-gray-200' : ''
            }`}
          >
            <div className="cirle-img rounded-full bg-[#FF9900] h-[150px] w-[150px] flex align-middle justify-center text-center items-center">
              ffdfdf
            </div>
            <div className="title my-3 text-lg text-center">Important Documents</div>
          </div>

          {/* New Section Card */}
          <div 
            onClick={() => handleCardClick('new-section')} 
            className={`cir-cards flex flex-col justify-center items-center cursor-pointer ${
              activeSection === 'new-section' ? 'bg-gray-200' : ''
            }`}
          >
            <div className="cirle-img rounded-full bg-[#FF9900] h-[150px] w-[150px] flex align-middle justify-center text-center items-center">
              ffdfdf
            </div>
            <div className="title my-3 text-lg text-center">New Section</div>
          </div>
        </span>
      </section>

      {/* Conditionally Rendered Sections */}
      <section className="my-20">
        {activeSection === 'previous-questions' && (
          <div id="previous-questions">
            <Pyq/>
          </div>
        )}

        {activeSection === 'piq-form' && (
          <div id="piq-form">
            <PIQ_form/>
          </div>
        )}

        {activeSection === 'important-documents' && (
          <div id="important-documents">
            <ImpDoc/>
          </div>
        )}

        {activeSection === 'new-section' && (
          <div id="new-section">
            <NewSection/>
          </div>
        )}
      </section>
    </>
  );
};

export default Resources;
