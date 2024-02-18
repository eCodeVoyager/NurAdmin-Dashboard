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
      <div className="w-full">
        <header className="sticky top-0 z-999 flex w-full bg-foreGround shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:drop-shadow-none">
          <Navbar />
        </header>

        <main>
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default RootLayout;
