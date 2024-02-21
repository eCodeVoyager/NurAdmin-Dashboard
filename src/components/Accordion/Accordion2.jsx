import React from 'react'
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
const Accordion2 = ({ open, setOpen, question, answer }) => {
    const toggleAccordion = () => {
        setOpen(prevOpen => !prevOpen);
    };
    return (
        <div className="rounded-md border border-stroke p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] sm:p-6">
            <button onClick={toggleAccordion} className="flex w-full items-center justify-between gap-1.5 sm:gap-3 xl:gap-6">

                <div>
                    <h4 className="text-left text-2xl font-medium text-black">
                        {question} 
                    </h4>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md">
                    {
                        open ? <FiMinusCircle className='text-4xl text-primary' /> : <FiPlusCircle className='text-4xl text-primary' />
                    }
                </div>
            </button>
            {open && <div className=" mt-5 duration-200 ease-in-out">
                <p className="font-medium text-secondary">
               {answer}
                </p>
            </div>}
        </div>
    )
}

export default Accordion2
