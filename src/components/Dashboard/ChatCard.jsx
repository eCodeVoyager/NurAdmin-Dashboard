import React from 'react'
import user1 from '../../assets/images/user-03.png'
import user2 from '../../assets/images/user-22.png'
import user3 from '../../assets/images/user-23.png'
import user4 from '../../assets/images/user-24.png'
import user5 from '../../assets/images/user-25.png'
import user6 from '../../assets/images/team-01.png'
import { Link } from 'react-router-dom'
const ChatCard = () => {
    return (
        <div className='col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-md xl:col-span-4'>
            <h4 className="mb-6 px-7 text-xl font-bold text-black">
                Chats
            </h4>
            <div>
                <Link to="/message" className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100">
                    <div className="relative h-14 w-14 rounded-full">
                        <img src={user1} alt="User" />
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
                    </div>

                    <div className="flex flex-1 items-center justify-between">
                        <div>
                            <h5 className="font-medium text-black">
                                Devid Heilo
                            </h5>
                            <p>
                                <span className="text-sm font-medium text-black">Hello, how are you?</span>
                                <span className="text-xs text-secondary"> . 12 min</span>
                            </p>
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                            <span className="text-sm font-medium text-white">3</span>
                        </div>
                    </div>
                </Link>
                <Link to="/message" className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100">
                    <div className="relative h-14 w-14 rounded-full">
                        <img src={user2} alt="User" />
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
                    </div>

                    <div className="flex flex-1 items-center justify-between">
                        <div>
                            <h5 className="font-medium text-secondary">Henry Fisher</h5>
                            <p>
                                <span className="text-sm font-medium text-secondary">I am waiting for you</span>
                                <span className="text-xs text-secondary"> . 5:54 PM</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/message" className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100">
                    <div className="relative h-14 w-14 rounded-full">
                        <img src={user3} alt="User" />
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-orange-400"></span>
                    </div>

                    <div className="flex flex-1 items-center justify-between">
                        <div>
                            <h5 className="font-medium text-secondary">Wilium Smith</h5>
                            <p>
                                <span className="text-sm font-medium text-secondary">Where are you now?</span>
                                <span className="text-xs text-secondary"> . 10:12 PM</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/message" className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100">
                    <div className="relative h-14 w-14 rounded-full">
                        <img src={user4} alt="User" />
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
                    </div>

                    <div className="flex flex-1 items-center justify-between">
                        <div>
                            <h5 className="font-medium text-black ">
                                Henry Deco
                            </h5>
                            <p>
                                <span className="text-sm font-medium text-black ">Thank you so much!</span>
                                <span className="text-xs text-secondary"> . Sun</span>
                            </p>
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                            <span className="text-sm font-medium text-white">2</span>
                        </div>
                    </div>
                </Link>
                <Link to="/message" className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100">
                    <div className="relative h-14 w-14 rounded-full">
                        <img src={user5} alt="User" />
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-orange-600"></span>
                    </div>

                    <div className="flex flex-1 items-center justify-between">
                        <div>
                            <h5 className="font-medium text-secondary">Jubin Jack</h5>
                            <p>
                                <span className="text-sm font-medium text-secondary">I really love that!</span>
                                <span className="text-xs text-secondary"> . Oct 23</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/message" className="flex items-center gap-5 px-7 py-3 hover:bg-gray-100">
                    <div className="relative h-14 w-14 rounded-full">
                        <img src={user6} alt="User" />
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-yellow-600"></span>
                    </div>

                    <div className="flex flex-1 items-center justify-between">
                        <div>
                            <h5 className="font-medium text-secondary">Wilium Smith</h5>
                            <p>
                                <span className="text-sm font-medium text-secondary">Where are you now?</span>
                                <span className="text-xs text-secondary"> . Sep 20</span>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ChatCard
