import React from 'react'
import logo from '../../../assets/images/logo.svg'
import { HiOutlineViewGrid } from "react-icons/hi";
import { RiTableLine } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiHome, FiUser } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from "react";


const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu === activeMenu ? null : menu);
    };

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
                        <h3 className='mb-4 ml-4 text-sm font-medium text-secondary uppercase'>Menu</h3>
                        <ul className='flex flex-col gap-1.5'>
                            <li><Link to="/" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover' ><HiOutlineViewGrid />Dashboard</Link></li>
                            <li><Link to="/profile" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'><FiUser />Profile</Link></li>
                            <li><Link onClick={() => handleMenuClick('menu1')} className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover ${activeMenu === 'menu1' ? "bg-menuHover" : ""}`} href=""><FaTasks />Forms <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === 'menu1' ? "rotate-180" : ""}`} /></Link></li>


                            {/* Sub-menus  */}
                            {activeMenu === 'menu1' && (
                                <ul className='my-4 flex flex-col gap-2.5 pl-10'>
                                    <li><Link to="/" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-[#DAE0EA]/50 duration-300 ease-in-out hover:text-white'>Form Elements</Link></li>

                                    <li><Link to="/" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-[#DAE0EA]/50 duration-300 ease-in-out hover:text-white'>From layout</Link></li>
                                </ul>
                            )}

                            <li><Link onClick={() => handleMenuClick('menu2')} className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover ${activeMenu === 'menu2' ? "bg-menuHover" : ""}`} href=""><FaTasks />Table <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === 'menu2' ? "rotate-180" : ""}`} /></Link></li>

                            {/* Sub-menus  */}
                            {activeMenu === 'menu2' && (
                                <ul className='my-4 flex flex-col gap-2.5 pl-10'>
                                    <li><Link to="/" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-[#DAE0EA]/50 duration-300 ease-in-out hover:text-white'>Tables</Link></li>

                                    <li><Link to="/" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-[#DAE0EA]/50 duration-300 ease-in-out hover:text-white'>Pro Tables</Link></li>
                                </ul>
                            )}

                            <li><Link onClick={() => handleMenuClick('menu3')} className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover ${activeMenu === 'menu3' ? "bg-menuHover" : ""}`} href=""><FaTasks />pages <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === 'menu3' ? "rotate-180" : ""}`} /></Link></li>

                            {/* Sub-menus  */}
                            {activeMenu === 'menu3' && (
                                <ul className='my-4 flex flex-col gap-2.5 pl-10'>
                                    <li><Link to="/" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-[#DAE0EA]/50 duration-300 ease-in-out hover:text-white'>Setting</Link></li>

                                    <li><Link to="/" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-[#DAE0EA]/50 duration-300 ease-in-out hover:text-white'>Teams</Link></li>
                                    <li><Link to="/" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-[#DAE0EA]/50 duration-300 ease-in-out hover:text-white'>Terms & Conditions</Link></li>
                                </ul>
                            )}

                        </ul>
                    </div>
                    {/* Support Group  */}
                    <div className="">
                        <h3 className='mb-4 ml-4 text-sm font-medium text-secondary uppercase'>SUPPORT</h3>
                        <ul className='flex flex-col gap-1.5'>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover' href=""><HiOutlineViewGrid />Messages</Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover' href=""><FiUser />Inbox</Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover' href=""><FaTasks />Invoice <MdKeyboardArrowDown className='ml-auto' /></Link></li>
                        </ul>
                    </div>
                    {/* others Group  */}
                    <div className="">
                        <h3 className='mb-4 ml-4 text-sm font-medium text-secondary uppercase'>Others</h3>
                        <ul className='flex flex-col gap-1.5'>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover' href=""><HiOutlineViewGrid />Charts</Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover' href=""><FiUser />UI Elements</Link></li>
                            <li><Link className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover' href=""><FaTasks />Authentication <MdKeyboardArrowDown className='ml-auto' /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* Promo box  */}
            <div className="mx-auto mb-10 w-full max-w-[15.5rem] rounded-sm border border-[#24303F]/80 bg-[#24303F] px-4 py-6 text-center shadow-default">
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
