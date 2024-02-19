import React, { useState, useRef } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SlCalender } from "react-icons/sl";
import './DatePicker1.css';

const DatePicker1 = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const datepickerRef = useRef(null);

    const handleClickCalendar = () => {
        if (datepickerRef.current) {
            datepickerRef.current.setOpen(true); // Open the datepicker when calendar icon is clicked
        }
    };

    return (
        <div>
            <label className="mb-3 block text-sm font-medium text-black">
                Date picker
            </label>
            <div className="border flex justify-between items-center px-5 rounded-md border-gray-300 focus-within:border-blue-600">
                <Datepicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    placeholderText="mm/dd/yyyy"
                    className='w-full py-3 outline-none'
                    ref={datepickerRef} // Attach ref to the datepicker
                />
                <div onClick={handleClickCalendar}> {/* Wrapper around the calendar icon */}
                    <SlCalender className='cursor-pointer' />
                </div>
            </div>
        </div>
    );
}

export default DatePicker1;
