import React from 'react'
import user1 from '../../../assets/images/team-01.png'
import user2 from '../../../assets/images/team-02.png'
import user3 from '../../../assets/images/team-04.png'
import user4 from '../../../assets/images/user-03.png'
import user5 from '../../../assets/images/user-23.png'



const Message = () => {
    const handleClick = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the parent
      };
    return (
        <div onClick={handleClick} class="select-none absolute top-8 -right-16 mt-2.5 flex h-96 w-72 flex-col rounded-sm border border-stroke bg-white shadow-md md:right-0 md:w-80">
            <div class="px-4 py-3">
                <h5 class="text-sm font-medium text-[.875rem] text-secondary">Messages</h5>
            </div>

            <ul class="flex h-auto flex-col overflow-y-auto">
                <li>
                    <a class="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-gray-100" href="messages.html">
                        <div class="h-14 w-14 rounded-full">
                            <img src={user1} alt="User" />
                        </div>

                        <div>
                            <h6 class="text-sm font-medium text-black">
                                Mariya Desoja
                            </h6>
                            <p class="text-sm text-secondary">I like your confidence 💪</p>
                            <p class="text-xs text-secondary">2min ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-gray-100" href="messages.html">
                        <div class="h-14 w-14 rounded-full">
                        <img src={user2} alt="User" />
                        </div>

                        <div>
                            <h6 class="text-sm font-medium text-black">
                                Robert Jhon
                            </h6>
                            <p class="text-sm text-secondary">Can you share your offer?</p>
                            <p class="text-xs text-secondary">10min ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-gray-100" href="messages.html">
                        <div class="h-14 w-14 rounded-full">
                        <img src={user3} alt="User" />
                        </div>

                        <div>
                            <h6 class="text-sm font-medium text-black">
                                Henry Dholi
                            </h6>
                            <p class="text-sm text-secondary">I cam across your profile and...</p>
                            <p class="text-xs text-secondary">1day ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-gray-100" href="messages.html">
                        <div class="h-14 w-14 rounded-full">
                        <img src={user4} alt="User" />
                        </div>

                        <div>
                            <h6 class="text-sm font-medium text-black">
                                Cody Fisher
                            </h6>
                            <p class="text-sm text-secondary">I’m waiting for you response!</p>
                            <p class="text-xs text-secondary">5days ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="flex gap-4 border-t border-stroke px-4 py-3 hover:bg-gray-100" href="messages.html">
                        <div class="h-14 w-14 rounded-full">
                        <img src={user5} alt="User" />
                        </div>

                        <div>
                            <h6 class="text-sm font-medium text-black">
                                Mariya Desoja
                            </h6>
                            <p class="text-sm text-secondary">I like your confidence 💪</p>
                            <p class="text-xs text-secondary">2min ago</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Message
