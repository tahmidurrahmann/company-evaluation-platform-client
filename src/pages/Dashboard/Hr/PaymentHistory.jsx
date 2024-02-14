import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const user = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payments=[] } = useQuery({
        queryKey: ["payments", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }

    })
    return (
        <div className="p-28">
            <h1 className="text-4xl text-white font-bold text-center">Your Salary History</h1>
           
            <div>
                <div className="overflow-x-auto mt-10">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-white font-bold">
                            <tr className="font-bold text-black">
                                <th>Company</th>
                                <th>Name</th>
                                <th>Trangisition id</th>
                                <th>Date</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody className="">

                            {


                                payments.map(item => <tr key={item._id} className="">
                                    <th>{item?.name}</th>
                                    <td>{item?.tranjectionId}</td>
                                    <td>Quality Control Specialist</td>
                                    <td>{item?.date}</td>
                                    <td>Blue</td>
                                </tr>)



                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;