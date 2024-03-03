import React from 'react'

const CardStyle3 = ({ data }) => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke p-5 px-7">
                <h4 className="text-xl font-semibold text-black">
                    <a href="#">{data.cardTitle}</a>
                </h4>
            </div>
            <div className="px-7 pb-9 pt-6">
                <p className="font-medium text-secondary">
                    {data.cardDescription}
                </p>
            </div>
        </div>
    )
}

export default CardStyle3
