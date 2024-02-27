import React from 'react'
import cn from '../../utils/cn'

const NotificationStyle4 = ({ activeSignClass, mainBoxClass, user }) => {
    return (
        <div className={cn("rounded-[10px] border-l-[5px] border-green-600 bg-white px-4 py-6 shadow-md sm:px-5 xl:px-7", mainBoxClass)}>
            <div className="flex flex-wrap items-center justify-between gap-5">
                <div className="flex gap-5">
                    <div className="relative h-12 w-full max-w-12 rounded-full">
                        <img src={user.image} alt="user" />
                        <span className={cn(`absolute -top-0.5 right-0.5 h-4 w-full max-w-4 rounded-full border-[2.3px] border-white bg-[#219653]`, activeSignClass)}></span>
                    </div>

                    <div className="w-full">
                        <h4 className="mb-[3px] text-[18px] font-bold text-black">
                            {user.assignedTo}
                        </h4>
                        <p className="mb-[3px] font-medium text-secondary">
                            {user.project}
                        </p>
                        <span className="text-sm font-medium text-secondary"> {user.timestamp}</span>
                    </div>
                </div>

                <span className="inline-flex rounded-md bg-gray-100 px-2 py-1 text-sm text-secondary font-medium leading-[22px]">
                    {user.date}
                </span>
            </div>
        </div>
    )
}

export default NotificationStyle4
