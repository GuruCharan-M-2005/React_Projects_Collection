import React, { useState } from 'react';
import './Temperature.css'; // Import CSS file for styling

export default function Temperature() {
  const [temperature, setTemperature] = useState(20);

  const increaseTemperature = () => {
    setTemperature(prevTemperature => prevTemperature + 1);
  };

  const decreaseTemperature = () => {
    setTemperature(prevTemperature => prevTemperature - 1);
  };

  // Function to calculate color based on temperature
  const getColor = (temp) => {
    if(temp<=0){
        return 'blue'
    }
    else if (temp <= 10) {
      return 'skyblue';
    } else if (temp <= 20) {
      return 'yellow';
    } else if (temp <= 35) {
      return 'orange';
    } else if(temp<=50){
      return 'red';
    }else{
        alert("High room temperature");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Temperature Control App</h1>
      <div className="temperature-display" style={{ color: getColor(temperature) }}>{Math.round(temperature)}°</div>
      <div className="buttons">
        <button className="button" onClick={increaseTemperature}>Increase</button>
        <button className="button" onClick={decreaseTemperature}>Decrease</button>
      </div>
    </div>
  );
}
