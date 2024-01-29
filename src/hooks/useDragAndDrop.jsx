import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDragAndDrop = () => {

    const axiosSecure = useAxiosSecure();

    const {data : dragAndDrop, isPending : isDrag} = useQuery({
        queryKey : ["dragAndDrop"],
        queryFn : async () => {
            const res = await axiosSecure.get("/imployeeTasks");
            return res?.data;
        }
    })

    return [dragAndDrop, isDrag];
};

export default useDragAndDrop;