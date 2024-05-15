import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

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

  useEffect(() => {
    const homeContainer = document.querySelector('.contact-page');
    const maxBubbles = 20; 
    const activeBubbles = []; 
  
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      homeContainer.appendChild(bubble);
  
      
      const size = Math.random() * 20 + 5;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      const duration = Math.random() * 6 + 2;
      bubble.style.animationDuration = `${duration}s`;
  
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
  
     
      activeBubbles.push(bubble);
  
      
      if (activeBubbles.length > maxBubbles) {
        const oldestBubble = activeBubbles.shift();
        oldestBubble.remove();
      }
  
      
      bubble.addEventListener('animationend', () => {
        const index = activeBubbles.indexOf(bubble);
        if (index !== -1) {
          activeBubbles.splice(index, 1);
        }
        bubble.remove();
      });
    };
  
    for (let i = 0; i < 15; i++) {
      createBubble();
    }
  
    const bubbleInterval = setInterval(createBubble, 3000);
  
    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);

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
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      <div className="button-container">
        <a href="https://github.com/alexwhelan12" target="_blank" rel="noopener noreferrer" className="contact-button"><FaGithub size={32} /></a>
        <a href="https://www.linkedin.com/in/alex-whelan-791ab8286/" target="_blank" rel="noopener noreferrer" className="contact-button"><FaLinkedin size={32} /></a>
      </div>

    </section>
  );
};

export default ContactMe;
