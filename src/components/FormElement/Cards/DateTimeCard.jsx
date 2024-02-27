import React from 'react'
import DatePicker1 from '../DatePicker1/DatePicker1'
import DatePicker2 from '../DatePicker2/DatePicker2'

const DateTimeCard = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="border-b border-stroke px-6 py-4">
                <h3 className="font-medium text-black">
                    Time and date
                </h3>
            </div>
            <div className="flex flex-col gap-5 p-6">
                <DatePicker1 />
                <DatePicker2 />
            </div>
        </div>
    )
}

export default DateTimeCard
