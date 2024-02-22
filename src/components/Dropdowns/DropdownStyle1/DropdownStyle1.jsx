import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
const DropdownStyle1 = () => {
    const [open, setOpen] = useState(false)
    return (
        <div class="relative mb-52 inline-block">
            <a onClick={() => setOpen(!open)} href="#" class="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-white hover:bg-opacity-95">
                Dropdown Button
                <IoIosArrowDown className={`text-xl duration-300 ${open? "rotate-180": ""}`} />
            </a> {open &&
                <div x-show="openDropDown" class="absolute left-0 top-full z-40 mt-2 w-full rounded-md border border-stroke bg-white py-3 shadow-card">
                    <ul class="flex flex-col">
                        <li>
                            <a href="#" class="flex px-5 py-2 font-medium hover:bg-blue-300/10 hover:text-primary">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex px-5 py-2 font-medium hover:bg-blue-300/10 hover:text-primary">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex px-5 py-2 font-medium hover:bg-blue-300/10 hover:text-primary">
                                Earnings
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex px-5 py-2 font-medium hover:bg-blue-300/10 hover:text-primary">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default DropdownStyle1
