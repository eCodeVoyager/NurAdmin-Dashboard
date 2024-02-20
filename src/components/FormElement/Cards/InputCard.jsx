import React from 'react'
import ActiveInput from '../InputFields/ActiveInput'
import DefaultInput from '../InputFields/DefaultInput'
import DisableInput from '../InputFields/DisableInput'

const InputCard = () => {
    return (
        <div class="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div class="border-b border-stroke px-6 py-4">
                <h3 class="font-medium text-black">
                    Input Fields
                </h3>
            </div>
            <div class="flex flex-col gap-6 p-7">
                <div>
                    <DefaultInput label={"Default Input"} placeholder={"Default Input"} type={"text"} isRequired={false} />
                </div>

                <div>
                    <ActiveInput label={"Active Input"} placeholder={"Active Input"} type={"text"} isRequired={false} />
                </div>

                <div>
                    <DisableInput label={"Disabled label"} placeholder={"Disabled label"} type={"text"} isRequired={false}/>
                </div>
            </div>
        </div>
    )
}

export default InputCard
