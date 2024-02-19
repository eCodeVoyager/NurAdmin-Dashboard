import React from 'react'
import './ToggleButton1.css'
const ToggleButton1 = () => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox"/>
                    <span className="slider"></span>
            </label>
        </div>
    )
}

export default ToggleButton1
