import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../shared/Loading/Loading";
import Swal from "sweetalert2";
import useEmployee from "../../../hooks/useEmployee";

const UserRequest = () => {

    const [employeeAgreements, isEmployee, refetch] = useEmployee();
    const axiosSecure = useAxiosSecure();

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
            text: "You want to reject this request!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/rejectUserRequest/${id}`);
                if (res?.data?.modifiedCount) {
                    Swal.fire({
                        title: "Successful!",
                        text: "This request is now rejected.",
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    }

    return (
        <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-6">All User Requests</h1>
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
                            employeeAgreements?.map(agreement => <tr key={agreement?._id}>
                                <th><img referrerPolicy="no-referrer" className="w-8 md:w-12 rounded-full" src={agreement?.imageURL} alt="" /></th>
                                <td>{agreement?.name}</td>
                                <td>{agreement?.email}</td>
                                <td>{agreement?.company}</td>
                                <td><span onClick={() => handleMakeUser(agreement?._id)} className={`${agreement?.status === "checked" ? "text-lg text-[#007cc7] font-semibold" : "bg-[#007cc7] px-2 py-1 hover:border hover:border-[#007cc7] hover:bg-white hover:text-[#007cc7] text-white font-semibold rounded"}`}>{agreement?.status === "checked" ? "Checked" : "Accept"}</span></td>
                                <td><span onClick={() => rejectReq(agreement?._id)} className={`${agreement?.status === "rejected" ? "text-lg text-red-600 font-semibold" : "bg-red-600 px-2 py-1 hover:border hover:border-red-600 hover:bg-white hover:text-red-600 text-white font-semibold rounded"}`}>{agreement?.status === "rejected" ? "Rejected" : "Reject"}</span></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserRequest;