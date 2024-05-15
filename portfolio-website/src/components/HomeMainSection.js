import React, { useEffect } from 'react';
import './HomeMainSection.css'; 
import HeadShot from './HeadShot.jpeg'; // Import the image file
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HomePageMainSection = () => {
  const [words] = useTypewriter({
    words: ['Alex Whelan', 'SWE Student', 'Web Developer'],
    loop: {},
    typeSpeed: 100, 
    deleteSpeed: 100, 
    delaySpeed: 2000, 
  });

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

  return (
    <section className="home">
      <div className="overlay">
        <div className="content">
          <div className="left-section">
            <img src={HeadShot} alt="Headshot" className="photo" />
            <h1><span style={{color: "#192a56"}}>{words}</span><span><Cursor cursorColor="#192a56"/></span></h1>
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
}

export default HomePageMainSection;
