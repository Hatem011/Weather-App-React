import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './ِApp.module.css'
function App() {
const[weatherData,setWeatherData]=useState([])
const [location, setLocation] = useState('')


  async function getWeather(e)
  {
    if(e.key==='Enter')
    {
      let res=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=a3a24674c1da499888883158220906&q=${location}&days=3&aqi=no&alerts=no`)
      console.log(res.data);
      setWeatherData(res.data)
    }
  }
  return (
    <div className={`${styles.App} text-center`}>.
    <input
type='text'
 placeholder='Enter City.....' 
 className='form-control w-50 mx-auto my-5'
 value={location} 
 onKeyPress={getWeather}
 onChange={e=>setLocation(e.target.value)}
 />
 {weatherData.location?<h1 className='py-2'>{weatherData.location.name}</h1>:''}
 {weatherData.location?<h4 className='py-2'>{weatherData.location.country}</h4>:''}
 {weatherData.current?<span className='px-3 py-2 fw-bold'>{weatherData.current.temp_c}<span>&#8451;</span></span>:''}
 {weatherData.current?<img className='py-2' src={`https:${weatherData.current.condition.icon}`}></img>:''}
{weatherData.current?<p className='py-2'>{weatherData.current.condition.text}</p>:''}
<div className={`${styles.appBottom}`}>
  <div>
  {weatherData.current?<p>{weatherData.current.feelslike_f} <span>&#8457;</span></p>:''}
  <h5 className='px-4'>Feels_Like</h5>
  </div>
<div>
{weatherData.current?<p>{weatherData.current.humidity} %</p>:''}
<h5 className='px-4'>Humidity</h5>
</div>
<div>
{weatherData.current?<p>{weatherData.current.wind_mph} MPH</p>:''}
<h5 className='px-4'>Winds</h5>
</div>

</div>

    </div>
  );
}

export default App;
