import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {

  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    formData.append("access_key", "72194b2d-7936-496e-9efa-1380b6a695ab");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSuccessMessage(true);
    }
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
    <div className="contactsBody">
    <section className='contact-page'>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required style={{"resize":"none"}}/>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        {successMessage && <p className="success-message" style={{"paddingLeft":"160px", "fontSize": "20px", "zIndex": "100"}}>Message sent successfully!</p>}
      </div>
      <div className="button-container">
        <a href="https://github.com/alexwhelan12" target="_blank" rel="noopener noreferrer" className="contact-button"><FaGithub size={32} /></a>
        <a href="https://www.linkedin.com/in/alex-whelan-791ab8286/" target="_blank" rel="noopener noreferrer" className="contact-button"><FaLinkedin size={32} /></a>
      </div>
      
    </section>
    </div>
  );
};

export default ContactMe;
