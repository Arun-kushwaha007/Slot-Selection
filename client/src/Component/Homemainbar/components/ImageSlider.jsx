import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const imgs = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/27f122dc27c89e70e74270d5668dcb7b8120d6b888ac95eedc2c92faf6b2e41e?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b",
    "https://ondemand.bannerbear.com/simpleurl/01YWAxB7nGYdJrKoXM/title/text/Hi!%20*Freshmen*%20Orientation%20Day",
    `https://ondemand.bannerbear.com/simpleurl/ley9O0B2ZGbB4GjRDY/date/text/${encodeURIComponent(
      new Date("2023-02-01").toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    )}/countdown/text/${encodeURIComponent(
      calculateDays(new Date(), new Date("2023-02-01")) > 0
        ? `${calculateDays(new Date(), new Date("2023-02-01"))} days left`
        : "Live Now!"
    )}`
  ];

  const dots = Array(imgs.length).fill("");

  useEffect(() => {
    const id = setInterval(() => {
      changeSlide();
    }, 5000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [currentImg]);

  const changeSlide = (n) => {
    let nextImg = (currentImg + 1) % imgs.length;
    if (n !== undefined) {
      clearInterval(intervalId);
      const newIntervalId = setInterval(() => {
        changeSlide();
      }, 3000);
      setIntervalId(newIntervalId);
      nextImg = n;
    }
    setCurrentImg(nextImg);
  };

  return (
    <>
      <div className="slider" style={styles.slider}>
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            style={{
              ...styles.image,
              opacity: currentImg === index ? 1 : 0,
              zIndex: currentImg === index ? 1 : 0
            }}
          />
        ))}
      </div>
      <div className="navigation-button" style={styles.navigationButton}>
        {dots.map((dot, index) => (
          <span
            key={index}
            className={`dot ${currentImg === index ? "active" : ""}`}
            style={{
              ...styles.dot,
              backgroundColor: currentImg === index ? "#717171" : "#bbb"
            }}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
    </>
  );
};

const styles = {
  slider: {
    width: "100vw",
    height: "510px",
    position: "relative",
},
image: {
    width: "100%",
    height: "500px",
    position: "absolute",
    top: 0,
    left: 0,
    transition: "opacity 0.5s ease-in-out"
},
navigationButton: {
      backgroundColor : "#EBEEFF",
    //   color:"white",
    textAlign: "center",
    position: "relative"
  },
  dot: {
    cursor: "pointer",
    height: "15px",
    width: "15px",
    margin: "0 2px",
    backgroundColor: "#EBEEFF",
    borderRadius: "50%",
    display: "inline-block"
  }
};

function calculateDays(today, eventDate) {
  const difference = eventDate.getTime() - today.getTime();
  return Math.ceil(difference / (1000 * 3600 * 24)); // convert to days
}

export default ImageSlider;
