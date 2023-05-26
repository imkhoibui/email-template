import "./FormInput.css";
import React from 'react';

const FormInput = (props) => {

    const { name, position, email, phone, handleChange, handleReset } = props
    const arrInfo = [
        {
            placeholder: "Your Name",
            label: "Name",
            name: "name",
            value: name
        },
        {
            placeholder: "Your Position",
            label: "Position",
            name: "position",
            value: position
        },
        {
            placeholder: "Your Email Address",
            label: "Email Address",
            name: "email",
            value: email
        },
        {
            placeholder: "Your Phone Number",
            label: "Phone Number",
            name: "phone",
            value: phone
        }
    ]

    return (
        <div className="form-content">
            <div className="form-info">
                <h2 className="title"> Your Information </h2>
                {arrInfo.map((itemInfo, index) => (
                    <div className="form-item" key={index}>
                        <input
                            className="input-field"
                            onChange={handleChange}
                            type="text" name={itemInfo.name}
                            value={itemInfo.value}
                            placeholder={itemInfo.placeholder}
                        />
                    </div>
                ))}
            </div>
            <button className="btn" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default FormInput