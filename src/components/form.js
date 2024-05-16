import React, { useState } from 'react';
import './form.css'
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/success-animation.json';
import 'react-phone-number-input/style.css'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'


const FeedbackForm = () => {
  //creating states and initial values
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceQuality: null,
    beverageQuality: null,
    cleanliness: null,
    diningExperience: null,
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  //adding the data to state with form-data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //adding the data to state with radio-buttons
  const handleRadioChange = (e, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  //performing the validations
  const validateForm = () => {
    let errors = {};

    //Field Validations
    if (!formData.customerName) errors.customerName = 'Customer name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email address';
    if (!formData.phone) errors.phone = 'Phone number is required';
    else if (!isValidPhoneNumber(formData.phone)) errors.phone = 'Invalid phone number';

    // // Validate Radio buttons
    if (formData.serviceQuality === null) errors.serviceQuality = 'Please rate the service quality';
    if (formData.beverageQuality === null) errors.beverageQuality = 'Please rate the beverage quality';
    if (formData.cleanliness === null) errors.cleanliness = 'Please rate the cleanliness';
    if (formData.diningExperience === null) errors.diningExperience = 'Please rate the dining experience';

    return errors;
  };

  //submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Store data in localStorage
      const feedback = JSON.parse(localStorage.getItem('feedback') || '[]');
      feedback.push(formData);
      localStorage.setItem('feedback', JSON.stringify(feedback));
      //console.log(feedback);
      setIsFormSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };
  //reloading the page after the animation
  const handleAnimationComplete = () => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };
  //animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="container">
      {isFormSubmitted ? (
        <><Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
        <h1 className='success-submit-header'>Thank you, {formData.customerName} for completing the information &#10084;</h1>
        {handleAnimationComplete()}
        </>
      ):
      <div className="feedback-form">
        <h2>Feedback Form</h2>
        <p>
        We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='form-group form-group-name'>
            <label className='form-label-title' htmlFor="customerName">Customer Name<span className='label-mandatory' >*</span></label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
            />
            {formErrors.customerName && <span className="error">{formErrors.customerName}</span>}
          </div>
          <div className='email-phone'>
            <div className='form-group form-group-email'>
              <label className='form-label-title' htmlFor="email">Email<span className='label-mandatory' >*</span></label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
            <div className='form-group form-group-phone'>
              <label className='form-label-title' htmlFor="phone">Phone<span className='label-mandatory' >*</span></label>
              <PhoneInput
                type="tel" id="phone" name="phone"
                defaultCountry="IN"
                initialValueFormat="national"
                value={formData.phone}
                onChange={(value) => handleChange({ target: { name: 'phone', value } })}
              />
              {formErrors.phone && <span className="error">{formErrors.phone}</span>}
            </div>
          </div>
          <div className='form-group rating-group'>
            <div className="radio-group service-quality">
              <div>
                <label className='form-label-title'>Please rate the quality of the service you received from the host<span className='label-mandatory' >*</span></label>
                <div className='rating-options'>
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
                {formErrors.serviceQuality && <span className="error">{formErrors.serviceQuality}</span>}
              </div>
            </div>
            <div className="radio-group cleanliness">
              <div>
                <label className='form-label-title'>Was our restaurant clean?<span className='label-mandatory' >*</span></label>
                <div className='rating-options'>
                  <label>
                    <input
                      type="radio"
                      name="cleanliness"
                      value="Excellent"
                      checked={formData.cleanliness === 'Excellent'}
                      onChange={(e) => handleRadioChange(e, 'cleanliness')}
                    />
                    Excellent
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="cleanliness"
                      value="Good"
                      checked={formData.cleanliness === 'Good'}
                      onChange={(e) => handleRadioChange(e, 'cleanliness')}
                    />
                    Good
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="cleanliness"
                      value="Fair"
                      checked={formData.cleanliness === 'Fair'}
                      onChange={(e) => handleRadioChange(e, 'cleanliness')}
                    />
                    Fair
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="cleanliness"
                      value="Bad"
                      checked={formData.cleanliness === 'Bad'}
                      onChange={(e) => handleRadioChange(e, 'cleanliness')}
                    />
                    Bad
                  </label>
                </div>
                {formErrors.cleanliness && <span className="error">{formErrors.cleanliness}</span>}
              </div>
            </div>
            <div className="radio-group beverage-quality">
              <div>
                <label className='form-label-title'>Please rate the quality of your beverage.<span className='label-mandatory' >*</span></label>
                <div className='rating-options'>
                  <label>
                    <input
                      type="radio"
                      name="beverageQuality"
                      value="Excellent"
                      checked={formData.beverageQuality === 'Excellent'}
                      onChange={(e) => handleRadioChange(e, 'beverageQuality')}
                    />
                    Excellent
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="beverageQuality"
                      value="Good"
                      checked={formData.beverageQuality === 'Good'}
                      onChange={(e) => handleRadioChange(e, 'beverageQuality')}
                    />
                    Good
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="beverageQuality"
                      value="Fair"
                      checked={formData.beverageQuality === 'Fair'}
                      onChange={(e) => handleRadioChange(e, 'beverageQuality')}
                    />
                    Fair
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="beverageQuality"
                      value="Bad"
                      checked={formData.beverageQuality === 'Bad'}
                      onChange={(e) => handleRadioChange(e, 'beverageQuality')}
                    />
                    Bad
                  </label>
                </div>
                {formErrors.beverageQuality && <span className="error">{formErrors.beverageQuality}</span>}
              </div>
            </div>
            <div className="radio-group overall-experience">
              <div>
                <label className='form-label-title'>Please rate your overall dining experience<span className='label-mandatory' >*</span></label>
                <div className='rating-options'>
                  <label>
                    <input
                      type="radio"
                      name="diningExperience"
                      value="Excellent"
                      checked={formData.diningExperience === 'Excellent'}
                      onChange={(e) => handleRadioChange(e, 'diningExperience')}
                    />
                    Excellent
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="diningExperience"
                      value="Good"
                      checked={formData.diningExperience === 'Good'}
                      onChange={(e) => handleRadioChange(e, 'diningExperience')}
                    />
                    Good
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="diningExperience"
                      value="Fair"
                      checked={formData.diningExperience === 'Fair'}
                      onChange={(e) => handleRadioChange(e, 'diningExperience')}
                    />
                    Fair
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="diningExperience"
                      value="Bad"
                      checked={formData.diningExperience === 'Bad'}
                      onChange={(e) => handleRadioChange(e, 'diningExperience')}
                    />
                    Bad
                  </label>
                </div>
                {formErrors.diningExperience && <span className="error">{formErrors.diningExperience}</span>}
              </div>
            </div>
          </div>
          <button type="submit">Submit Feedback</button>
        </form>  
      </div>
      }
    </div>
  );
};

export default FeedbackForm;