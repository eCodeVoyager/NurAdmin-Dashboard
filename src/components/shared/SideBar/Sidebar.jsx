import React from 'react'
import logo from '../../../assets/images/logo.svg'
import { HiOutlineViewGrid } from "react-icons/hi";
import { RiTableLine } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='w-full no-scrollbar flex flex-col overflow-y-scroll duration-300 ease-linear'>
            {/* sidebar header  */}
            <div className="py-5 px-6 sticky top-0 bg-dark z-50">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </div>
            {/* Sidebar menu  */}
            <div className="">
                <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6 flex flex-col gap-3">
                    {/* Menu Group  */}
                    <div className="">
                        <h3 className='mb-4 ml-4 text-sm font-medium text-[#DAE0EA]/50'>Menu</h3>
                        <ul className='flex flex-col gap-1.5'>
                            <li><Link to="/" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]' ><HiOutlineViewGrid />Dashboard</Link></li>
                            <li><Link to="/profile" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]'><FiUser />Profile</Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]' href=""><FaTasks />Forms <MdKeyboardArrowDown className='ml-auto' /></Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]' href=""><RiTableLine />Table <MdKeyboardArrowDown className='ml-auto' /></Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]' href=""><RiPagesLine />pages <MdKeyboardArrowDown className='ml-auto' /></Link></li>
                        </ul>
                    </div>
                    {/* Support Group  */}
                    <div className="">
                        <h3 className='mb-4 ml-4 text-sm font-medium text-[#DAE0EA]/50'>SUPPORT</h3>
                        <ul className='flex flex-col gap-1.5'>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]' href=""><HiOutlineViewGrid />Messages</Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]' href=""><FiUser />Inbox</Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]' href=""><FaTasks />Invoice <MdKeyboardArrowDown className='ml-auto' /></Link></li>
                        </ul>
                    </div>
                    {/* others Group  */}
                    <div className="">
                        <h3 className='mb-4 ml-4 text-sm font-medium text-[#DAE0EA]/50'>others</h3>
                        <ul className='flex flex-col gap-1.5'>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]' href=""><HiOutlineViewGrid />Charts</Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]' href=""><FiUser />UI Elements</Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-[#323A48]' href=""><FaTasks />Authentication <MdKeyboardArrowDown className='ml-auto' /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* Promo box  */}
            <div className="mx-auto mb-10 w-full max-w-52 rounded-sm border border-[#24303F]/80 bg-[#24303F] px-4 py-6 text-center shadow-default">
                <h3 className="mb-1 font-semibold text-white">Nur-Admin Pro</h3>
                <p className="mb-4 text-xs text-gray-400">Get All Dashboards and 300+ UI Elements</p>
                <Link href="#" target="_blank" rel="nofollow" className="flex items-center justify-center rounded-md bg-primary p-2 text-white hover:bg-opacity-95">
                    Purchase Now
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
