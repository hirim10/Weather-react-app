import styled from "styled-components"
import {WeatherIcons} from "../App";
import React from "react";

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

const WeatherCond=styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-contents: space-between;
margin: 30px auto;
`;

const Cond=styled.span`
margin: 20px auto;
font-size: 14px;
& span{
    font-size: 21px;
}
`;

const Logo= styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
`;

const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent=(props)=>{
  const{name,value}=props;
  return(
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]}/>
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  )
}


const Weather =(props)=>{
  const {weather} = props;
  const isDay = weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp) => {
      return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }  
  return(
        <>
        <WeatherCond>
        <Cond><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{`  |  ${weather?.weather[0].description}`}</Cond>
        <Logo src={WeatherIcons[weather?.weather[0].icon]}/>
            
        </WeatherCond>
        <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
        <WeatherInfoLabel>Weather Information</WeatherInfoLabel>
        <WeatherInfoContainer>
          <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
            value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
          <WeatherInfoComponent name="humidity" value={weather?.main?.humidity}></WeatherInfoComponent>
          <WeatherInfoComponent name="wind" value={weather?.wind?.speed}></WeatherInfoComponent>
          <WeatherInfoComponent name="pressure" value={weather?.main?.pressure}></WeatherInfoComponent>
        </WeatherInfoContainer>
        </>
    )
}
export default Weather