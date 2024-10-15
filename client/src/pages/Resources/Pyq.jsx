import React, { useState } from "react";
import Image1 from "../../Assets/pyq/image1.webp";
import Image2 from "../../Assets/pyq/image2.webp";
import Image3 from "../../Assets/pyq/image3.webp";
import Image4 from "../../Assets/pyq/image4.jpg";
import Image5 from "../../Assets/pyq/image5.webp";
import Image6 from "../../Assets/pyq/image6.webp";

const Pyq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null); // To manage full screen image

  const toggleDescription = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand if clicked
    }
  };

  const openFullScreen = (imgSrc) => {
    setFullScreenImage(imgSrc); // Set image for full screen view
  };

  const closeFullScreen = () => {
    setFullScreenImage(null); // Close full screen view
  };

  const imagesData = [
    {
      imgSrc: Image1,
      description:
        "Mohit was a 25-year-old school teacher in the Sitapur district. When Mohit was roaming in the market on the weekend, he saw a thief running after surprisingly snatching a lady’s necklace. Mohit seeing this ran after the thief. Within some minutes, Mohit caught the thief and overpowered him. Not only this, Mohit, with the help of nearby people, handed over the thief to the nearby police station. Later he gave the necklace back to the lady. Mohit also advised police to do regular patrolling in the area so that such activities could be reduced.",
    },
    {
      imgSrc: Image2,
      description:
        "Krishna was 22 years old, and studied at Agriculture College Gwalior. When he went to his village during the vacations, he found that the farmers are still using ancient farming techniques. Seeing this, he wanted to help them. With the sarpanch’s help, he called a village meeting for farmers where he discussed the whole matter with them. He told and guided them about the new farming techniques like HYV seeds, natural fertilizers, and modern machinery. Not only this, but he also told them about government schemes like Kisan Credit Card, Pradhan Mantri Fasal Bima Yojana, and many more, which could also help farmers to increase the productivity of their crops. After the meeting, all were happy, and the sarpanch raised Krishna’s work.",
    },
    {
      imgSrc: Image3,
      description:
        "Vimal Gupta was appointed as the new library in charge of APS Gwalior. After joining, he noticed that the books in the library were off very old edition. He saw that the students were not using them properly as many of them were torned, and some were done dirty with the pen. This made him feel terrible, and he thought of solving the problem. Firstly with the help of students, Vimal gave new books suggestions to the school principal. Also, during the classes, he told students about the book’s importance and warned them not to write anything in the books again. Later, many new books came, and Vimal saw the increasing interest of students in the books and was happy.",
    },
    {
      imgSrc: Image4,
      description:
        "Vijay was a third-year engineering student at MITS, Gwalior. He was also a keen athlete. One day he came to know about Vijay academy organizing a Health Run Marathon in the City. Vijay found this opportunity excellent and thought to take part in it. Vijay started practicing for it in the morning and started taking a proper diet. Not only this, but he also took help from YouTube about the techniques of running a marathon properly. On the day of the marathon, he also called his friends, and they all took part with full Josh and excitement in the marathon. Finally, Vijay bagged the first position in the marathon and got a prize for it.",
    },
    {
      imgSrc: Image5,
      description:
        "Major Krishna was posted in the higher altitudes of Jammu and Kashmir. One day he got orders from senior officers to arrange a trekking activity with his team. Krishna was very excited about the opportunity. He called a meeting of his team and made a rough plan about the event. Krishna, with his team, decided the path and schedule of trekking. On the event’s day, Krishna distributed pieces of equipment like a map, compass, shoes, rope, sticks, and kit bag to all the team members. Later they all climbed the mountain with full Josh. The task was completed, and the seniors praised the whole team’s work.",
    },
    {
      imgSrc: Image6,
      description:
        "Abhay was a BSC graduate who lived in a village of Bihar. As the rainy season prevailed, his village was flooded all around with water. However, the NDRF team was working, but he also thought of helping them with his friend. He gathered some of his friends and started small rescue operations with the NDRF team. Not only this, but he also worked at the relief camp and distributed food to the flood victims. He helped animals to reach areas of higher altitude. Later the condition was under control, and he was delighted doing the work.",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {imagesData.map((item, index) => (
        <div
          className="card rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105"
          key={index}
        >
          <div className="image-holder h-[300px] bg-gray-200 cursor-pointer" onClick={() => openFullScreen(item.imgSrc)}>
            <img
              src={item.imgSrc}
              alt={`img-${index}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-holder p-4 text-gray-700">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDescription(index)}
            >
              <p className="text-sm">
                {expandedIndex === index
                  ? item.description
                  : item.description.substring(0, 100) + "..."}
              </p>
              <span>
                {expandedIndex === index ? (
                  <svg
                    className="w-5 h-5 transform rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      ))}

      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeFullScreen}
        >
          <img src={fullScreenImage} alt="Full Screen" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </section>
  );
};

export default Pyq;
