import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../shared/Loading/Loading";

export interface HrRequestCheckData {
    _id : string;
    company : string;
    imageURL : string;
    role : string;
    name : string;
    email : string;
    status : string;
}

const useHrRequestCheckedOrNot = (): [HrRequestCheckData | undefined, boolean] => {
    const authInfo = useAuth();

    if (!authInfo) {
        return [undefined, true];
    }

    const { user } = authInfo;

    const axiosSecure = useAxiosSecure();
    const { data: hrRequestCheck, isPending: isHr } = useQuery<HrRequestCheckData>({
        queryKey: ["hrRequestChecked", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allAgreements/${user?.email}`);
            return res?.data;
        }
    });

    return [hrRequestCheck, isHr];
};

export default useHrRequestCheckedOrNot;
