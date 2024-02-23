import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react';
import { FaEye } from "react-icons/fa";
import Loading from "../../../shared/Loading/Loading";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import useHrRequestCheckedOrNot, { HrRequestCheckData } from "../../../hooks/useHrRequestCheckedOrNot";
import useEmployee from "../../../hooks/useEmployee";
import usePayment, { PaymentAgreement } from "../../../hooks/usePayment";

const PayEmployee: React.FC = () => {
    const [employeeAgreements, isEmployee] = useEmployee();
    const [hrRequestCheck] = useHrRequestCheckedOrNot();
    const [myEmployee, setMyEmployee] = useState<HrRequestCheckData[]>([]);
    const [allPayments, isPayment] = usePayment();
    const [payments, setPayments] = useState<PaymentAgreement[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function closeModal() {
        setIsOpen(false);
    }

    const openModal = (id: string) => {
        setIsOpen(true);
        if (allPayments?.length > 0) {
            const data = allPayments?.filter(item => item?.paymentSuccess === true);
            const filterData = data?.filter(employee => employee?.employeeInfo?._id === id);
            setPayments(filterData);
        }
    };

    useEffect(() => {
        if (hrRequestCheck?.status === "checked") {
            const findEmployeeMatch = employeeAgreements.filter(element => element?.company === hrRequestCheck?.company);
            setMyEmployee(findEmployeeMatch);
        }
    }, [employeeAgreements, hrRequestCheck?.company, hrRequestCheck?.status]);

    if (isEmployee || isPayment) {
        return <Loading />;
    }

    return (
        <div>
            <SharedHeadingDashboard heading="Monthly Compensation for Employees" />
            <div className="overflow-x-auto">
                <table className="table table-xs rounded-lg">
                    <thead className="font-bold text-black bg-gray-100">
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>company</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="border-b-2 border-blue-300">
                        {myEmployee?.map(agreement => (
                            <tr className="h-16 border-b-2 border-gray-200" key={agreement?._id}>
                                <th><img referrerPolicy="no-referrer" className="w-8 md:w-16 rounded-full" src={agreement?.imageURL} alt="" /></th>
                                <td>{agreement?.name}</td>
                                <td>{agreement?.email}</td>
                                <td>{agreement?.company}</td>
                                <td><Link to={`/dashboard/payEmployee/${agreement?._id}`}><span className="bg-[#007cc7] px-2 py-1 text-white font-semibold rounded">PAY</span></Link></td>
                                <td onClick={() => openModal(agreement?._id)} className="cursor-pointer hover:text-[#007cc7]"><FaEye size={16} /></td>
                                <Transition appear show={isOpen} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-black/25" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 overflow-y-auto">
                                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 scale-95"
                                                    enterTo="opacity-100 scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 scale-100"
                                                    leaveTo="opacity-0 scale-95"
                                                >
                                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                        {/* show data here todo */}
                                                        {payments?.map(payment => (
                                                            <div className="border p-4 mt-6 rounded-lg text-sm" key={payment?._id}>
                                                                <h1>Salary Month : {payment?.date}</h1>
                                                                <p>Employee Name : {payment?.employeeInfo?.name}</p>
                                                                <p>Employee Email : {payment?.employeeInfo?.email}</p>
                                                                <p>Payment TransactionId : {payment?.tranjectionId}</p>
                                                                <p><span>{payment?.salary}</span> <span>{payment?.currency}</span></p>
                                                            </div>
                                                        ))}
                                                        <div className="mt-4">
                                                            <button onClick={closeModal} className="px-2 py-1 rounded-full hover:scale-110 transition bg-red-600 text-white absolute right-2 top-2">✕</button>
                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PayEmployee;
