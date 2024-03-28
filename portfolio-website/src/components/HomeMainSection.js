import React from 'react';
import './HomeMainSection.css'; 
import HeadShot from './HeadShot.jpeg'; // Import the image file

const HomePageMainSection = () => {
  return (
    <section className="home">
      <div className="overlay">
        <div className="content">
          <div className="left-section">
            <img src={HeadShot} alt="Headshot" className="photo" />
            <h1>Alex Whelan</h1>
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
