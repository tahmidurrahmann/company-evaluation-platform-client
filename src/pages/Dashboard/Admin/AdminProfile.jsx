import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import Loading from "../../../shared/Loading/Loading";
import { FaUserTie } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const AdminProfile = () => {

    const [allUsers, isUser] = useUsers();
    const [hr, setHr] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (allUsers) {
            setHr(allUsers?.filter(user => user.role === "hr"));
            setUser(allUsers?.filter(user => user?.role === "user"));
        }
    }, [allUsers])

    if (isUser) {
        return <Loading />
    }

    return (
        <div className="flex justify-center min-h-[70vh] items-center max-w-screen-2xl mx-auto">
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUserTie size={26} />
                    </div>
                    <div className="stat-title">HR'S</div>
                    <div className="stat-value">{hr?.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUser size={26} />
                    </div>
                    <div className="stat-title">USERS</div>
                    <div className="stat-value">{user?.length}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;