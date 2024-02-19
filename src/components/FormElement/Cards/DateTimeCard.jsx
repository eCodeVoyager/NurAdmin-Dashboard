import React from 'react'

const DateTimeCard = () => {
    return (
        <div class="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-6 py-4">
                <h3 class="font-medium text-black">
                    Time and date
                </h3>
            </div>
            <div class="flex flex-col gap-5 p-6">
                <div>
                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                        Date picker
                    </label>
                </div>

                <div>
                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                        Select date
                    </label>
                </div>
            </div>
        </div>
    )
}

export default DateTimeCard
