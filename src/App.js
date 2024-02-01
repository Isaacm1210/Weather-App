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
  const [ unit, setUnit ] = useState('c');

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

  const changeUnit = () =>{
    if(unit === 'c'){
      setUnit('f');
    }
    else{
      setUnit('c');
    }
  }

  return (
    <div className='h-full flex  flex-col' style={style.style}>
      <button className='mx-auto mt-10 border-white border border-opacity-50 bg-white bg-opacity-20 rounded-sm w-32 unit' onClick={changeUnit}>Change Unit</button>
      <div>
        {(loading) ? (
          ""
        ) : (
          <div className='w-1/2 mx-auto my-10'>

            <h1 className='text-center text-3xl'>{location}</h1>
            <Temperature current={current} unit={unit}/>

          </div>
        )}
        <div className=' min-w-48 w-1/2 mx-auto'>
          {forecast && (
            forecast.map((elem, index) => (
              <div key={index}>
                <Forcast elem={elem} unit={unit}/>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
