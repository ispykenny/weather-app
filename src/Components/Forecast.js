import React, {useEffect} from 'react';
import moment from 'moment'
import Flickity from 'flickity'


function Forecast(props) {
  const renderedTemp = kelTemp => Math.floor(kelTemp * (9/5) + 32);

  const WeatherIcon = (icon, altTag) => {
    const iconBaseUrl = "http://openweathermap.org/img/w/"
    const src = `${iconBaseUrl}${icon.icon}.png`
    return <img src={src} alt={altTag}/>
  }


  const Day = weather => {
    let weatherForecast = weather.weather.data.list
    let dailyWeather = weatherForecast.map((item, index) => (
      <div key={index} className="daily-weather__item">
        <div style={{height: 50}}>
          <WeatherIcon icon={item.weather[0].icon} alt={item.weather[0].description}/>
        </div>
        <h2>{moment().add(index, 'days').calendar().split(' ')[0]}</h2>
        <small>{item.weather[0].description}</small>
        <p>Low: {renderedTemp(item.temp.min - 273)}°  | High: {renderedTemp(item.temp.max - 273)}°</p>
      </div>
    ))

    return (
      <div className="daily-weather">
        {dailyWeather}
      </div>
    );
  }


  useEffect(() => {
    let slider = new Flickity('.daily-weather',{
      freeScroll: true,
      contain: true,
      pageDots: false,
      prevNextButtons: false
    })
    return () => {
      slider.destroy();
    };
  });

  
  
  

  return (
    <div>
      <Day weather={props}/>
    </div>
  )

}

export default Forecast;