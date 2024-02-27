import React from 'react'
import './CheckBox3.css'
const CheckBox3 = () => {
    return (
        <div className="">
            <div className="container flex gap-[10px]">
                <input id='check' type="checkbox" />
                <div className="checkmark"></div>
                <label htmlFor="check" className='text-[0.875rem] text-black cursor-pointer'>Checkbox text</label>
            </div>
        </div>

    )
}

export default CheckBox3
