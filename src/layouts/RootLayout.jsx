import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/shared/SideBar/Sidebar";
import Navbar from "../components/shared/Navbar/Navbar";
// import { useAuth } from "../context/AuthContext";

const RootLayout = () => {
  // const { isAuthenticated } = useAuth();
  // console.log(isAuthenticated);
  const location = useLocation();

  // Define an array of routes where you want to hide the Navbar
  const hideNavbarRoutes = [
    "/sign-in",
    "/sign-up",
    "/reset-password",
    "/two-step-verification",
  ];
  const hideSidebarRoutes = [
    "/sign-in",
    "/sign-up",
    "/reset-password",
    "/two-step-verification",
  ];

  // Check if the current route is in the hideNavbarRoutes array
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);
  const hideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar start here  */}
      {!hideSidebar && <Sidebar />}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* content aria  */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {!hideNavbar && <Navbar />}
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
