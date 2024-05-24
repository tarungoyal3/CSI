import React, { useState } from 'react';
import './App.css';
function App() {
  const [step, setStep] = useState(1);
  const [formErrors, setFormErrors] = useState({}); // State to manage form validation errors
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission status

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
    pannumber: '',
    aadharnumber: '',
  });
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

  const validateStep1 = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    // Add validations for other fields in step 1
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    // Add validations for other fields in step 2
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      country: value,
      city: '', // Reset city when country changes
    });
  };

  const countries = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'USA' },
  ];

  const cities = {
    india: [
      { value: 'mumbai', label: 'Mumbai' },
      { value: 'delhi', label: 'Delhi' },
    ],
    usa: [
      { value: 'new-york', label: 'New York' },
      { value: 'los-angeles', label: 'Los Angeles' },
    ],
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateStep2()) {
      setSubmittedData(formData); 
    } else {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2>Form</h2>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {formErrors.username && <span className="error">{formErrors.username}</span>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {formErrors.password && <span className="error">{formErrors.password}</span>}
            </div>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Personal Info</h2>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
            </div>
            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleCountryChange}
                required
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
            {formData.country && (
              <div className="form-group">
                <label>City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select City</option>
                  {cities[formData.country].map((city) => (
                    <option key={city.value} value={city.value}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="form-group">
              <label>Pan Number</label>
              <input
                type="text"
                name="pannumber"
                value={formData.pannumber}
                onChange={handleChange}
                required
              />
              {formErrors.pannumber && <span className="error">{formErrors.pannumber}</span>}
            </div>
            <div className="form-group">
              <label>Aadhar Number</label>
              <input
                type="text"
                name="aadharnumber"
                value={formData.aadharnumber}
                onChange={handleChange}
                required
              />
              {formErrors.aadharnumber && <span className="error">{formErrors.aadharnumber}</span>}
            </div>
            <button type="button" onClick={prevStep}>
              Back
            </button>
            <div className="submit">
              {/* <button type="submit">Submit</button> */}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>

            </div>
          </div>
        )}
      </form>
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <ul>
            {Object.entries(submittedData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}: </strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;




