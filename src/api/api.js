const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';
const fetchWeatherData = async (location) => {
    try {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}
export { fetchWeatherData };