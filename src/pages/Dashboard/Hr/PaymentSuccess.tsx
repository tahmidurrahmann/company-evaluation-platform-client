import React, { Link, useParams } from "react-router-dom";
import Loading from "../../../shared/Loading/Loading";
import { useEffect, useState } from "react";
import usePayment, { PaymentAgreement } from "../../../hooks/usePayment";

const PaymentSuccess = (): JSX.Element => {
    const { tranId } = useParams<{ tranId: string }>();
    const [allPayments, isPayment] = usePayment();
    const [payment, setPayment] = useState<PaymentAgreement | undefined>();

    useEffect(() => {
        if (allPayments?.length > 0) {
            const specificPayment = allPayments.find(payment => payment?.tranjectionId === tranId);
            setPayment(specificPayment);
        }
    }, [allPayments, tranId]);

    if (isPayment) {
        return <Loading />;
    }

    console.log(payment);

    return (
        <div className="min-h-screen text-xl flex flex-col space-y-6 justify-center items-center">
            <img src={payment?.employeeInfo?.imageURL} alt="" />
            <h1>Payment Success and Your Transaction Id is : {tranId}</h1>
            <p>Payment Month Date and Year : {payment?.date}</p>
            <p>Company Name : {payment?.employeeInfo?.company}</p>
            <p>Employee Email : {payment?.employeeInfo?.email}</p>
            <p>Employee Name : {payment?.employeeInfo?.name}</p>
            <Link to="/dashboard/payEmployee"><button className="bg-[#007cc7] p-2 rounded-lg hover:scale-105 transition">Go to Pay Employee</button></Link>
        </div>
    );
};

export default PaymentSuccess;
