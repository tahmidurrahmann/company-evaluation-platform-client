import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../shared/Loading/Loading";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import useEmployee from "../../../hooks/useEmployee";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
const TeamMemberReq = () => {

    const [employeeAgreements, isEmployee, refetch] = useEmployee();
    const axiosSecure = useAxiosSecure();
    const [hrRequestCheck] = useHrRequestCheckedOrNot();
    const [myEmploye, setMyEmploye] = useState([])

    useEffect(() => {
        if (hrRequestCheck?.status === "checked") {
            const findEmployeMatch = employeeAgreements.filter(element => element?.company === hrRequestCheck?.company)
            setMyEmploye(findEmployeMatch)
        }
    }, [employeeAgreements, hrRequestCheck?.company, hrRequestCheck?.status])

    if (isEmployee) {
        return <Loading />
    }

    const handleMakeUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Hiring this user as an employee!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/makeUser/${id}`);
                if (res?.data?.modifiedCount) {
                    Swal.fire({
                        title: "Successful!",
                        text: "This User is now a employee.",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }

    const rejectReq = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this request!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/rejectUserRequest/${id}`);
                if (res?.data?.deletedCount) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }


    return (
        <div className="mb-20">
            <SharedHeadingDashboard heading="Employe User Requests" />
            <div className="overflow-x-auto">
                <table className="table table-xs rounded-lg">
                    <thead className="font-bold text-black bg-gray-100 ">
                        <tr>
                            <th>Name</th>
                            <th>Resume</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="border-b-2 border-blue-300">
                        {
                            myEmploye?.map(agreement => <tr className="h-16 border-b-2 border-gray-200" key={agreement?._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img referrerPolicy="no-referrer" src={agreement.imageURL} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{agreement?.name}</div>
                                            <div className="text-sm opacity-50">{agreement?.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td><a href={agreement?.file} download={agreement?.file}>
                                    <button className="py-1 px-3 border rounded-lg hover:scale-105 transition">View Resume</button>
                                </a></td>
                                <td><span onClick={() => handleMakeUser(agreement?._id)} className={`${agreement?.status === "checked" ? "text-lg text-[#007cc7] font-semibold" : "bg-[#007cc7] px-2 py-1 hover:border hover:border-[#007cc7] hover:bg-white hover:text-[#007cc7] text-white font-semibold rounded"}`}>{agreement?.status === "checked" ? "Checked" : "Accept"}</span></td>
                                <td><span onClick={() => rejectReq(agreement?._id)} ><RiDeleteBin6Line className="text-red-600 border-red-600 border p-1 rounded hover:bg-red-600 hover:text-white" size={26} /></span></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeamMemberReq;