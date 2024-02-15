import useAuth from "../../../hooks/useAuth";
import usePayment from "../../../hooks/usePayment";
import Loading from "../../../shared/Loading/Loading";
import { GiMoneyStack } from "react-icons/gi";
import { LuCalendarClock } from "react-icons/lu";
import { MdMarkEmailRead } from "react-icons/md";
import UserAmount from "../UserProfile/UserAmount";


const PaymentHistory = () => {
    const { user } = useAuth();
    const [allPayments, isPayment] = usePayment();

    if (isPayment) {
        return <Loading />
    }

    const userEmail = user ? user.email : "";

    const filteredPayments = allPayments?.filter(item => item.employeeInfo.email === userEmail);
    return (
        <div className="p-28">

            <div className="flex justify-end backdrop-blur-3xl">
                <button className="btn  border-b-2 bg-black text-white border-blue-400" onClick={() => document.getElementById('my_modal_3').showModal()}>See Amount</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-black animate-bounce border-2 border-blue-400">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghos  absolute border-2 hover:bg-red-400 border-blue-500 rounded-full right-2 top-2">✕</button>
                        </form>
                        <UserAmount/>
                    </div>
                </dialog>

            </div>

            <h1 className="text-4xl text-white font-bold text-center">Your Salary History {filteredPayments.length}</h1>




            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-7 mt-12">
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
