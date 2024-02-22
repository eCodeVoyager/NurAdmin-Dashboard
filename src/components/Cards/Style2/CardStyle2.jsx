import React from 'react'

const CardStyle2 = ({ data }) => {
    return (
        <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <a href="#" class="block px-4 pt-4">
                <img src={data.cardImage} alt="Cards" />
            </a>

            <div class="p-6">
                <h4 class="mb-3 text-xl font-semibold text-black">
                    <a href="#">{data.cardTitle}</a>
                </h4>
                <p class="font-medium text-secondary">
                   {data.cardDescription}
                </p>
            </div>
        </div>
    )
}

export default CardStyle2
