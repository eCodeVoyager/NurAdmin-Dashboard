import React from 'react'
import ToggleButton1 from '../ToggleButtons/ToggleButton1/ToggleButton1'
import ToggleButton2 from '../ToggleButtons/ToggleButton2/ToggleButton2'
import ToggleButton3 from '../ToggleButtons/ToggleButton3/ToggleButton3'
import ToggleButton4 from '../ToggleButtons/ToggleButton4/ToggleButton4'

const ToggleSwitch = () => {
    return (

        <>
            <div className="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="border-b border-stroke px-6 py-4">
                    <h3 className="font-medium text-black">
                        Toggle switch input
                    </h3>
                </div>
                <div className="flex flex-col gap-5 p-6">
                    <ToggleButton1 />
                    <ToggleButton2 />
                    <ToggleButton3 />
                    <ToggleButton4 />
                </div>
            </div>
        </>

    )
}

export default ToggleSwitch
