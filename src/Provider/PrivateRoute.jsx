import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user,loading}= useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return <div className="text-center my-11 ">
            <span className="loading loading-spinner text-primary w-10"></span>
<span className="loading loading-spinner text-secondary w-10"></span>
<span className="loading loading-spinner text-accent w-10"></span>
        </div>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/signIn'}></Navigate>;
};

export default PrivateRoute;