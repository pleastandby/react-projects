import React from 'react';
import cloudy from '../assets/weather-icons/cloudy.svg';
import sunny from '../assets/weather-icons/sunny.svg';
import rainy from '../assets/weather-icons/rainy.svg';   
import thunder from '../assets/weather-icons/thunder.svg';
import partlyCloudy from '../assets/weather-icons/partlyCloudy.svg';

const WeatherIcon = ({condition}) => {
    const getIcon = (conditionText) =>{
        if(!conditionText) return null;

        const c = conditionText.toLowerCase();

        if ( c.includes("sun") || c.includes("clear")) return sunny;
        if ( c.includes("cloud")) return cloudy;
        if ( c.includes("rain")) return rainy;
        if ( c.includes("thunder")) return thunder;
        if ( c.includes("partly")) return partlyCloudy;

        return cloudy;
    }

    const iconSrc = getIcon(condition);

    return <img src={iconSrc} alt={condition} className="display-icon" />;
}

export default WeatherIcon;