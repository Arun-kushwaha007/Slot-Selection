import React, { useState } from 'react';
import Pyq from './Pyq';
import PIQ_form from './PIQ_form';
import ImpDoc from './ImpDoc';
import NewSection from './NewSection';
import Footer from "../../Component/Homemainbar/Footer/Footer"

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
        <span className="flex flex-col sm:flex-row justify-evenly">
          {/* Previous Asked Questions Card */}
          <div
            onClick={() => handleCardClick('previous-questions')}
            className={`cir-cards flex flex-col justify-center items-center cursor-pointer p-4 sm:p-6 transition duration-300 transform ${
              activeSection === 'previous-questions' ? 'bg-gray-200 shadow-lg scale-105' : 'bg-white hover:shadow-md'
            }`}
          >
            {/* Show button for small screens */}
            <div className="block sm:hidden">
              <button className="bg-[#FF9900] text-white font-semibold py-2 px-4 rounded-lg">
                View Questions
              </button>
            </div>

            {/* Circle for larger screens */}
            <div className="hidden sm:flex cirle-img rounded-full bg-[#FF9900] h-[150px] w-[150px] items-center justify-center text-center">
              <span className="text-white font-bold text-xl">?</span>
            </div>

            <div className="title my-2 text-md sm:text-lg font-semibold text-center text-gray-800">
              Previous Asked Questions
            </div>
          </div>

          {/* PIQ FORM Card */}
          <div
            onClick={() => handleCardClick('piq-form')}
            className={`cir-cards flex flex-col justify-center items-center cursor-pointer p-4 sm:p-6 transition duration-300 transform ${
              activeSection === 'piq-form' ? 'bg-gray-200 shadow-lg scale-105' : 'bg-white hover:shadow-md'
            }`}
          >
            <div className="block sm:hidden">
              <button className="bg-[#FF9900] text-white font-semibold py-2 px-4 rounded-lg">
                View PIQ Form
              </button>
            </div>
            <div className="hidden sm:flex cirle-img rounded-full bg-[#FF9900] h-[150px] w-[150px] items-center justify-center text-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="title my-2 text-md sm:text-lg font-semibold text-center text-gray-800">PIQ FORM</div>
          </div>

          {/* Important Documents Card */}
          <div
            onClick={() => handleCardClick('important-documents')}
            className={`cir-cards flex flex-col justify-center items-center cursor-pointer p-4 sm:p-6 transition duration-300 transform ${
              activeSection === 'important-documents' ? 'bg-gray-200 shadow-lg scale-105' : 'bg-white hover:shadow-md'
            }`}
          >
            <div className="block sm:hidden">
              <button className="bg-[#FF9900] text-white font-semibold py-2 px-4 rounded-lg">
                View Documents
              </button>
            </div>
            <div className="hidden sm:flex cirle-img rounded-full bg-[#FF9900] h-[150px] w-[150px] items-center justify-center text-center">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <div className="title my-2 text-md sm:text-lg font-semibold text-center text-gray-800">Important Documents</div>
          </div>

          {/* New Section Card */}
          <div
            onClick={() => handleCardClick('new-section')}
            className={`cir-cards flex flex-col justify-center items-center cursor-pointer p-4 sm:p-6 transition duration-300 transform ${
              activeSection === 'new-section' ? 'bg-gray-200 shadow-lg scale-105' : 'bg-white hover:shadow-md'
            }`}
          >
            <div className="block sm:hidden">
              <button className="bg-[#FF9900] text-white font-semibold py-2 px-4 rounded-lg">
                View New Section
              </button>
            </div>
            <div className="hidden sm:flex cirle-img rounded-full bg-[#FF9900] h-[150px] w-[150px] items-center justify-center text-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div className="title my-2 text-md sm:text-lg font-semibold text-center text-gray-800">New Section</div>
          </div>
        </span>
      </section>

      {/* Conditionally Rendered Sections */}
      <section className="my-20">
        {activeSection === 'previous-questions' && (
          <div id="previous-questions">
            <h2 className="text-2xl font-bold mx-2">Previous Asked Questions</h2>
            <p className='mx-2'>This section contains the previously asked questions...</p>
            <Pyq />
          </div>
        )}

        {activeSection === 'piq-form' && (
          <div id="piq-form">
            <PIQ_form />
          </div>
        )}

        {activeSection === 'important-documents' && (
          <div id="important-documents">
            <ImpDoc />
          </div>
        )}

        {activeSection === 'new-section' && (
          <div id="new-section">
            <NewSection />
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Resources;
