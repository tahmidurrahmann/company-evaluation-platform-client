import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export interface PaymentAgreement {
    _id: string;
    currency : string;
    date : string;
    paymentSuccess : Boolean;
    salary : number;
    tranjectionId : string;
}

const usePayment = (): [PaymentAgreement[], boolean, () => void] => {
    const axiosSecure = useAxiosSecure();

    const { data: allPayments, isPending: isPayment, refetch } = useQuery({
        queryKey: ["payments"],
        queryFn: async () => {
            const res = await axiosSecure.get("/payments");
            return res?.data;
        }
    });

    return [allPayments, isPayment, refetch];
};

export default usePayment;
