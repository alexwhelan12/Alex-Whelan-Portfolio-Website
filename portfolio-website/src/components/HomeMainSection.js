import React, { useEffect, useRef } from 'react';
import './HomeMainSection.css'; 
import HeadShot from './HeadShot.jpeg'; // Import the image file
import { Typed } from 'react-typed';

const HomePageMainSection = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const homeContainer = document.querySelector('.home');
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

  useEffect(() => {
    const options = {
        strings: ['Alex Whelan', 'SWE Student', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
    };

    // Ensure the element is referenced correctly
    typed.current = new Typed(el.current, options);

    return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.current.destroy();
    };
  }, []);

  

  return (
      <section className="home">
        <div className="overlay">
          <div className="content">
            <div className="left-section">
              <img src={HeadShot} alt="Headshot" className="photo" />
              <h1>
                <span ref={el} className="typewriter"></span>
              </h1>
            </div>
            <div className="TextBox">
              <p>I'm a <span>2nd Year Software Engineering student</span> at the <span>University of Calgary</span>. I'm very passionate about software engineering,
                which is evident in my involvement in the <span>University of Calgary Solar Car Team</span>. My skills include programming languages like C/C++, Python,
                HTML, CSS, JavaScript. I also have very good proficiency in technologies such as React.js, Tailwind.css and SQL.</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HomePageMainSection;
