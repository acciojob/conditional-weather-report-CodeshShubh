import React from 'react'

const WeatherDisplay = ({WeatherData}) => {
    const {temperature, conditions} = WeatherData;
    const tempColor = Number(temperature)>20 ? 'red' : 'blue'
  return (
    <div>
        <p style={{color:tempColor}}>Temperature: {temperature}</p>
        <p>Conditions: {conditions}</p>
    </div>
  )
}

export default WeatherDisplay