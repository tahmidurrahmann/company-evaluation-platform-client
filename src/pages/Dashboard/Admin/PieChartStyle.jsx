import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
const PieChartStyle = ({ hrLength, employeeLength }) => {

    const COLORS = ['#FF8042', '#007cc7'];

    const data = [
        {
            name: "HR's",
            value: hrLength,
        },
        {
            name: "EMPLOYEE's",
            value: employeeLength,
        },
    ];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                fontSize='16px'
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <ResponsiveContainer width="100%" height={500}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={190}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartStyle;