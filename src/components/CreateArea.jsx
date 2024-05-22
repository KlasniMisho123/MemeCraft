import React, {useState} from "react";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

function CreateArea() {

const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (value) => {
        setSelectedValue(value);
    };

    const handleSubmit = () => {
        alert(`Selected Value: ${selectedValue}`);
    };

    return (
        <div className="content-flex">
            <div className="content-background">
                <div className="content-box">
                    <div className="dropdown">  
                        <Select value={selectedValue} onChange={handleSelectChange} />
                    </div> 
                    <div>
                        <SubmitButton className="submit-btn" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateArea;