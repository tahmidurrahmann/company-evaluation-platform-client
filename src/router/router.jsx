import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Aboutus from "../pages/About-us/Aboutus";

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
            }
        ]
    }
])

export default router;