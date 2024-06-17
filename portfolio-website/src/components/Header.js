import React, { useState, useEffect } from 'react';
import './Header.css';
import { ReactComponent as Sun } from './sun-svgrepo-com.svg';
import { MdPadding } from 'react-icons/md';
import { ReactComponent as Cloud } from './cloud-svgrepo-com.svg';
import { ReactComponent as Rain } from './rain-svgrepo-com.svg';
import { ReactComponent as Snow } from './snow-alt-1-svgrepo-com.svg';
import { ReactComponent as Thunderstorm } from './thunderstorm-svgrepo-com.svg'

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [currentWeather, setCurrentWeather] = useState('');
  const [currentTemperature, setCurrentTemperature] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { coords } = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = coords;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        const data = await response.json();

        setCurrentWeather(getWeatherCategory(data.current_weather.weathercode));
        setCurrentTemperature(data.current_weather.temperature + '°C');

      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherCategory = (code) => {
  if ([0, 1].includes(code)) return 'Clear';
  if ([2, 3].includes(code)) return 'Cloudy';
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return 'Rain';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'Snow';
  if ([95, 96, 99].includes(code)) return 'Thunderstorm';
  return 'Unknown';
};

const iconStyles ={
  position: 'absolute',
  left: '200px',
  zIndex: 10000,
  margin: 0,
  marginRight: '880px',
  padding: 0,
  color: '#192a56',
}

const temperatureStyles = {
  position: 'absolute',
  left: '250px',
  zIndex: 10000,
  margin: 0,
  padding: 0,
  color: '#192a56',
  textAlign: 'left'
};


  return (
    <header className="header">
      <div className="time">{currentTime.toLocaleTimeString()}</div>
      {currentWeather === 'Clear' ? (
        <Sun
          width="40px"
          height="40px"
          color="black"
          style={iconStyles}
          title="Current Weather: Clear"
        />

      ) : currentWeather === 'Cloudy' ? (
        <Cloud
          width="40px"
          height="40px"
          color="black"
          style={iconStyles}
          title="Current Weather: Cloudy"
        />
      ) : currentWeather === 'Rain' ? (
        <Rain
          width="40px"
          height="40px"
          color="black"
          style={iconStyles}
          title="Current Weather: Rain"
        />
      ) : currentWeather === 'Snow' ? (
        <Snow
          width="40px"
          height="40px"
          color="black"
          style={iconStyles}
          title="Current Weather: Snow"
        />
      ) : currentWeather === 'Thunderstorm' ? (
        <Thunderstorm
          width="40px"
          height="40px"
          color="black"
          style={iconStyles}
          title="Current Weather: Thunderstorm"
        />
      ) : (
        <div></div>
      )} 
      <div className="temperature" style={temperatureStyles}>{currentTemperature}</div>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;;
