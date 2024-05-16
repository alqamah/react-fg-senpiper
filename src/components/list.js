import React, { useState, useEffect } from 'react';
import './list.css';

const FeedbackList = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    setFeedbackData(storedFeedback);
  }, []);

  const handleDelete = (index) => {
    const updatedFeedback = [...feedbackData];
    updatedFeedback.splice(index, 1);
    setFeedbackData(updatedFeedback);
    localStorage.setItem('feedback', JSON.stringify(updatedFeedback));
  };

  return (
    <div className="feedback-list">
      <div className="header">
        <h2>Feedback Records</h2>
      </div>
      <p>
        {feedbackData.length} record{feedbackData.length !== 1 && 's'} found.{' '}
        {feedbackData.length > 0 && feedbackData.length === 12 && '(Filters applied)'}
      </p>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service Quality</th>
            <th>Cleanliness</th>
            <th>Beverage Quality</th>
            <th>Overall Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.customerName}</td>
              <td>{feedback.email}</td>
              <td>{feedback.phone}</td>
              <td>{feedback.serviceQuality}</td>
              <td>{feedback.cleanliness}</td>
              <td>{feedback.beverageQuality}</td>
              <td>{feedback.diningExperience}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;