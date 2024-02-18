import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/SideBar/Sidebar";
import Navbar from "../components/shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar start here  */}
      <aside className="flex w-75 h-screen bg-dark">
        <Sidebar />
      </aside>

      {/* content aria  */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default RootLayout;
