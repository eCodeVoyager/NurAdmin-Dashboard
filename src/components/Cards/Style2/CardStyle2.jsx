import React from 'react'

const CardStyle2 = ({ data }) => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <a href="#" className="block px-4 pt-4">
                <img src={data.cardImage} alt="Cards" />
            </a>

            <div className="p-6">
                <h4 className="mb-3 text-xl font-semibold text-black">
                    <a href="#">{data.cardTitle}</a>
                </h4>
                <p className="font-medium text-secondary">
                   {data.cardDescription}
                </p>
            </div>
        </div>
    )
}

export default CardStyle2
