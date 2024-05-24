import React from "react";
import Option from "./Option";

function Select(props) {
    const handleSelectChange = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <select className="dropdown" value={props.selectedValue} onChange={handleSelectChange}>
            <Option id="1" value="" text="Select Type" />
            <Option id="2" value="MathJokes" text="MathJokes"/>
            <Option id="3" value="ScienceJokes" text="ScienceJokes"/>
            <Option id="4" value="GameJokes" text="GameJokes"/>
        </select>
    );
}

export default Select;
