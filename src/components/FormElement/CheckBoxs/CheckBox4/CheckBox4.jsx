import React from 'react'
import './CheckBox4.css'
const CheckBox4 = () => {
    return (
        <div className="">
            <div className="check4_container flex gap-[10px]">
                <input id='check4' type="checkbox" />
                <div className="checkmark"></div>
                <label htmlFor="check4" className='text-[0.875rem] text-black cursor-pointer'>Checkbox text</label>
            </div>
        </div>
    )
}

export default CheckBox4
