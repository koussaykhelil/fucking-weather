import React from "react";
import WeatherIcon from 'react-icons-weather';
import {weatherCases} from '../weatherCurses'
const Titles = props => (
	<div>
		<WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" fixedWidth ={true} style={{fontSize: '56px'}} />
		<h2 className="title-container__temperature">{ Math.floor(props.temperature - 273.15)} °C</h2>
		<h1 className="title-container__title"> {weatherCases[props.summary].title} </h1>
		<h3 className="title-container__subtitle">{weatherCases[props.summary].subtitle}</h3>
		
	</div>
);

export default Titles;