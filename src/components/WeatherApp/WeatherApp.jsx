import React from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';


export const WeatherApp = () => {

    let api_key= "9d298d0b309a18cb36c7b3a607985819";

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder='Search' />
            <div className="search-icon">
                <img src={search_icon} alt="search icon" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="cloud covering the sun" />
        </div>
        <div className="weather-temp">87°f</div>
        <div className="weather-location">Ocala</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="moisture in the air" />
                <div className="data">
                    <div className="humidity-percentage">54%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="windy" />
                <div className="data">
                    <div className="humidity-percentage">4 mph</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  );
}
