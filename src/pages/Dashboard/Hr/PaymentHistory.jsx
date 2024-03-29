import useAuth from "../../../hooks/useAuth";
import Loading from "../../../shared/Loading/Loading";
import { GiMoneyStack } from "react-icons/gi";
import { LuCalendarClock } from "react-icons/lu";
import { MdMarkEmailRead } from "react-icons/md";
import UserAmount from "../UserProfile/UserAmount";
import usePayment from "../../../hooks/usePayment";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const [allPayments, isPayment] = usePayment();
 
    const axiosSecure =useAxiosSecure();
    const [asc, setAsc] = useState(true)
    const [shorts,setShorts]=useState([])

    useEffect(() => {
        axiosSecure(`/paymentHistory?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => setShorts(res.data))
            .catch(error => console.error("Error fetching payment history:", error));
    }, [axiosSecure, asc]);

   

    if (isPayment) {
        return <Loading />
    }

    const userEmail = user ? user.email : "";

    const filteredPayments = allPayments?.filter(item => item.employeeInfo.email === userEmail);

    return (
        <div className="pt-12">
            <div className="flex justify-between px-12">
                <div>
                    <button onClick={() =>setAsc(!asc)} className="btn bg-black border-b-2 border-blue-400 text-white">{asc ? "High Price" : "Low price"}</button>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <button className="btn  border-b-2 bg-black text-white border-blue-400" onClick={() => document.getElementById('my_modal_3').showModal()}>See Amount</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box bg-black  border-2 border-blue-400">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghos  absolute border-2 hover:bg-red-400 border-blue-500 rounded-full right-2 top-2">✕</button>
                            </form>
                            <UserAmount />
                        </div>
                    </dialog>

                </div>


            </div>

            <h1 className="text-4xl py-6 text-white font-bold text-center">Your Salary History {filteredPayments.length}</h1>
            <div className="grid px-4 xl:px-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-12">
                {
                    filteredPayments.map(item => <div key={item._id} className="card  hover:shadow-xl hover:shadow-blue-500 border-2 border-blue-300 card-compact  shadow-lg  backdrop-blur">
                        <figure><img src={item?.employeeInfo?.imageURL} alt="Shoes" className="w-full bg-cover" /></figure>
                        <div className="card-body">
                            <h2 className="card-title backdrop-blur-3xl text-white">{item?.employeeInfo?.company}</h2>

                            <div className="flex gap-1 items-center">
                                <MdMarkEmailRead className="" />
                                <h2 className=" backdrop-blur-3xl text-white">{item?.employeeInfo?.email}</h2>
                            </div>

                            <div className="flex justify-between">

                                <div className="flex justify-center items-center gap-2">
                                    <LuCalendarClock />
                                    <p className="font-bold">{item?.date}</p>
                                </div>


                                <div className="card-actions justify-end">
                                    <GiMoneyStack className="text-xl" />
                                    <div>
                                        <p className="text-white font-bold">{item?.salary} $</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PaymentHistory;
