import React, {useEffect, useState} from 'react';
import weatherFetcher from '../Utils/weatherFetcher';

import Forecast from './Forecast';

function Weatherlist(props) {
  const [weather, setWeatherData] = useState({
    city: '',
    list: []
  }); 
  

  useEffect(() => {
    const location = props.slug.match.params.location;
    
    fetchWeather(location);
    
  },[props, props.slug.match.params.location]);



  const fetchWeather = async (location) => {
    let weatherData = await weatherFetcher(location)
    if(typeof weatherData === "object") {
      setWeatherData(weatherData);
    } else {
      alert(`unable to find a forecast for ${location}`)
    }
    
  }

  return (
    <div>
      <h1>Viewing 7 day forecast for {weather.city.name}</h1>
      {typeof weather === "object" ? <Forecast data={weather}/> : 'loading..'}
    </div>
  )

}

export default Weatherlist