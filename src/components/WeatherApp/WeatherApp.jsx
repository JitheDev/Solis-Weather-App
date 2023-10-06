import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const api_key = "9d298d0b309a18cb36c7b3a607985819";

export const WeatherApp = () => {
  const [wicon, setWicon] = useState(clear_icon);
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [temperature, setTemperature] = useState('');
  const [location, setLocation] = useState('');

  const fetchWeatherData = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();

    setHumidity(data.main.humidity);
    setWind(Math.floor(data.wind.speed));
    setTemperature(Math.floor(data.main.temp));
    setLocation(data.name);

    switch (data.weather[0].icon) {
      case "01d":
      case "01n":
        setWicon(clear_icon);
        break;
      case "02d":
      case "02n":
        setWicon(cloud_icon);
        break;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        setWicon(drizzle_icon);
        break;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        setWicon(rain_icon);
        break;
      case "11d":
      case "11n":
        setWicon(snow_icon);
        break;
      case "13d":
      case "13n":
      case "50d":
      case "50n":
        setWicon(cloud_icon);
        break;
      default:
        setWicon(clear_icon);
        break;
    }
  };

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            console.log("Error retrieving location:", error);
            setHumidity(20);
            setWind(20);
            setTemperature(24);
            setLocation("London");
          }
        );
      } else {
        console.log("Geolocation not supported.");
        setHumidity(20);
        setWind(20);
        setTemperature(24);
        setLocation("London");
      }
    };

    getUserLocation();
  }, []);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=imperial&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();

    setHumidity(data.main.humidity);
    setWind(Math.floor(data.wind.speed));
    setTemperature(Math.floor(data.main.temp));
    setLocation(data.name);

    switch (data.weather[0].icon) {
      case "01d":
      case "01n":
        setWicon(clear_icon);
        break;
      case "02d":
      case "02n":
        setWicon(cloud_icon);
        break;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        setWicon(drizzle_icon);
        break;
      case "09d":
      case "09n":
      case "10d":
      case "10n":
        setWicon(rain_icon);
        break;
      case "11d":
      case "11n":
        setWicon(snow_icon);
        break;
      case "13d":
      case "13n":
      case "50d":
      case "50n":
        setWicon(cloud_icon);
        break;
      default:
        setWicon(clear_icon);
        break;
    }
  };

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="cloud covering the sun" />
      </div>
      <div className="weather-temp">{temperature}&#176;c</div>
      <div className="weather-location">{location}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="moisture in the air" />
          <div className="data">
            <div className="humidity-percentage">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="windy" />
          <div className="data">
            <div className="wind-rate">{wind} mph</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

