import React from 'react'

const CardStyle3 = ({ data }) => {
    return (
        <div class="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke p-5 px-7">
                <h4 class="text-xl font-semibold text-black">
                    <a href="#">{data.cardTitle}</a>
                </h4>
            </div>
            <div class="px-7 pb-9 pt-6">
                <p class="font-medium text-secondary">
                    {data.cardDescription}
                </p>
            </div>
        </div>
    )
}

export default CardStyle3
