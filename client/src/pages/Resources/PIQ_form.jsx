import React from 'react';
import Image1 from "../../Assets/PIQ/PIQformpage1.jpg";
import Image2 from "../../Assets/PIQ/PIQformpage2.jpg";

const PIQ_form = () => {
  return (
    <div className="container mx-auto my-8 p-6 lg:p-12 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">What is Personal Information Questionnaire (PIQ) in NDA SSB?</h1>
      <p className="mb-6 text-gray-700">
        The “Personal Information Questionnaire,” or PIQ for short, is a set of fundamental questions required for an interview with the SSB. These questions help evaluators form a more accurate opinion of the candidates. They can read the PIQ form to understand the personality of the candidate based on the information provided.
      </p>
      <p className="mb-6 text-gray-700">
        The basic PIQ form consists of two pages and asks candidates about essential aspects of their identity and personal life. Since these questions help establish their personality, everything written on the form must align with the candidate's behavior during their time at the SSB Centre.
      </p>
      <p className="mb-6 text-gray-700">
        Candidates must complete the PIQ Form after passing their screening test and before the stage 2 test. The submitted PIQ form may be shared with the interviewing officer, GTO, and psychologists. Their evaluations, along with the candidate’s responses to psychological exams, help determine if the candidate has provided sincere answers.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">The PIQ Form Consists of the Following Sections:</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Age, Height, and Weight</li>
        <li>Details of Family Members</li>
        <li>Educational Details</li>
        <li>Activities such as NCC and Sports</li>
        <li>Participation in Extracurricular Activities</li>
        <li>Place of Residence</li>
        <li>Details of Previous SSB Attempts</li>
        <li>Demographic Details</li>
      </ul>
      <p className="mb-6 text-gray-700">
        Candidates can explore preparation strategies for competitive exams to enhance their readiness for the examination.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">What Information Does the SSB PIQ Form Disclose?</h2>
      <p className="mb-6 text-gray-700">
        The PIQ asks questions about the candidate’s background, accomplishments, qualifications, and family. An applicant must fill out two copies of the form after passing the screening test. The SSB PIQ Form reveals the following information:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Hobbies and interests offer valuable insights into personality, with an emphasis on useful and creative pursuits.</li>
        <li>A candidate with multiple responsibilities and activities demonstrates adaptability and sociability.</li>
        <li>Good organizational skills are reflected in a well-structured list of tasks and accomplishments.</li>
        <li>Overwriting and corrections may indicate a lack of clarity and a casual attitude.</li>
        <li>A strong SSB PIQ is comparable to a letter of recommendation, as it helps the SSB evaluate a candidate’s potential based on past experiences, which are crucial for adapting to the challenges of military life.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">Significance of the PIQ Form</h2>
      <p className="mb-6 text-gray-700">
        Candidates must fill out the PIQ form carefully for the SSB interview, preparing to discuss their experiences and lessons learned from the activities mentioned. The PIQ serves as the candidate’s first impression for the interviewing officer and psychologist. Forms that appear rushed or contain excessive corrections can convey a careless attitude, so it’s essential to complete the form accurately.
      </p>
      <p className="mb-6 text-gray-700">
        The interviewing officer will review the PIQ form in advance and may ask questions to verify the information. While these questions may seem straightforward, candidates should ensure consistency with what they’ve written on the form. Therefore, it’s best to write honestly about themselves and their experiences.
      </p>
      <p className="mb-6 text-gray-700">
        The PIQ Form holds significant importance as it contains key information about the applicant; consequently, many interview questions in SSB interviews are based on the details provided. The PIQ serves as the basis for the majority of questions the interviewing officer will ask during the personal interview.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">How to Fill Out the PIQ Form Correctly</h2>
      <p className="mb-4 text-gray-700">Filling out the PIQ form accurately is crucial. Candidates can refer to sample images of the PIQ form for a better understanding:</p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Fill out the PIQ form completely and carefully.</li>
        <li>Write clearly and neatly, placing information in the correct sections.</li>
        <li>Provide all necessary information, including educational background, responsibilities, and interests.</li>
        <li>Avoid overwriting and corrections.</li>
        <li>Present accomplishments in chronological order.</li>
        <li>Practice filling out the SSB PIQ form before the interview.</li>
      </ul>

      <div className="mb-8">
        <img src={Image1} alt="PIQ Form Page 1" className="w-full h-auto rounded-lg shadow-md mb-4" />
        <a href={Image1} download className="inline-block text-blue-500 underline mb-2">Download PIQ Form Page 1</a>
        <img src={Image2} alt="PIQ Form Page 2" className="w-full h-auto rounded-lg shadow-md" />
        <a href={Image2} download className="inline-block text-blue-500 underline mb-2">Download PIQ Form Page 2</a>
      </div>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">Common Mistakes When Filling Out the PIQ Form</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Poor handwriting, overwriting, and corrections.</li>
        <li>Including excessive information or boasting.</li>
        <li>Failing to disclose accurate extracurricular interests and hobbies.</li>
        <li>Providing inaccurate information due to a lack of self-awareness.</li>
        <li>Lack of clarity regarding notable accomplishments can lead to exaggeration.</li>
        <li>Presenting controversial information to grab attention.</li>
        <li>Completing the form without understanding its importance.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">Questions from the PIQ Form Asked in the SSB Interview</h2>
      <p className="mb-4 text-gray-700">
        The PIQ form provides insight into a candidate’s social interactions and experiences. The more a candidate has engaged in various activities, the greater their exposure to real-life situations, enhancing their problem-solving skills. Common interview questions derived from the PIQ form include:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Basic information: Name, significance of family names, comparison with family members, and hometown.</li>
        <li>Education: Educational history, accomplishments, leadership roles, favorite subjects, and current endeavors.</li>
        <li>Responsibilities: Planning competitions in various activities like sports and local festivals.</li>
        <li>Personal Questions: Interests, hobbies, and leisure activities.</li>
        <li>Friends: Types of friends preferred, shared experiences, and descriptions of best friends.</li>
        <li>Family: Relationships, number of family members, and perceptions of siblings.</li>
      </ul>

      <p className="mt-6 text-gray-700">We hope this post helps you understand the PIQ Form and how to fill it out effectively. For further assistance on preparation strategies, tips, and important resources, consider exploring additional materials available online.</p>
    </div>
  );
};

export default PIQ_form;
