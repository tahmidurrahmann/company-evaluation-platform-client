import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../shared/Loading/Loading";


const AdminprivateRoute = ({children}) => {
    const [isAdmin, pending] =useAdmin()
    const {user, loading} =useAuth();
    const location =useLocation();

    if(loading || pending){
        return <Loading />
    }

    if(user && isAdmin){
        return children;
    }


    return <Navigate state={{ from: location }} replace />;

};

export default AdminprivateRoute;