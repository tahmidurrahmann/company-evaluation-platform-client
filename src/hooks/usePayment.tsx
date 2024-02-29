import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export interface PaymentAgreement {
    _id: string;
    currency : string;
    date : string;
    paymentSuccess : Boolean;
    salary : number;
    tranjectionId : string;
    employeeInfo : {
        company : string;
        email : string;
        imageURL : string;
        name : string;
        role : string;
        status : string;
        _id : string;
    }
}

const usePayment = (): [PaymentAgreement[], boolean, () => void] => {
    const axiosSecure = useAxiosSecure();

    const { data: allPayments, isPending: isPayment, refetch } = useQuery({
        queryKey: ["paymentss"],
        queryFn: async () => {
            const res = await axiosSecure.get("/payments");
            return res?.data;
        }
    });

    return [allPayments, isPayment, refetch];
};

export default usePayment;
