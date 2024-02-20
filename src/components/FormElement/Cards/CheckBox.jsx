import React from 'react'
import CheckBox1 from '../CheckBoxs/CheckBox1/CheckBox1'
import CheckBox2 from '../CheckBoxs/CheckBox2/CheckBox2'
import CheckBox3 from '../CheckBoxs/CheckBox3/CheckBox3'
import CheckBox4 from '../CheckBoxs/CheckBox4/CheckBox4'

const CheckBox = () => {
    return (
        <div class="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div class="border-b border-stroke px-6 py-4 ">
                <h3 class="font-medium text-black">
                    Checkbox and radio
                </h3>
            </div>
            <div class="flex flex-col gap-5 p-6">
                <CheckBox1 />
                <CheckBox2/>
                <CheckBox3/>
                <CheckBox4/>
            </div>
        </div>
    )
}

export default CheckBox
