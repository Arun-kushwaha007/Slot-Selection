import React, { useState } from "react";
import "./FaqContainer.css";
// import FaqHeader from "./FaqHeader";
import FaqItem from "./FaqItem";

export default function FaqContainer() {
  const [faqs, setFaqs] = useState([
    {
      question: "lorem ipsum dolor sit amet, consectetur adipiscing",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "lorem ipsum dlfj lkdf a kfldkfjajk ?",
      answer: "You! The !",
      open: false
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many!",
      open: false
    }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="faq-container">
      {/* <FaqHeader /> */}
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FaqItem faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
