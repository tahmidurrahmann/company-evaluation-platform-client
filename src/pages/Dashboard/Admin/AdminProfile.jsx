import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import BarChar from "./BarChar";
import PieChartStyle from "./PieChartStyle";
import PieChartThree from "./PieChartThree";
import Stats from "./Stats";
import Loading from "../../../shared/Loading/Loading";
import useAuth from "../../../hooks/useAuth";

const AdminProfile = () => {

    const [allUsers, isUser] = useUsers();
    const { user } = useAuth();
    const [hr, setHr] = useState(null);
    const [users, setUsers] = useState(null);
    const [admin, setAdmin] = useState(null);
    const [adminInfo, setAdminInfo] = useState(null);

    useEffect(() => {
        if (allUsers?.length > 0) {
            setHr(allUsers?.filter(user => user.role === "hr"));
            setUsers(allUsers?.filter(user => user?.role === "user"));
            setAdmin(allUsers?.filter(user => user?.role === "admin"));
        }
    }, [allUsers])

    useEffect(() => {
            if(admin?.length > 0){
                const adminName = admin?.find(a => a.email === user?.email)
                setAdminInfo(adminName)
            }
    }, [admin, user?.email])

    if (isUser) {
        return <Loading />
    }

    const hrLength = hr?.length;
    const employeeLength = users?.length;
    console.log(adminInfo);

    return (
        <div className="min-h-screen">
            <SharedHeadingDashboard heading="Admin Profile" />
            <div className="flex justify-center items-center py-6">
                <Stats hrLength={hrLength} employeeLength={employeeLength} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
                <BarChar hrLength={hrLength} employeeLength={employeeLength} />
                <PieChartThree />
                <PieChartStyle hrLength={hrLength} employeeLength={employeeLength} />
            </div>
        </div>
    );
};

export default AdminProfile;