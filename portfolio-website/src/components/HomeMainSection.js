import React from 'react';
import './HomeMainSection.css'; 


const HomePageMainSection = () => {
  return (
    <section className="home">
      <div className="overlay">
        <div className="content">
          <img src="./HeadShot.jpeg" alt="Headshot"></img>
          <h1>Alex Whelan</h1>
            <div className="TextBox"><p>I'm a 2nd Year Software Engineering student at the University of Calgary. I'm very passionate about software engineering,
              which is evident in my involvment in the University of Calgary Solar Car Team. My skills include programming languages like C/C++, Python,
              HTML, CSS, JavaScript. I also have very good proficiency in technologies such as React.js, Tailwind.css and SQL.</p>
            </div>
          </div>
      </div>
      
    </section>
  );
}

export default HomePageMainSection;
