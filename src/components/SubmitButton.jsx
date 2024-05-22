import React from "react";
import SearchIcon from '@mui/icons-material/Search';


function SubmitButton(props) {
    return(
        <button className={props.className} onClick={props.onClick}><SearchIcon /></button>
    )
}


export default SubmitButton;