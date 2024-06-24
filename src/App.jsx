import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {Search } from './Components/Search';
import {Result } from './Components/Result';
import forecastor from './assets/imgs/Forecastor.png';



const App = () => {
  let [location, setLocation] = useState('');
  let [details, setDetails] = useState({
    temp: '',
    feel: '',
    pressure: '',
    humidity: '',
    location: '',
    wind: '',
    weather: '',
    weather_desc: '',
    country: '',
    sunrise: '',
    sunset: '',
  });
  let [apidata ,setApidata] = useState(null);

  function handleWeatherSearch(e) {
    e.preventDefault();
    const api_key = import.meta.env.VITE_API_KEY;

    const geolocation_api = axios.get( "http://api.openweathermap.org/geo/1.0/direct?q="+ location + "&limit=1&appid=" + api_key);

    geolocation_api
    .then((response) => {
        // Handle the first response data
        const responseData = response.data;

        let weather_api = axios.get("http://api.openweathermap.org/data/2.5/weather?lat="+ responseData[0].lat +"&lon=" + responseData[0].lon + "&appid=" + api_key + "&units=metric");
        return weather_api;
    })
    .then((res) => {
        setApidata(res.data);
        setDetails({
          ...details,
          temp: Math.round(res.data.main.temp),
          feel: Math.round(res.data.main.feels_like),
          pressure: res.data.main.pressure,
          humidity: res.data.main.humidity,
          location: location,
          wind: res.data.wind.speed,
          weather: res.data.weather[0].main,
          weather_desc: res.data.weather[0].description,
          country: res.data.sys.country,
          sunrise: res.data.sys.sunrise,
          sunset: res.data.sys.sunset,
        });
        
        document.querySelector('.page-wrapper').classList.add('open-wrapper');
        document.querySelector('.location-col').classList.add('location-col-open');

    })
    .catch((error) => {
        // Handle errors for both requests
        console.error('Error:', error);
    });
    
  }

  return (
      <div className="page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center flex-column align-items-center">
            <img src={forecastor} alt="Forecastor logo" draggable="false" />
            <h3 className='underlogo-text'>Forecasts made easy</h3>
            </div>
          </div>
        <div className="row">
          <div className="col-md-2 location-col">
          <div className="d-flex align-items-center">
          <box-icon type='solid' name='map' color='#fff'></box-icon>
            <div className="text-group">
              <p className='current-location'>Current Location</p>
              <p className='location-text'>{details.location}, {details.country} </p>
            </div>
          </div>
          </div>
          <div className="col">
            <Search onLocationChange={(e) => {
              setLocation(e.target.value);
            }}
            onLocationSubmit={handleWeatherSearch}
            />
          </div>
        </div>
          <Result Weatherdata={details}/>
      </div>
      </div>
  );
};

export default App;