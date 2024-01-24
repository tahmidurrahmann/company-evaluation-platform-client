import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://company-evaluation-platform-server.vercel.app',
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;