import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMeet = () => {
    
    const axiosSecure = useAxiosSecure();

    const { data: allMeetLink, isPending: isMeetLink } = useQuery({
        queryKey: ["meetLinks"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/meetLink`);
            return res?.data
        }
    })

    return [allMeetLink, isMeetLink];
};

export default useMeet;