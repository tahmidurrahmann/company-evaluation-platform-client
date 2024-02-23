import usePayment from "../../../hooks/usePayment";
import Loading from "../../../shared/Loading/Loading";

const UserAmount = () => {
    const [allPayments, isPayment] = usePayment();

    if(isPayment){
        return <Loading />
    }

    const totalAmount = allPayments.reduce((total, item) => total + item.salary, 0)
    
    return (
        <div className="text-white m-5 flex justify-center items-center gap-2 ">
            <div className="mb-8">
                <span className="relative flex h-8 w-8">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
            </div>

            <h1 className="text-2xl text-center font-bold text-white">Your Total Amount Is <span className="text-red-400">$ {totalAmount}</span></h1>
           

        </div>
    );
};

export default UserAmount;