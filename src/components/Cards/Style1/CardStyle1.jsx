import React from 'react'

const CardStyle1 = ({data}) => {
  return (
<div class="rounded-sm border border-stroke bg-white shadow-default">
                <div class="flex items-center gap-3 px-6 py-5">
                  <div class="h-10 w-10 rounded-full overflow-hidden ">
                    <img src={data.userImage}alt="User"/>
                  </div>
                  <div>
                    <h4 class="font-medium text-black">
                      {data.userName}
                    </h4>
                    <p class="text-xs font-medium text-secondary">{data.userRole}</p>
                  </div>
                </div>

                <a href="#" class="block px-4">
                  <img src={data.cardImage} alt="Cards"/>
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

export default CardStyle1
