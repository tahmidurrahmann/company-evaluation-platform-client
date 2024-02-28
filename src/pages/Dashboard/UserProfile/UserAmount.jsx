import useAuth from "../../../hooks/useAuth";
import usePayment from "../../../hooks/usePayment";
import Loading from "../../../shared/Loading/Loading";

const UserAmount = ({ employID }) => {
  const { user } = useAuth();
  const [allPayments, isPayment] = usePayment();

  if (isPayment) {
    return <Loading />;
  }

  const userEmail = user ? user.email : "";

  const filteredPayments = allPayments?.filter(
    (item) => item.employeeInfo.email === userEmail
  );

  const totalAmount = filteredPayments.reduce(
    (total, item) => total + item.salary,
    0
  );

  return (
    <div className="flex items-center justify-center gap-2 m-5 text-white ">
      <div className="mb-8">
        <span className="relative flex w-8 h-8">
          <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400"></span>
          <span className="relative inline-flex w-3 h-3 rounded-full bg-sky-500"></span>
        </span>
      </div>

      <h1 className="text-2xl font-bold text-center text-white">
        Your Total Amount Is
        <span className="text-red-400">$ {totalAmount}</span>
      </h1>
    </div>
  );
};

export default UserAmount;
