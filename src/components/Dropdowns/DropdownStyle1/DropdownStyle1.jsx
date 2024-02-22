import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import cn from '../../../utils/cn';

const DropdownStyle1 = ({ buttonClassName, dropBoxClass, dropItemClass }) => {
    const [open, setOpen] = useState(false);
    const [buttonBlur, setButtonBlur] = useState(false);
    const [menuBlur, setMenuBlur] = useState(false);

    useEffect(() => {
        let timer;
        if (buttonBlur && menuBlur) {
            timer = setTimeout(() => {
                setOpen(false);
            }, 200); // Adjust the delay as needed
        }
        return () => clearTimeout(timer);
    }, [buttonBlur, menuBlur]);

    return (
        <div className={cn("relative mb-52 inline-block", buttonClassName)}>
            <a
                onClick={() => setOpen(!open)}
                onBlur={() => setButtonBlur(true)}
                onFocus={() => setButtonBlur(false)}
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-white hover:bg-opacity-95"
            >
                Dropdown Button
                <IoIosArrowDown className={`text-xl duration-300 ${open ? "rotate-180" : ""}`} />
            </a>
            {open && (
                <div
                    onBlur={() => setMenuBlur(true)}
                    onFocus={() => setMenuBlur(false)}
                    className={cn("absolute left-0 top-full z-40 mt-2 w-full rounded-md border border-stroke bg-white py-3 shadow-card", dropBoxClass)}
                >
                    <ul className="flex flex-col">
                        {["Dashboard", "Settings", "Earnings", "Logout"].map((item, index) => (
                            <li key={index}>
                                <a href="#" className={cn("flex px-5 py-2 font-medium hover:bg-blue-300/10 hover:text-primary", dropItemClass)} style={{ animationDelay: `${(index + 1) * 50}ms` }}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropdownStyle1;
