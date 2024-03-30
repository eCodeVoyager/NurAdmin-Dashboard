import React, { useEffect, useState } from "react";
import { CiInboxIn } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { GrPieChart } from "react-icons/gr";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LuLogIn } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiPagesLine, RiTableLine } from "react-icons/ri";
import { TbCircuitCellPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import { useSidebar } from "../../../context/SidebarProvider";

const Sidebar = () => {
  const { activeSidebar, toggleSidebar } = useSidebar();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // hide side bar menu item click on mobile version
  const handleHideSidebar = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`h-screen bg-dark duration-300 z-[9999] ease-in-out ${
        isMobile && activeSidebar ? "absolute -left-[100%] top-0 " : `flex w-[18.125rem] left-0 top-0 ${isMobile ? "absolute" : "relative"}`
      }`}
    >
      <div className="w-full no-scrollbar flex flex-col overflow-y-scroll duration-300 ease-linear">
        {/* sidebar header  */}
        <div className="py-5 px-6 sticky top-0 bg-dark z-50 flex justify-between items-center">
          <a className="inline-flex items-center gap-3" href="/">
            <img src={logo} alt="logo" /> <span className="text-[24px] text-white font-semibold">NurAdmin</span>
          </a>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <FaArrowLeftLong className="text-secondary" />
          </button>
        </div>
        {/* Sidebar menu  */}
        <div className="">
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6 flex flex-col gap-3">
            {/* Menu Group  */}
            <div className="">
              <h3 className="mb-4 ml-4 text-sm font-medium text-secondary uppercase">Menu</h3>
              <ul className="flex flex-col gap-1.5">
                <li onClick={handleHideSidebar}>
                  <Link to="/" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'>
                    <HiOutlineViewGrid className="text-xl" />
                    Dashboard
                  </Link>
                </li>
                <li onClick={handleHideSidebar}>
                  <Link to="/profile" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'>
                    <FiUser className="text-xl" />
                    Profile
                  </Link>
                </li>

                <li
                  onClick={() => handleMenuClick("menu1")}
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover cursor-pointer ${
                    activeMenu === "menu1" ? "bg-menuHover" : ""
                  }`}
                  href=""
                >
                  <FaTasks className="text-xl" />
                  Forms <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === "menu1" ? "rotate-180" : ""}`} />
                </li>

                {/* Sub-menus  */}
                {activeMenu === "menu1" && (
                  <ul className="my-4 flex flex-col gap-2.5 pl-10">
                    <li onClick={handleHideSidebar}>
                      <Link to="/form-element" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white">
                        Form Elements
                      </Link>
                    </li>

                    <li onClick={handleHideSidebar}>
                      <Link to="/form-layout" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white">
                        From layout
                      </Link>
                    </li>
                  </ul>
                )}

                <li
                  onClick={() => handleMenuClick("menu2")}
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover cursor-pointer ${
                    activeMenu === "menu2" ? "bg-menuHover" : ""
                  }`}
                >
                  <RiTableLine className="text-xl" />
                  Table <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === "menu2" ? "rotate-180" : ""}`} />
                </li>

                {/* Sub-menus  */}
                {activeMenu === "menu2" && (
                  <ul className="my-4 flex flex-col gap-2.5 pl-10">
                    <li onClick={handleHideSidebar}>
                      <Link to="/tables" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white">
                        Tables
                      </Link>
                    </li>
                  </ul>
                )}

                <li
                  onClick={() => handleMenuClick("menu3")}
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover cursor-pointer ${
                    activeMenu === "menu3" ? "bg-menuHover" : ""
                  }`}
                  href=""
                >
                  <RiPagesLine className="text-xl" />
                  pages <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === "menu3" ? "rotate-180" : ""}`} />
                </li>

                {/* Sub-menus  */}
                {activeMenu === "menu3" && (
                  <ul className="my-4 flex flex-col gap-2.5 pl-10">
                    <li onClick={handleHideSidebar}>
                      <Link to="/setting" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white">
                        Setting
                      </Link>
                    </li>

                    <li onClick={handleHideSidebar}>
                      <Link to="/teams" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white">
                        Teams
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/terms-condition" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white">
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                )}
              </ul>
            </div>
            {/* Support Group  */}
            <div className="">
              <h3 className="mb-4 ml-4 text-sm font-medium text-secondary uppercase">SUPPORT</h3>
              <ul className="flex flex-col gap-1.5">
                <li onClick={handleHideSidebar}>
                  <Link to="/message" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'>
                    <IoMailOutline className="text-xl" />
                    Messages
                  </Link>
                </li>

                <li onClick={handleHideSidebar}>
                  <Link to="/inbox" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'>
                    <CiInboxIn className="text-xl" />
                    Inbox
                  </Link>
                </li>
                <li onClick={handleHideSidebar}>
                  <Link to="invoice" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'>
                    <LiaFileInvoiceDollarSolid className="text-xl" />
                    invoice
                  </Link>
                </li>
              </ul>
            </div>
            {/* others Group  */}
            <div className="">
              <h3 className="mb-4 ml-4 text-sm font-medium text-secondary uppercase">Others</h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link to="/charts" className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover' href="">
                    <GrPieChart className="text-xl" />
                    Charts
                  </Link>
                </li>

                <li
                  onClick={() => handleMenuClick("menu4")}
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover cursor-pointer ${
                    activeMenu === "menu4" ? "bg-menuHover" : ""
                  }`}
                  href=""
                >
                  <TbCircuitCellPlus className="text-xl" />
                  UI Elements <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === "menu4" ? "rotate-180" : ""}`} />
                </li>

                {/* Sub-menus  */}
                {activeMenu === "menu4" && (
                  <ul className="my-4 flex flex-col gap-2.5 pl-10">
                    <li onClick={handleHideSidebar}>
                      <Link to="/accordions" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Accordion
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/alerts" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Alerts
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/avatars" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Avatars
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/badge" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Badge
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/breadcrumb" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Breadcrumb
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/buttons" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Buttons
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/button-group" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Buttons Group
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/cards" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Cards
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/dropdowns" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Dropdowns
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/list" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        List
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/modals" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Modals
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link
                        to="/notifications"
                        className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize"
                      >
                        Notifications
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/pagination" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Pagination
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/spinners" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Spinners
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/tabs" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Tabs
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link to="/tooltips" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Tooltips
                      </Link>
                    </li>
                  </ul>
                )}

                <li
                  onClick={() => handleMenuClick("menu5")}
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover cursor-pointer ${
                    activeMenu === "menu5" ? "bg-menuHover" : ""
                  }`}
                  href=""
                >
                  <LuLogIn className="text-xl" />
                  Authentication <MdKeyboardArrowDown className={`ml-auto text-xl ${activeMenu === "menu5" ? "rotate-180" : ""}`} />
                </li>

                {/* Sub-menus  */}
                {activeMenu === "menu5" && (
                  <ul className="my-4 flex flex-col gap-2.5 pl-10">
                    <li onClick={handleHideSidebar}>
                      <Link to="/sign-in" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Sign in
                      </Link>
                    </li>

                    <li onClick={handleHideSidebar}>
                      <Link to="/sign-up" className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize">
                        Sign up
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link
                        to="/reset-password"
                        className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize"
                      >
                        Reset password
                      </Link>
                    </li>
                    <li onClick={handleHideSidebar}>
                      <Link
                        to="/two-step-verification"
                        className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white capitalize"
                      >
                        2step verification
                      </Link>
                    </li>
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
    </aside>
  );
};

export default Sidebar;
