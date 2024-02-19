import React from 'react'
import DatePicker1 from '../DatePicker1/DatePicker1'
import DatePicker2 from '../DatePicker2/DatePicker2'

const DateTimeCard = () => {
    return (
        <div class="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-6 py-4">
                <h3 class="font-medium text-black">
                    Time and date
                </h3>
            </div>
            <div class="flex flex-col gap-5 p-6">
                <DatePicker1 />
                <DatePicker2 />
            </div>
        </div>
    )
}

export default DateTimeCard
