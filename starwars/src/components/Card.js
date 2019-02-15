import React from "react";
import './StarWars.css';

const Card = props => {
    return (
        <div className="character-card">
            <p>Name: {props.swchars.name}</p>
            <p>Gender: {props.swchars.gender}</p>
            <p>Birth Year: {props.swchars.birth_year}</p>
            <p>Eye Color: {props.swchars.eye_color}</p>
            <p>Hair Color: {props.swchars.hair_color}</p>
            <p>Height: {props.swchars.height}</p>
            <p>Mass: {props.swchars.mass}</p>
            <p>Skin Color: {props.swchars.skin_color}</p>
        </div>
    );
}

export default Card; 