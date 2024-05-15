import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceQuality: null,
    beverageQuality: null,
    cleanliness: null,
    diningExperience: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const validateForm = () => {
    let errors = {};

    // Validate required fields
    // if (!formData.customerName) errors.customerName = 'Customer name is required';
    // if (!formData.email) errors.email = 'Email is required';
    // else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email address';
    // if (!formData.phone) errors.phone = 'Phone number is required';
    // else if (!/^\d{10}$/.test(formData.phone)) errors.phone = 'Invalid phone number';

    // // Validate radio buttons
    // if (formData.serviceQuality === null) errors.serviceQuality = 'Please rate the service quality';
    // if (formData.beverageQuality === null) errors.beverageQuality = 'Please rate the beverage quality';
    // if (formData.cleanliness === null) errors.cleanliness = 'Please rate the cleanliness';
    // if (formData.diningExperience === null) errors.diningExperience = 'Please rate the dining experience';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Store data in localStorage
      const feedback = JSON.parse(localStorage.getItem('feedback') || '[]');
      feedback.push(formData);
      localStorage.setItem('feedback', JSON.stringify(feedback));

      console.log(feedback);

      // Reset form data
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        serviceQuality: null,
        beverageQuality: null,
        cleanliness: null,
        diningExperience: null,
      });

      // Display success message
      alert('Thank you for completing the information');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <h2>Aromatic Bar</h2>
      <p>
        We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill
        out this questionnaire. Thank you.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
          />
          {formErrors.customerName && <span>{formErrors.customerName}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          {formErrors.phone && <span>{formErrors.phone}</span>}
        </div>
        <div>
          <div>
            <label>Service Quality</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="serviceQuality"
                  value="Excellent"
                  checked={formData.serviceQuality === 'Excellent'}
                  onChange={(e) => handleRadioChange(e, 'serviceQuality')}
                />
                Excellent
              </label>
              <label>
                <input
                  type="radio"
                  name="serviceQuality"
                  value="Good"
                  checked={formData.serviceQuality === 'Good'}
                  onChange={(e) => handleRadioChange(e, 'serviceQuality')}
                />
                Good
              </label>
              <label>
                <input
                  type="radio"
                  name="serviceQuality"
                  value="Fair"
                  checked={formData.serviceQuality === 'Fair'}
                  onChange={(e) => handleRadioChange(e, 'serviceQuality')}
                />
                Fair
              </label>
              <label>
                <input
                  type="radio"
                  name="serviceQuality"
                  value="Bad"
                  checked={formData.serviceQuality === 'Bad'}
                  onChange={(e) => handleRadioChange(e, 'serviceQuality')}
                />
                Bad
              </label>
            </div>
            {formErrors.serviceQuality && <span>{formErrors.serviceQuality}</span>}
          </div>
        </div>
        {/* Repeat the radio button group for other questions */}
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default FeedbackForm;