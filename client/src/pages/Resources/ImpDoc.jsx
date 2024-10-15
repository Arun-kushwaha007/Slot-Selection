import React from 'react';

const ImpDoc = () => {
  return (
    <div className="container mx-auto my-8 p-6 lg:p-12 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">Important Documents for SSB Interview</h1>
      <p className="mb-6 text-gray-700">
        If you are attending an SSB interview, it's beneficial to prepare a few documents in advance. Candidates can fill out the required SSB documents ahead of time, saving valuable time during the interview document check and form filling. Here’s a list of documents to carry for the SSB interview, including the PIQ form, identification form, certificate of previous candidature, risk certificate, traveling allowance form, and certificates for final and pre-final candidates.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">List of Documents to Carry for SSB Interview</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Call Letter</li>
        <li>10th/12th Mark Sheet & Certificate (Original & 2 Photocopies)</li>
        <li>Graduation/Post Graduation Degree (Final year students must bring a certificate from their principal)</li>
        <li>NCC Certificate (Original & Photocopy) (If applicable)</li>
        <li>Valid Commercial Pilot's License, issued by DGCA (If applicable)</li>
        <li>Original Ticket (for Traveling Allowance if this is your first entry)</li>
        <li>Identity Proof (Voter ID/Passport/DL/PAN Card) (Original and 2 Photocopies)</li>
        <li>NOC Certificate (for those currently working in Government Organizations or PSUs)</li>
        <li>Risk Certificate duly signed by a parent/guardian</li>
        <li>20 Passport Size Colour Photographs (in light-colored clothing against a white background)</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">List of Documents to be Filled Before the SSB Interview</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>PIQ Form</li>
        <li>Identification Form</li>
        <li>Certificate of Previous Candidature</li>
        <li>Risk Certificate</li>
        <li>Traveling Allowance Form</li>
        <li>Certificate for Final and Pre-Final Candidates</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">Details About the Forms</h2>
      
      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">PIQ Form</h3>
      <p className="mb-4 text-gray-700">
        The PIQ stands for Personal Information Questionnaire. This form asks for basic details, such as your name, address, family members, education, hobbies, achievements, etc. It is the most critical form in the entire interview process, as the interview questions will be based on what you have filled in the PIQ form. Be sure to complete it carefully.
      </p>
      <a href="/path/to/PIQ_Form" className="text-blue-500 underline mb-6">Download PIQ Form</a>

      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">Identification Form</h3>
      <p className="mb-4 text-gray-700">
        This form requests basic details such as your name, address, phone number, email, photograph, and signature.
      </p>
      <a href="/path/to/Identification_Form" className="text-blue-500 underline mb-6">Download Identification Form</a>

      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">Certification of Previous Candidature Form</h3>
      <p className="mb-4 text-gray-700">
        This form asks for details about your previous SSB interview attempts, including batch number, SSB number, place, and chest number.
      </p>
      <a href="/path/to/Previous_Candidature_Form" className="text-blue-500 underline mb-6">Download Certification of Previous Candidature Form</a>

      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">Risk Certificate</h3>
      <p className="mb-4 text-gray-700">
        The risk certificate declares that you are attending the SSB interview at your own risk and that neither you nor your parents/guardians shall be entitled to claim any compensation.
      </p>
      <a href="/path/to/Risk_Certificate" className="text-blue-500 underline mb-6">Download Risk Certificate</a>

      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">Traveling Allowance Form</h3>
      <p className="mb-4 text-gray-700">
        All freshers and repeat candidates eligible for SSB Interview traveling allowance must fill out this form and attach the original printout of tickets.
      </p>
      <a href="/path/to/Traveling_Allowance_Form" className="text-blue-500 underline mb-6">Download Traveling Allowance Form</a>

      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">Certificate for Pre-Final and Final Year Students</h3>
      <p className="mb-4 text-gray-700">
        All pre-final and final year students attending the SSB interview must complete this form.
      </p>
      <a href="/path/to/Certificate_Final_PreFinal" className="text-blue-500 underline mb-6">Download Pre-Final and Final Year Students</a>

      <p className="mt-6 text-gray-700">
        These documents are in addition to your educational documents. Make sure to read the call letter carefully and ensure you have all the necessary documents.
      </p>
    </div>
  );
};

export default ImpDoc;
