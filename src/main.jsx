import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./styles/index.css";
import { SidebarProvider } from "./context/SidebarProvider";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SidebarProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </SidebarProvider>
  </AuthProvider>
);
