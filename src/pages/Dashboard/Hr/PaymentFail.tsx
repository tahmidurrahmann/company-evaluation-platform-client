import React, { Link } from "react-router-dom";

const PaymentFail = () => {
    return (
        <div className="min-h-screen text-xl flex flex-col space-y-6 justify-center items-center">
            <h1 className="text-red-600 text-2xl">Your Payment Failed</h1>
            <Link to="/dashboard/payEmployee"><button className="bg-[#007cc7] p-2 rounded-lg hover:scale-105 transition">Go to Pay Employee</button></Link>
        </div>
    );
};

export default PaymentFail;
