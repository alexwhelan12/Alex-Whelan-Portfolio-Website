import React, { useState } from 'react';
import './ContactPage.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For demonstration purposes
    // You can perform further actions here, such as sending the form data to a backend or displaying a confirmation message
  };

  return (
    <section className='contact-page'>
        <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit">Send Message</button>
        </form>
        </div>
    </section>
    
  );
};

export default ContactMe;
