import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import Loading from "../../../shared/Loading/Loading";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import PieC from "./PieC";

const AdminProfile = () => {

    const [allUsers, isUser] = useUsers();
    const [hr, setHr] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (allUsers) {
            setHr(allUsers?.filter(user => user.role === "hr"));
            setUser(allUsers?.filter(user => user?.role === "user"));
        }
    }, [allUsers])

    if (isUser) {
        return <Loading />
    }

    const hrLength = hr?.length;
    const employeeLength = user?.length;

    const colors = ['#007cc7', '#FF8042'];

    const data = [
        {
            name: "HR's",
            uv: hrLength,
        },
        {
            name: "EMPLOYEE's",
            uv: employeeLength,
        },
    ];



    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="flex flex-col-reverse min-h-[70vh] lg:flex-row justify-center items-center">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            <PieC hrLength={hrLength} employeeLength={employeeLength} />
        </div>
    );
};

export default AdminProfile;