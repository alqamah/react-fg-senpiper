import React, { useState } from "react";
import FeedbackHeader from "./components/header.js";
import FeedbackForm from "./components/form.js";
import FeedbackList from "./components/list.js";

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
      <FeedbackHeader />
      <div>
        <button onClick={() => setActiveTab("FeedbackForm")}>
          FeedbackForm
        </button>
        <button onClick={() => setActiveTab("FeedbackList")}>
          FeedbackList
        </button>
      </div>
      {renderTab()}
    </>
  );
}

export default App;
