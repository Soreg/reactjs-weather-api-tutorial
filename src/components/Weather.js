import React from 'react';

const Weather = (props) => (
    <div className="weather">
        { props.city && props.country && <p><span>Location:</span> {props.city}, {props.country}</p> }
        { props.temperature && <p><span>Temperature:</span> {props.temperature}</p> }
        { props.humidity && <p><span>Humidity:</span> {props.humidity}</p> }
        { props.description && <p><span>Conditions:</span> {props.description}</p> }
        { props.error && <p>{ props.error }</p> }
    </div>
);

export default Weather;