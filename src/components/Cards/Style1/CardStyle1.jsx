import React from 'react'

const CardStyle1 = ({data}) => {
  return (
<div className="rounded-sm border border-stroke bg-white shadow-default">
                <div className="flex items-center gap-3 px-6 py-5">
                  <div className="h-10 w-10 rounded-full overflow-hidden ">
                    <img src={data.userImage}alt="User"/>
                  </div>
                  <div>
                    <h4 className="font-medium text-black">
                      {data.userName}
                    </h4>
                    <p className="text-xs font-medium text-secondary">{data.userRole}</p>
                  </div>
                </div>

                <a href="#" className="block px-4">
                  <img src={data.cardImage} alt="Cards"/>
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

export default CardStyle1
