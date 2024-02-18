import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/SideBar/Sidebar";
import Navbar from "../components/shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar start here  */}
      <aside className="flex w-96 h-screen bg-dark">
        <Sidebar />
      </aside>

      {/* content aria  */}
      <div className="w-full">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default RootLayout;
