import React from "react";
import "./Homemainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BatchList from "./Batchlist";
import NDACoaching from "./NDACoaching/NDACoaching";
import ImageComponent from "./components/ImageComponent";
import FeatureSection from "./components/FeaturesSection";
import Footer from "./Footer/Footer";
import DefenceCategory from "./Coursers/DefenceCategory/DefenceCategory";
import FaqContainer from "./FAQ/FaqContainer";
import ImageSlider from "./components/ImageSlider";
// import Faq from "./FAQ/App";
import VideoPlayer from "./components/VideoPlayer";
import ResourcesPanel from "./components/ResourcesPanel";
import Faq from "./components/Faq";

function Homemainbar() {
  const user = useSelector((state) => state.currentuserreducer);
  const mentor = useSelector((state) => state.currentmentorreducer); // Added mentor selector
  const location = useLocation();
  const navigate = useNavigate();
  const batchlist = useSelector((state) => state.batchreducer);

  const checkauth = () => {
    if (mentor === null) {
      alert("Login as a mentor to add a batch");
      navigate("/AuthMentor"); // Navigate to mentor auth page
    } else {
      navigate("/Addbatch");
    }
  };

  return (
    <>
      {/* <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Batches</h1>
        ) : (
          <h1>All Batches</h1>
        )}
        {mentor && ( // Check if mentor is logged in
          <button className="ask-btn" onClick={checkauth}>Add batch</button>
        )}
      </div>
      <div>
        {batchlist.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{batchlist.data.length} batches</p>
            <BatchList batchlist={batchlist.data} />
          </>
        )}
      </div>
    </div> */}

      {/* Home page */}
      <ImageSlider/>
      {/* <ImageComponent /> */}
      <NDACoaching />
      <FeatureSection />
      <VideoPlayer/>
      <ResourcesPanel/>
      
        <Faq/>
        
    
      
      

      <Footer />
    </>
  );
}

export default Homemainbar;
