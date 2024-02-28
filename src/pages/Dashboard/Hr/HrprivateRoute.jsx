import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useHr from "../../../hooks/useHr";
import Loading from "../../../shared/Loading/Loading";

const HrprivateRoute = ({children}) => {
    const [isHr, isPending] =useHr();
    const { user, loading } =useAuth();
    const location =useLocation();

    if(loading || isPending){
        return <Loading/>
    }
    
    if(user && isHr){
        return children
    }

    return <Navigate state={{ from: location }} replace />;
};

export default HrprivateRoute;