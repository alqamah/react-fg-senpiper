import React, { useState, useEffect, useCallback } from 'react';
import iconRefresh from '../assets/icon-refresh.png'
import './list.css';

const FeedbackList = () => {
  //setting up states and initial values
  const [feedbackData, setFeedbackData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecords, setSelectedRecords] = useState([]);

  //fetching feedback data from local storage
  const fetchFeedbackData = () => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    const filteredFeedback = storedFeedback.filter((feedback) =>
      Object.values(feedback).some((value) =>
        value !== null && value !== undefined
          ? value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          : false
      )
    );
    setFeedbackData(filteredFeedback);
  };

  //select-records functionality
  const handleRecordSelection = (index) => {
    if (selectedRecords.includes(index)) {
      setSelectedRecords(selectedRecords.filter((i) => i !== index));
    } else {
      setSelectedRecords([...selectedRecords, index]);
    }
  };

  //Deletion of selected records
  const handleDelete = () => {
    const updatedFeedback = feedbackData.filter((feedback, index) =>!selectedRecords.includes(index));
    setFeedbackData(updatedFeedback);
    localStorage.setItem('feedback', JSON.stringify(updatedFeedback));
    setSelectedRecords([]);

  };

  //Search functionality
  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  //refresh button functionality
  const handleRefresh = useCallback(() => {
    setRefreshKey((prevKey) => prevKey + 1);
  }, []);  
    
  //effect hook for re-rendering
  useEffect(() => {
    fetchFeedbackData();
  }, [refreshKey, searchTerm, feedbackData]);
  

  return (
    <div className="feedback-list">
      <div className="header">
        <h2>Feedback Records</h2>
        <div className='header-search'>
          <input type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg> */}
        </div>
        
        <button className="header-refresh" title="Reload Page" onClick={handleRefresh}><img src={iconRefresh} alt='refresh-icon'/></button>
      </div>
      <p>
        {feedbackData.length} record{feedbackData.length !== 1 && 's'} found.{' '}
      </p>
      <div className="selected-records-actions">
        <button onClick={handleDelete} className="delete-btn" disabled={selectedRecords.length === 0}>
          Delete {selectedRecords.length} Record(s)
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service Quality</th>
            <th>Cleanliness</th>
            <th>Beverage Quality</th>
            <th>Overall Experience</th>
          </tr>
        </thead>  
        <tbody>
          {feedbackData.map((feedback, index) => (
            <tr key={index} onClick={() => handleRecordSelection(index)}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRecords.includes(index)}
                  onChange={() => handleRecordSelection(index)}
                />
              </td>
              <td>{feedback.customerName}</td>
              <td>{feedback.email}</td>
              <td>{feedback.phone}</td>
              <td>{feedback.serviceQuality}</td>
              <td>{feedback.cleanliness}</td>
              <td>{feedback.beverageQuality}</td>
              <td>{feedback.diningExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;