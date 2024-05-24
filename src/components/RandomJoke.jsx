import React from "react";
import jokesData from "./Jokes.json"
import CalculateIcon from '@mui/icons-material/Calculate';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ScienceIcon from '@mui/icons-material/Science';


function RandomJoke(props) {

    const jokesCategory = jokesData.find(jokesCategory => jokesCategory.type === props.type)


    let randomJoke = "";
    let icon = ""
    

    if (jokesCategory && jokesCategory.jokes.length > 0) {
        let randomN = Math.floor(Math.random() * jokesCategory.jokes.length)
        randomJoke = jokesCategory.jokes[randomN];
    }


    if(props.type !== "") {
        if (props.type === "MathJokes") {
            icon = <CalculateIcon />;
        } else if (props.type === "GameJokes") {
            icon = <SportsEsportsIcon />;
        } else {
            icon = <ScienceIcon />;
        }
    } else {
        
    }

    return (
        <div className="random-joke">
            <h1 className="joke-header">{props.type} {icon} </h1>
            <p className="joke">{randomJoke} </p>
        </div>
    );
}

export default RandomJoke;