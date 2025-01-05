import styled from "styled-components"
import React, { useState } from "react";

const Logo= styled.img`
width: 100px;
height: 100px;
margin: 30px auto;
`;

const Label= styled.span`
color:black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
`;



const SearchBox= styled.form`
display: flex;
flex-direction: row;
color: black;
border: black solid 1px;
border-radius: 2px;
font-size: 18px;
font-weight: bold;
margin: 20px auto;

& input{
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
}

& button{
    padding: none;
    font-size: none;
    border: none;
    outline: none;
    cursor:pointer;
    color: white;
    background-color:black;
}

`;

const City =(props)=>{
    const {setCity, fetchWeather}=props;
    return(
        <>
        <Logo src="/icons/perfect-day.svg"/>
        <Label>Search For Your City</Label>
        <SearchBox onSubmit={fetchWeather}>
        <button className="btn btn-info" type="submit">Search</button>
        <input type="text" className="form-control" placeholder="City" aria-label="" aria-describedby="basic-addon1" onChange={(e)=>setCity(e.target.value)}/>
        </SearchBox>
        </>
    )
}
export default City