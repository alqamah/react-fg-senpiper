import React, { useState } from "react";
import FeedbackForm from "./components/form.js";
import FeedbackList from "./components/list.js";
import logo from "./assets/logo.png"
import "./components/app.css";

function App() {
  const [activeTab, setActiveTab] = useState("FeedbackForm");
  
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
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/0lEQVR4nO2aS2yNQRiGn1LRBZaqQbtxCWIh3VASEoIGG7VRictGCLqqBbVAJMqCxG2BaNJuXBaaCBaKpE1KqctCVNBKlI2SWDQaTZsjX/Ke5ETOnPZPZ6YS50lm85/533e+c2b+//tmDuT5P5kKLABWA9uBQ8A54DbwFPgCDACv1Cc6k4BZwDJgM1AD1AONwCOgC+gHUgnaADA3VgCLgBZgaJSD61dQj4Em4JSCrgIqgNn61a6r/4kYQcwEvsvQAvkKdADNwHmgTtNnDbAQmJZAu0q6d4nABZndSTjI0TBH2rZmgjAdaAD6Es73sbQ+eZq3twXdGTGA1F+tU2MYM9sk+B4oJR6lwAd5V/sQbJDYPuKzX97XfIi9ldhy4rNC3m98iP2UWLSXVAbz5f0DDwyO40JPqf32EUjbPxBIKx55LdFywlMuL/P0TrPELY0IzRZ5WXbsnbMSryU8B+V1JoR4jcQvEp5L8joQQnyTxO8Rnvvy2hhCfLHE7QUZmi55Wd3jnSkS/wUUZFzfoLS7F6hMoOe6r0AeKXkG4ZsMSjKu9WY87z8n0HLdV6Jr5hWMDplUjGJAI+G6r0LXzCsYN7Kk1ZUalA1mfQIt133V8rD6PRj1MrG6PBRH5HEyoAd7ZHIloMdVeewO6ME6mdhWkIt24Lmj1i7WZ5aIumiRx1oCMk8m3Tn6vFSfHs13G/wMlcyfMupwF90x6p/JwLBqlEJHn2Jtg7pS8ic5dkYKpT0sr6CkH5tlOfpMAHZomvWrtWvjzj5zUSZt8whOtkKrzbNeKxFo9GycLZBGInBcZscCah8lArsCfmtN0t5JBFZ5WBcjTbOVRCD9ZPGx4F07NGVEYKJjr6vVUyCD8ohCj0xtJ9D3ruJHIvJQppZ7+cJSedN8QETSGaplw77YK83LRKROpnao6YvT0jxMRNKHPzc9at6S5lYikq6rn3nUtDrFNJcSkZKMc4siD3pF0kqpdolGgc4UfR8fvGMcsK3/Fwn+/ZCrDalqXDIegeTJg5s/ZHy0cT//J8wAAAAASUVORK5CYII=" alt="cute food icon"/>

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
