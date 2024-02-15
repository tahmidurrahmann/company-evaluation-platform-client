import useAuth from "../../../hooks/useAuth";
import usePayment from "../../../hooks/usePayment";
import Loading from "../../../shared/Loading/Loading";

const PaymentHistory = () => {
    const { user } = useAuth();
    const [allPayments, isPayment] = usePayment();

    if(isPayment){
     return  <Loading/>
    }

  
    const userEmail = user ? user.email : "";

    const filteredPayments = allPayments?.filter(item => item.employeeInfo.email === userEmail);

   

    return (
        <div className="p-28">
            <h1 className="text-4xl text-white font-bold text-center">Your Salary History {filteredPayments.length}</h1>
            <div>
                {/* Render your filtered payments here */}
            </div>
        </div>
    );
};

export default PaymentHistory;
