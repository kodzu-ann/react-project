import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayWeather(response) {
    alert(`thw weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "3f121476484fbe98889e89e05fa05cde";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  return <h2> Hello there </h2>;
}
