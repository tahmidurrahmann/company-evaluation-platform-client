
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

const Evaluationchart2 = () => {
    return (
        <div className="bg-white shadow-2xl pl-5 lg:h-[60vh] h-[90vh]  rounded-xl">
            <h1 className="text-3xl py-2 font-semibold">Sentiment Analysis</h1>
            <ResponsiveContainer width="100%" height="70%">
                <PieChart width={400} height={400}>
                    <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#007cc7" label />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Evaluationchart2;