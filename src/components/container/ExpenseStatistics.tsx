import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import Text from "../label/Text";

export interface ExpenseStatisticsData {
    label: string;
    value: number;
}

interface ExpenseStatisticsrops {
    data: Array<ExpenseStatisticsData>;
}

const RADIAN = Math.PI / 180;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

const ExpenseStatistics = ({data}: ExpenseStatisticsrops) => {
    return (
        <div className="flex flex-col w-full content:max-w-1/3 gap-5">
            <div className="flex w-full justify-between items-center">
                <Text as="h1">Expense Statistics</Text>
            </div>
            <div className="flex flex-wrap gap-7-5 h-[325px] w-full content:h-full rounded-chip bg-white p-7-5">
                <ResponsiveContainer>
                <PieChart>
                    <Pie
                    data={data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default ExpenseStatistics;