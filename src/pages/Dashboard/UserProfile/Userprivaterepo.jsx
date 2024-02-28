import { Navigate, useLocation } from "react-router-dom";
import UseeAllmployee from "../../../hooks/UseeAllmployee";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../shared/Loading/Loading";

const Userprivaterepo = ({children}) => {
    const [isEmployee, isPending] =UseeAllmployee();
    const { user, loading } =useAuth();
    const location =useLocation();

    if(loading || isPending){
        return <Loading/>
    }

    if(user && isEmployee){
        return children;
    }


    return <Navigate state={{ from: location }} replace />;
};

export default Userprivaterepo;