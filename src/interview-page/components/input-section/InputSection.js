import React from "react";
import InputButton from "./input-button/InputButton";
import InputField from "./input-field/ChatInput";
import './InputSection.css';


function InputSection(){
    return (
        <div className="input-section">
            <InputField/>
            <InputButton/>
        </div>
    )
}

export default InputSection;