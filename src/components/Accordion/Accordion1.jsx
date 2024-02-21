import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Accordion1 = ({ open, setOpen }) => {
    const toggleAccordion = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <div className="rounded-md border border-stroke p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] sm:p-6">
            <button onClick={toggleAccordion} className="flex w-full items-center gap-1.5 sm:gap-3 xl:gap-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F3F5FC]">
                    <IoIosArrowDown className={`text-primary text-2xl duration-300 ${open ? "rotate-180" : ""}`} />
                </div>
                <div>
                    <h4 className="text-left text-lg font-medium text-black">
                        How long we deliver your first blog post?
                    </h4>
                </div>
            </button>
            {open && <div className="md:ml-16 mt-5 duration-200 ease-in-out">
                <p className="font-medium text-secondary">
                    It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research &amp;
                    creation of your monthly content marketing strategy that we do before writing your first blog post,
                    Ipsum available.
                </p>
            </div>}
        </div>
    );
}

export default Accordion1;
