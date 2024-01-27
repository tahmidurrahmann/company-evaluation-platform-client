import useAgreement from "../../../hooks/useAgreement";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loading from "../../../shared/Loading/Loading";
import { RiDeleteBin6Line } from "react-icons/ri";

const HrRequest = () => {

    const [allAgreements, isAgreement, refetch] = useAgreement();
    const axiosSecure = useAxiosSecure();

    if (isAgreement) {
        return <Loading />
    }

    const handleMakeHr = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user a HR!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/makeHr/${id}`);
                if (res?.data?.result1?.modifiedCount && res?.data?.result2?.modifiedCount) {
                    Swal.fire({
                        title: "Successful!",
                        text: "This User is now a HR.",
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
                const res = await axiosSecure.delete(`/rejectHrRequest/${id}`);
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
        <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-6">All HR Requests</h1>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>company</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAgreements?.map(agreement => <tr key={agreement?._id}>
                                <th><img referrerPolicy="no-referrer" className="w-8 md:w-12 rounded-full" src={agreement?.imageURL} alt="" /></th>
                                <td>{agreement?.name}</td>
                                <td>{agreement?.email}</td>
                                <td>{agreement?.company}</td>
                                <td><span onClick={() => handleMakeHr(agreement?._id)} className={`${agreement?.status === "checked" ? "text-lg text-[#007cc7] font-semibold" : "bg-[#007cc7] px-2 py-1 hover:border hover:border-[#007cc7] hover:bg-white hover:text-[#007cc7] text-white font-semibold rounded"}`}>{agreement?.status === "checked" ? "Checked" : "Accept"}</span></td>
                                <td><span onClick={() => rejectReq(agreement?._id)} ><RiDeleteBin6Line className="text-red-600 border-red-600 border p-1 rounded hover:bg-red-600 hover:text-white" size={26} /></span></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HrRequest;