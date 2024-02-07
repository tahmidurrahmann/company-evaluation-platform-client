import { useEffect, useState } from "react";
import useCompany from "../../../hooks/useCompany";
import Loading from "../../../shared/Loading/Loading";
import PieChartTwo from "./PieChartTwo";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CompanyInfo = () => {

    const [hrInfo, isHrPending, refetch] = useCompany();
    const axiosSecure = useAxiosSecure();
    const [hr, setHr] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (hrInfo?.length > 0) {
            const specificHr = hrInfo?.filter(hr => hr?.status === "checked");
            setHr(specificHr);
        }
    }, [hrInfo])

    if (isHrPending) {
        return <Loading />
    }

    const handleSeeDetails = (id) => {
        navigate(`/dashboard/singleCompanyDetails/${id}`);
    }

    const handleDeleteHr = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/users/${id}`);
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
        <div>
            <PieChartTwo />
            <div className="border rounded-lg">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Company Name</th>
                                <th>HR name</th>
                                {/* <th>Status</th> */}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hr?.map((item, index) => <tr key={item?._id}>
                                    <th>{index + 1}</th>
                                    <td>{item?.company}</td>
                                    <td>{item?.name}</td>
                                    {/* <td></td> */}
                                    <td><div className="dropdown dropdown-left hover:bg-gray-100 rounded-full p-1">
                                        <div tabIndex={0} role="button" className="m-1"><HiOutlineDotsVertical size={20} /></div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box space-y-1">
                                            <li onClick={() => handleSeeDetails(item?._id)}><button>Details</button></li>
                                            <li onClick={() => handleDeleteHr(item?._id)}><button>Delete</button></li>
                                        </ul>
                                    </div></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;