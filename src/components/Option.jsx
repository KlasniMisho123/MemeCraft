import React from "react";

function Option(props) {
    return (
        <option key={props.id} value={props.value}>{props.value}</option>
    );
}

export default Option;