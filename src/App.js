import { useEffect, useState } from 'react';
import './App.css';
import Temperature from './components/Temperature.jsx';
import { styles } from "./Styles/styles.js";
import Forcast from './components/Forcast.jsx';
const defaultLocation = "calgary";
const apitUrl = `http://api.weatherapi.com/v1/forecast.json?key=551468ddcc0a416a9eb213034241801&q=${defaultLocation}&days=7&aqi=no`;

function App() {
  const [style, setStyle] = useState({})
  const [current, setCurrent] = useState(null)
  const [forecast, setForcast] = useState('')
  const [location, setLocation] = useState(defaultLocation);
  const [loading, setLoading] = useState(true)

  const getWeatherData = async () => {
    const response = await fetch(apitUrl);
    const weather = await response.json();
    setStyle(styles.find((element) => element.code === weather.current.condition.code));
    console.log(weather);
    return weather;
  }

  useEffect(() => {
    getWeatherData()
      .then((weather) => {
        setForcast(weather.forecast.forecastday);
        setCurrent(weather.current);
        setLocation(weather.location.name);
        setLoading(false);
      });
      
  }, []);


  return (
    <div className='w-screen h-screen' style={style.style}>
      {(loading) ? (
        ""
      ) : (
        <div className='w-1/2 m-auto'>
          <h1 className='text-center text-6xl'>{location}</h1>
          <Temperature current={current} />
        </div>
      )}
      {forecast && (
        forecast.map((elem, index) => (
          <div key={index}>
            <Forcast elem={elem}/>
            </div>
        ))
      )}
    </div>
  );
}

export default App;
