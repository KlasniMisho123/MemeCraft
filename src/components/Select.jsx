import React from "react";
import Option from "./Option"



function Select(props) {
    return(
        <select className="dropdown">
            <Option  id="1" value="MathJokes" />
            <Option  id="2" value="ScieneceJokes" />
            <Option  id="3" value="GameJokes" />
        </select>
    )
}


export default Select;