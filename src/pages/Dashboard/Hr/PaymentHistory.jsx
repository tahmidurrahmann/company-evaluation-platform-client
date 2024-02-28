import useAuth from "../../../hooks/useAuth";
import { GiMoneyStack } from "react-icons/gi";
import { LuCalendarClock } from "react-icons/lu";
import { MdMarkEmailRead } from "react-icons/md";
import UserAmount from "../UserProfile/UserAmount";
import { useCallback, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const [asc, setAsc] = useState(true);
  const [shorts, setShorts] = useState([]);
  const [paymentsFetched, setPaymentsFetched] = useState(false);

  const fetchPayments = useCallback(async () => {
    try {
      if (user && !paymentsFetched) {
        const res = await axiosSecure(`/payments?email=${user.email}`);
        console.log(res.data);
        setShorts(res.data);
        setPaymentsFetched(true);
      }
    } catch (error) {
      console.error("Error fetching payment history:", error);
    }
  }, [axiosSecure, user, paymentsFetched]);

  useEffect(() => {
    fetchPayments();
  }, [fetchPayments]);
  
  const handleFilter = () => {
    const sortedShorts = [...shorts]; // Create a copy of shorts array

    // Sort the array based on short.salary
    sortedShorts.sort((a, b) => {
      if (asc) {
        return a.salary - b.salary; // Ascending order
      } else {
        return b.salary - a.salary; // Descending order
      }
    });

    // Toggle the sorting order for the next click
    setAsc(!asc);

    // Update the state with sorted data
    setShorts(sortedShorts);
  };
  return (
    <div className="pt-12">
      <div className="flex justify-between px-12">
        <div>
          <button
            onClick={handleFilter}
            className="text-white bg-black border-b-2 border-blue-400 btn"
          >
            {asc ? "High Price" : "Low price"}
          </button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <button
            className="text-white bg-black border-b-2 border-blue-400 btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            See Amount
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="bg-black border-2 border-blue-400 modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="absolute border-2 border-blue-500 rounded-full btn btn-sm btn-circle btn-ghos hover:bg-red-400 right-2 top-2">
                  ✕
                </button>
              </form>
              <UserAmount />
            </div>
          </dialog>
        </div>
      </div>

      <h1 className="py-6 text-4xl font-bold text-center text-white">
        Your Salary History {shorts.length}
      </h1>
      <div className="grid grid-cols-1 px-4 mt-12 xl:px-0 lg:grid-cols-3 md:grid-cols-2 gap-7">
        {shorts.map((item) => (
          <div
            key={item._id}
            className="border-2 border-blue-300 shadow-lg card hover:shadow-xl hover:shadow-blue-500 card-compact backdrop-blur"
          >
            <figure>
              <img
                src={item?.employeeInfo?.imageURL}
                alt="Shoes"
                className="w-full bg-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title backdrop-blur-3xl">
                {item?.employeeInfo?.company}
              </h2>

              <div className="flex items-center gap-1">
                <MdMarkEmailRead className="" />
                <h2 className="text-white backdrop-blur-3xl">
                  {item?.employeeInfo?.email}
                </h2>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center justify-center gap-2">
                  <LuCalendarClock />
                  <p className="font-bold">{item?.date}</p>
                </div>

                <div className="justify-end card-actions">
                  <GiMoneyStack className="text-xl" />
                  <div>
                    <p className="font-bold text-white">{item?.salary} $</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
