import React from 'react'
import ActiveInput from '../InputFields/ActiveInput'
import DefaultInput from '../InputFields/DefaultInput'
import DisableInput from '../InputFields/DisableInput'

const InputCard = () => {
    return (
        <div class="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-6 py-4">
                <h3 class="font-medium text-black">
                    Input Fields
                </h3>
            </div>
            <div class="flex flex-col gap-6 p-7">
                <div>
                    <DefaultInput />
                </div>

                <div>
                    <ActiveInput />
                </div>

                <div>
                    <DisableInput />
                </div>
            </div>
        </div>
    )
}

export default InputCard
