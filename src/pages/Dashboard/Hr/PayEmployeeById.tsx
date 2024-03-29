import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import Loading from "../../../shared/Loading/Loading";
import "./Payment.css";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useEmployee, { EmployeeAgreement } from "../../../hooks/useEmployee";
import usePayment from "../../../hooks/usePayment";

interface FormData {
    name: string;
    company: string;
    email: string;
    date: string;
    salary: number;
    currency: string;
}

const PayEmployeeById = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const [employeeAgreements, isEmployee] = useEmployee();
    const [employeeData, setEmployeeData] = useState<EmployeeAgreement | undefined>();
    const axiosSecure = useAxiosSecure();
    const [allPayments, , refetch] = usePayment();

    useEffect(() => {
        if (employeeAgreements?.length > 0) {
            const filterEmployee = employeeAgreements.find(item => item?._id === id);
            setEmployeeData(filterEmployee);
        }
    }, [employeeAgreements, id]);

    const { register, handleSubmit } = useForm<FormData>();

    if (isEmployee) {
        return <Loading />;
    }

    const onSubmit = async (data: FormData) => {
        const name = employeeData?.name;
        const company = employeeData?.company;
        const email = employeeData?.email;
        const date = data.date;
        const salary = data.salary;
        const currency = data.currency;
        const employeeDetails = { name, company, email, date, salary, currency };
        const res = await axiosSecure.post("/salary", employeeDetails);
        window.location.replace(res?.data?.url);
        console.log(res?.data?.url);
        refetch();
    };

    return (
        <div>
            <Link to={`/dashboard/payEmployee`}><button className="btn btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button></Link>
            <div className="flex flex-col gap-8 md:gap-24 lg:gap-32 min-h-screen justify-center items-center px-6 xl:px-0">
                <SharedHeadingDashboard heading="Pay Employee" />
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="inputContainerr w-full">
                            <input {...register("name")} defaultValue={employeeData?.name} readOnly className="customInputt" type="text" />
                            <label className="inputLabell font-semibold">FULL NAME</label>
                            <div className="inputUnderlinee"></div>
                        </div>
                        <div className="inputContainerr w-full">
                            <input {...register("company")} defaultValue={employeeData?.company} readOnly className="customInputt" type="text" />
                            <label className="inputLabell font-semibold">Company Name</label>
                            <div className="inputUnderlinee"></div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mt-8">
                        <div className="inputContainerr w-full">
                            <input {...register("email")} defaultValue={employeeData?.email} readOnly className="customInputt" type="email" />
                            <label className="inputLabell font-semibold">EMAIL</label>
                            <div className="inputUnderlinee"></div>
                        </div>
                        <div className="inputContainer w-full">
                            <input required {...register("date")} type="date" className="customInputt text-white" id="" />
                            <label className="inputLabell font-semibold">Select Month & Year</label>
                            <div className="inputUnderlinee"></div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
                        <div className="inputContainerr w-full mt-8">
                            <input required {...register("salary")} type="number" className="customInputt text-white" id="" />
                            <label className="inputLabell font-semibold">Salary</label>
                        </div>
                        <div className="w-full inputContainerr">
                            <label className="font-semibold">Currency</label>
                            <select {...register("currency")} required className="select text-white select-ghost customInputtt">
                                <option>BDT</option>
                                <option>USD</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <input className="hover:bg-[#b63327] bg-[#007cc7] py-3 px-8 rounded-full text-white font-bold text-sm cursor-pointer mt-8" type="submit" value="Pay" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PayEmployeeById;
