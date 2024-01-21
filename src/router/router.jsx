import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Aboutus from "../pages/About-us/Aboutus";
import OurValuesOrMission from "../pages/Our Values or Mission/OurValuesOrMission";
import Contact from "../pages/Contact/Contact";
import Managments from "../pages/Managment/Managments";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <Error />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path:'/aboutUs',
                element:<Aboutus/>
            },
            {
                path: '/ourValuesOrMission',
                element: <OurValuesOrMission></OurValuesOrMission>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/assessments',
                element:<Managments/>
            }
        ]
    }
])

export default router;