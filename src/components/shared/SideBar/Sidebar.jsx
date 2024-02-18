import React from 'react'
import logo from '../../../assets/images/logo.svg'
import { HiOutlineViewGrid } from "react-icons/hi";
import { RiTableLine, RiPagesLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { CiInboxIn } from "react-icons/ci";
import { GrPieChart } from "react-icons/gr";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbCircuitCellPlus } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
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
                            <li><Link to="/" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover' ><HiOutlineViewGrid className='text-xl' />Dashboard</Link></li>
                            <li><Link to="/profile" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'><FiUser className='text-xl' />Profile</Link></li>


                            <li onClick={() => handleMenuClick('menu1')} className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover cursor-pointer ${activeMenu === 'menu1' ? "bg-menuHover" : ""}`} href=""><FaTasks className='text-xl' />Forms <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === 'menu1' ? "rotate-180" : ""}`} />

                            </li>


                            {/* Sub-menus  */}
                            {activeMenu === 'menu1' && (
                                <ul className='my-4 flex flex-col gap-2.5 pl-10'>
                                    <li><Link to="/form-element" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white'>Form Elements</Link></li>

                                    <li><Link to="/form-layout" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white'>From layout</Link></li>
                                </ul>
                            )}

                            <li onClick={() => handleMenuClick('menu2')} className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover cursor-pointer ${activeMenu === 'menu2' ? "bg-menuHover" : ""}`}><RiTableLine className='text-xl' />Table <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === 'menu2' ? "rotate-180" : ""}`} /></li>

                            {/* Sub-menus  */}
                            {activeMenu === 'menu2' && (
                                <ul className='my-4 flex flex-col gap-2.5 pl-10'>
                                    <li><Link to="/tables" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white'>Tables</Link></li>
                                </ul>
                            )}

                            <li onClick={() => handleMenuClick('menu3')} className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover cursor-pointer ${activeMenu === 'menu3' ? "bg-menuHover" : ""}`} href=""><RiPagesLine className='text-xl' />pages <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === 'menu3' ? "rotate-180" : ""}`} /></li>

                            {/* Sub-menus  */}
                            {activeMenu === 'menu3' && (
                                <ul className='my-4 flex flex-col gap-2.5 pl-10'>
                                    <li><Link to="/setting" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white'>Setting</Link></li>

                                    <li><Link to="/teams" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white'>Teams</Link></li>
                                    <li><Link to="/terms-condition" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white'>Terms & Conditions</Link></li>
                                </ul>
                            )}

                        </ul>
                    </div>
                    {/* Support Group  */}
                    <div className="">
                        <h3 className='mb-4 ml-4 text-sm font-medium text-secondary uppercase'>SUPPORT</h3>
                        <ul className='flex flex-col gap-1.5'>
                            <li><Link to="/message" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'><IoMailOutline className='text-xl' />Messages</Link></li>

                            <li><Link to="/inbox" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'><CiInboxIn className='text-xl' />Inbox</Link></li>
                            <li><Link to="invoice" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'><LiaFileInvoiceDollarSolid className='text-xl' />invoice</Link></li>
                        </ul>
                    </div>
                    {/* others Group  */}
                    <div className="">
                        <h3 className='mb-4 ml-4 text-sm font-medium text-secondary uppercase'>Others</h3>
                        <ul className='flex flex-col gap-1.5'>
                            <li><Link to="/charts" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover' href=""><GrPieChart className='text-xl' />Charts</Link></li>

                            <li onClick={() => handleMenuClick('menu4')} className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover cursor-pointer ${activeMenu === 'menu4' ? "bg-menuHover" : ""}`} href=""><TbCircuitCellPlus className='text-xl' />UI Elements <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === 'menu4' ? "rotate-180" : ""}`} /></li>


                            {/* Sub-menus  */}
                            {activeMenu === 'menu4' && (
                                <ul className='my-4 flex flex-col gap-2.5 pl-10'>
                                    <li><Link to="/accordions" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Accordion</Link></li>
                                    <li><Link to="/alerts" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Alerts</Link></li>
                                    <li><Link to="/avatars" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Avatars</Link></li>
                                    <li><Link to="/badge" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Badge</Link></li>
                                    <li><Link to="/breadcrumb" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Breadcrumb</Link></li>
                                    <li><Link to="/buttons" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Buttons</Link></li>
                                    <li><Link to="/button-group" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Buttons Group</Link></li>
                                    <li><Link to="/cards" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Cards</Link></li>
                                    <li><Link to="/dropdowns" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Dropdowns</Link></li>
                                    <li><Link to="/list" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>List</Link></li>
                                    <li><Link to="/modals" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Modals</Link></li>
                                    <li><Link to="/notifications" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Notifications</Link></li>
                                    <li><Link to="/pagination" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Pagination</Link></li>
                                    <li><Link to="/spinners" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Spinners</Link></li>
                                    <li><Link to="/tabs" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Tabs</Link></li>
                                    <li><Link to="/tooltips" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Tooltips</Link></li>

                                </ul>
                            )}

                            <li onClick={() => handleMenuClick('menu5')} className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover cursor-pointer ${activeMenu === 'menu5' ? "bg-menuHover" : ""}`} href=""><LuLogIn className='text-xl' />Authentication <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === 'menu5' ? "rotate-180" : ""}`} /></li>


                            {/* Sub-menus  */}
                            {activeMenu === 'menu5' && (
                                <ul className='my-4 flex flex-col gap-2.5 pl-10'>
                                    <li><Link to="/sign-in" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Sign in</Link></li>

                                    <li><Link to="/sign-up" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Sign up</Link></li>
                                    <li><Link to="/reset-password" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>Reset password</Link></li>
                                    <li><Link to="/two-step-verification" className='group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize'>2step verification</Link></li>
                                </ul>
                            )}

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
