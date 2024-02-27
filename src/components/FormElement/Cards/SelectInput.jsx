import React from 'react'
import SelectInput1 from '../SelectInputs/SelectInput1/SelectInput1'
import MultiSelect from '../SelectInputs/MultiSelect/MultiSelect'
import CountrySelect from '../SelectInputs/CountrySelect/CountrySelect'

const SelectInput = () => {
    return (
        <>
            <div className="rounded-sm border border-stroke bg-white shadow-default">
                <div className="border-b border-stroke px-6 py-4">
                    <h3 className="font-medium text-black">
                        Select input
                    </h3>
                </div>
                <div className="flex flex-col gap-5 p-6">
                    <SelectInput1 />
                    <CountrySelect/>
                    <MultiSelect/>
                </div>
            </div>
        </>
    )
}

export default SelectInput
