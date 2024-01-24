import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import Loading from "../../../shared/Loading/Loading";

const AllUsers = () => {

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
        <div className="space-y-6">
            <div className="py-6 md:py-8 lg:py-12 max-w-screen-xl mx-auto">
                <h1 className="text-center text-xl lg:text-3xl font-semibold pb-6">All HR Lists</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hr?.map((person, index) => <tr key={person?._id}>
                                    <th>{index + 1}</th>
                                    <th><img className="w-8 md:w-12 rounded-full" src={person?.image} alt="" /></th>
                                    <td>{person?.name}</td>
                                    <td>{person?.email}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-center text-xl lg:text-3xl font-semibold pb-6">All User Lists</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user?.map((person, index) => <tr key={person?._id}>
                                    <th>{index + 1}</th>
                                    <th><img className="w-8 md:w-12 rounded-full" src={person?.image} alt="" /></th>
                                    <td>{person?.name}</td>
                                    <td>{person?.email}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;