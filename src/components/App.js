
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {

  const [WeatherData, setWeatherData] = useState({
   temperature: 0, 
   conditions: '' 
  })

  useEffect(()=>{
  const data = { temperature: 25, conditions: "Sunny" }
  setWeatherData(data)
  },[])
  return (
    <div>
      <h1>Weather Report</h1>
      <WeatherDisplay WeatherData={WeatherData}/>
    </div>
  )
}

export default App
