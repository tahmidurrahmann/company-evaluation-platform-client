import React, { useEffect, useState } from "react";
import Loading from "../../../shared/Loading/Loading";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import useHrRequestCheckedOrNot, { HrRequestCheckData } from "../../../hooks/useHrRequestCheckedOrNot";
import useEmployee from "../../../hooks/useEmployee";
import usePayment from "../../../hooks/usePayment";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PayEmployee: React.FC = () => {
    const [employeeAgreements, isEmployee] = useEmployee();
    const [hrRequestCheck] = useHrRequestCheckedOrNot();
    const [myEmployee, setMyEmployee] = useState<HrRequestCheckData[]>([]);
    const [allPayments, isPayment, refetch] = usePayment();
    const [totalSalary, setTotalSalary] = useState<number>(0);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    useEffect(() => {
        if (hrRequestCheck?.status === "checked") {
            const findEmployeeMatch = employeeAgreements.filter(element => element?.company === hrRequestCheck?.company && element?.status === "checked");
            setMyEmployee(findEmployeeMatch);
        }
    }, [employeeAgreements, hrRequestCheck?.company, hrRequestCheck?.status]);

    useEffect(() => {
        if (myEmployee && Array.isArray(myEmployee)) {
            const salary = myEmployee.reduce(
                (accumulator, currentValue) => accumulator + (currentValue?.salary || 0),
                0
            );
            setTotalSalary(salary);
        }
    }, [myEmployee]);


    if (isEmployee || isPayment) {
        return <Loading />;
    }
    
    const handlePayment = async () => {
        const salary = totalSalary;
        const currentDate = new Date();
        const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        const hrEmail = user?.email;
        const employeeDetails = { date, salary, myEmployee, hrEmail };
        const res = await axiosSecure.post("/salary", employeeDetails);
        window.location.replace(res?.data?.url);
        console.log(res?.data?.url);
        refetch();
    }

    return (
        <div>
            <SharedHeadingDashboard heading="Monthly Compensation for Employees" />
            <section className="text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <div className="mt-8">
                            <ul className="space-y-4">
                                {myEmployee?.map(agreement => (
                                    <li key={agreement?._id} className="flex items-center gap-4">
                                        <img
                                            src={agreement?.imageURL}
                                            alt=""
                                            className="size-16 rounded object-cover"
                                        />

                                        <div>
                                            <h3 className="text-sm">{agreement?.name}</h3>

                                            <dl className="mt-0.5 space-y-px text-[12px]">
                                                <div>
                                                    <dt className="inline">Email : </dt>
                                                    <dd className="inline">{agreement?.email}</dd>
                                                </div>

                                                <div>
                                                    <dt className="inline">Company : </dt>
                                                    <dd className="inline">{agreement?.company}</dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <div className="flex flex-1 items-center justify-end gap-2">
                                            <form>
                                                <label htmlFor="Line1Qty" className="sr-only">Quantity</label>

                                                <input
                                                    type="number"
                                                    readOnly
                                                    defaultValue={agreement?.salary}
                                                    className="h-8 w-12 rounded text-black border-gray-200 bg-gray-50 text-center text-xs [-moz-appearance:_textfield] focus:outline-none"
                                                />
                                            </form>
                                            {/* i will work on this delete button */}
                                            {/* <button className="transition hover:text-red-600">
                                                <span className="sr-only">Remove item</span>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </button> */}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-screen max-w-lg space-y-4">
                                    <dl className="text-sm text-white">
                                        <div className="flex justify-between">
                                            <dt>Total</dt>
                                            <dd>{totalSalary}</dd>
                                        </div>
                                    </dl>
                                    <div className="flex justify-end">
                                        <span onClick={handlePayment} className="bg-[#007cc7] text-white font-semibold rounded block px-5 py-3 text-sm transition hover:bg-gray-600">PAY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PayEmployee;
