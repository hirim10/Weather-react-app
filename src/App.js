import './App.css';
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components"
import City from './Components/City'
import Weather from './Components/Weather'

const API_KEY="497beb6393752540f505fb7509b39a8b";

const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items:center;
box-shadow: 0 3px 6px #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background: white;
`;

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const AppLabel = styled.span`
color: black;
margin: 20px auto;
font-size: 18px;
font-weight: bold;
`;


// const City = styled.div`
// display: flex;
// flex-direction: column;


// const Weather = styled.div
// display: flex;
// flex-direction: column;


function App() {
  const [city,setCity] = useState();
  const [weather,setWeather] = useState();

  const fetchWeather= async (e)=>{
    e.preventDefault();
    const response= 
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      setWeather(response.data);
    };
  return (
    <Container>
      <AppLabel>React Weather app</AppLabel>
      {city && weather ? (
          <Weather weather={weather} city={city}/>
        ):(
          <City setCity={setCity} fetchWeather={fetchWeather}/>
        )}
    </Container>
  );
}

export default App;
