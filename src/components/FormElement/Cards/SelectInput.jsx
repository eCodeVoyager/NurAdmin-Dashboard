import React from 'react'
import SelectInput1 from '../SelectInputs/SelectInput1/SelectInput1'

const SelectInput = () => {
    return (
        <>
            <div class="rounded-sm border border-stroke bg-white shadow-default">
                <div class="border-b border-stroke px-6 py-4">
                    <h3 class="font-medium text-black">
                        Select input
                    </h3>
                </div>
                <div class="flex flex-col gap-5 p-6">
                    <SelectInput1 />
                </div>
            </div>
        </>
    )
}

export default SelectInput
