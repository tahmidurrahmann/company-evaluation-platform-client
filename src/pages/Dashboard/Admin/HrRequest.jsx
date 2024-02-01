import useAgreement from "../../../hooks/useAgreement";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loading from "../../../shared/Loading/Loading";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import SharedHeading from "../../../shared/SharedHeading/SharedHeading";

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
            <div className="py-6 md:py-8">
                <SharedHeading heading="All HR Requests" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12">
                {
                    allAgreements?.map(agreement => <div className="p-4 bg-white shadow-xl rounded-lg" key={agreement?._id}>
                        <div className="flex items-center justify-center gap-2 md:gap-12">
                            <img referrerPolicy="no-referrer" className="w-12 h-12 md:h-16 md:w-16 rounded-full" src={agreement?.imageURL} alt="" />

                            <div>
                                <h3 className="text-sm font-semibold flex items-center justify-start gap-2"><FaRegUser />{agreement?.name}</h3>

                                <p className="mt-0.5 text-xs font-medium text-neutral-600 flex items-center justify-start gap-2">
                                    <GoMail /> {agreement?.email}
                                </p>
                                <p className="mt-0.5 text-neutral-600 flex items-center justify-start gap-2">
                                    <HiOutlineBuildingOffice2 /> {agreement?.company}
                                </p>
                            </div>
                            <div className="flex flex-col justify-evenly items-center gap-4">
                                <td><span onClick={() => handleMakeHr(agreement?._id)} className={`${agreement?.status === "checked" ? "md:text-lg text-[#007cc7] font-semibold" : "bg-[#007cc7] p-1 hover:border hover:border-[#007cc7] hover:bg-white hover:text-[#007cc7] text-white rounded"}`}>{agreement?.status === "checked" ? "Checked" : "Accept"}</span></td>
                                <td><span onClick={() => rejectReq(agreement?._id)} ><RiDeleteBin6Line className="text-red-600 border-red-600 border p-1 rounded hover:bg-red-600 hover:text-white" size={26} /></span></td>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HrRequest;