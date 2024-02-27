import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
const MultiSelect = () => {
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState([]);
    const [show, setShow] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        loadOptions();
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const open = () => setShow(!show);
    const close = () => setShow(false);
    const isOpen = () => show === true;

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShow(false);
        }
    };

    const select = (option) => {
        const index = selected.findIndex((selectedOption) => selectedOption.value === option.value);
        if (index === -1) {
            setSelected([...selected, option]);
        } else {
            setSelected(selected.filter((selectedOption) => selectedOption.value !== option.value));
        }
    };

    const remove = (option) => {
        setSelected(selected.filter((selectedOption) => selectedOption.value !== option.value));
    };

    const loadOptions = () => {
        setTimeout(() => {
            const demoOptions = [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
                { value: 'option4', label: 'Option 4' },
            ];
            setOptions(demoOptions);
        }, 1000);
    };
    return (
        <>

            <div className="w-full flex flex-col mx-auto">
                <label className="mb-3 block text-sm font-medium text-black select-none">
                    Multiselect Dropdown
                </label>
                <input name="values" type="hidden" value={selected.map((option) => option.value)} />
                <div className="inline-block relative w-full" ref={popupRef}>
                    <div onClick={open} className="w-full cursor-pointer focus-within:border-blue-400">
                        <div className="mb-2 py-3 px-5 flex justify-between items-center border border-gray-200 bg-white rounded">
                            <div className="flex">
                                {selected.length > 0 ? (
                                    selected.map((option) => (
                                        <div key={option.value} className="px-2 py-1 mr-1 bg-gray-200 rounded flex items-center">
                                            <span className="mr-2 text-sm">{option.label}</span>
                                            <button onClick={() => remove(option)} className="focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-gray-500 select-none">Select an option</div>
                                )}
                            </div>
                            <IoIosArrowDown className={`text-xl text-gray-500 ${show ? "rotate-180" : ""}`} />
                        </div>
                    </div>
                    {isOpen() && (
                        <div className="absolute w-full px-4 border border-gray-200 bg-white rounded-b mt-1 shadow-lg">
                            {options.map((option) => (
                                <div key={option.value} onClick={() => select(option)} className={`cursor-pointer py-2 px-4 border-b hover:bg-gray-200 ${selected.find((selectedOption) => selectedOption.value === option.value) ? '' : ''}`}>
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default MultiSelect
