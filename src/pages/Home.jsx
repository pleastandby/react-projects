import '../components/css/Home.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { fetchWeatherData } from '../api/api';
import { useState } from 'react';
import WeatherIcon from '../components/WeatherIcon';

function Home() {

    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const weatherData = await fetchWeatherData(location);
            setWeather(weatherData);
            setError('');
        } catch (err) {
            setWeather(null);
            setError('Error fetching weather data');
        }
    };

    return(
        <div className="home-page">
            <h1 id="home-heading">Weather Today</h1>
            <div className='search-area'>
                <input 
                    type="search" 
                    id="search-bar" 
                    placeholder="Select Location" 
                    className="searchBar" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button id="search-btn" onClick={handleSearch}><FaMagnifyingGlass /></button>
            </div>
            <div className='weather-display'>
                {error && <p>{error}</p>}
                {weather ? (
                    <>
                        <div className="display-icon">
                            <WeatherIcon condition={weather.current.condition.text} />
                        </div>
                        <h2>{weather.location.name}, {weather.location.country}</h2>
                        <p>{weather.current.temp_c}°C</p>
                        <p>{weather.current.condition.text}</p>
                    </>
                ) : (
                    <p>Enter A Location and Search for Weather</p>
                )}
            </div>
        </div>
    )
}
export default Home