import React, { useState } from "react";
import FeedbackForm from "./components/form.js";
import FeedbackList from "./components/list.js";
import logo from "./assets/logo.png"
import Lottie from 'react-lottie';
import foodAnim from './assets/lotties/food-animation.json';
import "./components/app.css";

function App() {
  const [activeTab, setActiveTab] = useState("FeedbackForm");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: foodAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  const renderTab = () => {
    switch (activeTab) {
      case "FeedbackForm":
      return <FeedbackForm />;
      case "FeedbackList":
      return <FeedbackList />;
      default:
      return null;
    }
  };
  
  return (
    <>
      <div className="feedback-header">
        <div className="header">
          <img src={logo} alt="logo" />
          <h1>Aromatic Bar</h1>
          <div id="line">
          <Lottie
          options={defaultOptions}
          style={{borderRadius: '50%', borderBottom: '2px solid grey'}}
          height={100}
          width={100}
          />
          </div>
        </div>
      </div>
      <div className="tabs">
        <button onClick={() => setActiveTab("FeedbackForm")}>
          Feedback Form
        </button>
        <button onClick={() => setActiveTab("FeedbackList")}>
          Feedback List
        </button>
      </div>
      {renderTab()}
    </>
  );
}

export default App;
