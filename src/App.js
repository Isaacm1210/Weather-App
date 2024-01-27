import './App.css';

function App() {

   const  getWeatherData = async () => {
    const apitUrl = "http://api.weatherapi.com/v1/current.json?key=551468ddcc0a416a9eb213034241801&q=calgary&aqi=no";
     const response = await fetch(apitUrl)
     console.log(await response.json());
    
  } 
  return (
    <div>
      <button onClick={getWeatherData}>BUTTON</button>
      
    </div>
  );
}

export default App;
