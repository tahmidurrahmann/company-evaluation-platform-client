import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Aboutus from "../pages/About-us/Aboutus";
import OurValuesOrMission from "../pages/Our Values or Mission/OurValuesOrMission";
import Contact from "../pages/Contact/Contact";
import Innovation from "../pages/Innovation/Innovation";
import Management from "../pages/Management/Management";
import SignIn from "../shared/SignIn/SignIn";
import SignUp from "../shared/SignUp/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: (
          <PrivateRoute>
            <Aboutus />,
          </PrivateRoute>
        ),
      },
      {
        path: "/ourValuesOrMission",
        element: <OurValuesOrMission></OurValuesOrMission>,
      },
      {
        path: "/innovation",
        element: <Innovation />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/management",
        element: <Management />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
