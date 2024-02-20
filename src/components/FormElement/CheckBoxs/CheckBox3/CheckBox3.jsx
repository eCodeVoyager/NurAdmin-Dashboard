import React from 'react'
import './CheckBox3.css'
const CheckBox3 = () => {
    return (
        <div class="checkbox-wrapper-33">
            <label class="checkbox">
                <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                <span class="checkbox__symbol">
                    <svg class="icon-checkbox" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <line class="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                        <line class="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                    </svg>
                </span>
                <p class="checkbox__textwrapper">Checkbox</p>
            </label>
        </div>

    )
}

export default CheckBox3
