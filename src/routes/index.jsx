import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Profile from "../pages/Profile";
import DashBoard from "../pages/DashBoard";
import FormElement from "../pages/Forms/FormElement";
import FormLayOut from "../pages/Forms/FormLayOut";
import Tables from "../pages/Tables";
import Setting from "../pages/pages/Setting";
import Teams from "../pages/pages/Teams";
import TermsConditions from "../pages/pages/TermsConditions";
import Messages from "../pages/Messages";
import Inbox from "../pages/Inbox";
import Invoice from "../pages/Invoice";
import Accordion from "../pages/UiElements/Accordion";
import Alerts from "../pages/UiElements/Alerts";
import Avatars from "../pages/UiElements/Avatars";
import Badge from "../pages/UiElements/Badge";
import Breadcrumb from "../pages/UiElements/Breadcrumb";
import Buttons from "../pages/UiElements/Buttons";
import ButtonGroup from "../pages/UiElements/ButtonGroup";
import Cards from "../pages/UiElements/Cards";
import DropDown from "../pages/UiElements/DropDown";
import Lists from "../pages/UiElements/Lists";
import Modals from "../pages/UiElements/Modals";
import Notification from "../pages/UiElements/Notification";
import Pagination from "../pages/UiElements/Pagination";
import Spinner from "../pages/UiElements/Spinner";
import Tabs from "../pages/UiElements/Tabs";
import Tooltips from "../pages/UiElements/Tooltips";
import SingIn from "../pages/Authentication/SingIn";
import SignUp from "../pages/Authentication/SignUp";
import ResetPassword from "../pages/Authentication/ResetPassword";
import TwoStepVerification from "../pages/Authentication/TwoStepVerification";
import Charts from "../pages/Charts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/form-element",
        element: <FormElement />,
      },
      {
        path: "/form-layout",
        element: <FormLayOut />,
      },
      {
        path: "/tables",
        element: <Tables />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/terms-condition",
        element: <TermsConditions />,
      },
      {
        path: "/terms-condition",
        element: <TermsConditions />,
      },
      {
        path: "/charts",
        element: <Charts />,
      },
      {
        path: "/message",
        element: <Messages />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/accordions",
        element: <Accordion />,
      },
      {
        path: "/alerts",
        element: <Alerts />,
      },
      {
        path: "/avatars",
        element: <Avatars />,
      },
      {
        path: "/badge",
        element: <Badge />,
      },
      {
        path: "/breadcrumb",
        element: <Breadcrumb/>,
      },
      {
        path: "/buttons",
        element: <Buttons/>,
      },
      {
        path: "/button-group",
        element: <ButtonGroup/>,
      },
      {
        path: "/cards",
        element: <Cards/>,
      },
      {
        path: "/dropdowns",
        element: <DropDown/>,
      },
      {
        path: "/list",
        element: <Lists/>,
      },
      {
        path: "/modals",
        element: <Modals/>,
      },
      {
        path: "/notifications",
        element: <Notification/>,
      },
      {
        path: "/pagination",
        element: <Pagination/>,
      },
      {
        path: "/spinners",
        element: <Spinner/>,
      },
      {
        path: "/tabs",
        element: <Tabs/>,
      },
      {
        path: "/tooltips",
        element: <Tooltips/>,
      },
      {
        path: "/sign-in",
        element: <SingIn/>,
      },
      {
        path: "/sign-up",
        element: <SignUp/>,
      },
      {
        path: "/reset-password",
        element: <ResetPassword/>,
      },
      {path: "/two-step-verification",
      element: <TwoStepVerification/>,
    }
    ],
  },

]);
