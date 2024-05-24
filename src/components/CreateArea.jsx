import React, {useState} from "react";
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import RandomJoke from "./RandomJoke";

function CreateArea() {

const [selectedValue, setSelectedValue] = useState("");
const [activeType, setActiveType] = useState(false);

    const handleSelectChange = (value) => {
        setSelectedValue(value);
    };

    const handleSubmit = () => {
        if(selectedValue.trim() !== "") {
            setActiveType(true);
        } else {
            setActiveType(false);
        }
    };
    

    return (
        <div className="column-flex">
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
            {activeType === true && (
                <RandomJoke
                type={selectedValue}
                />
                )}
            
        </div>
    );
}

export default CreateArea;