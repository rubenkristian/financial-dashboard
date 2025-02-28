import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Text from "../label/Text";

export interface WeeklyActivityData {
    name: string;
    deposit: number;
    withdraw: number;
    amt: number;
}

interface WeeklyActivityProps {
    data: Array<WeeklyActivityData>;
}

const WeeklyActivity = ({data}: WeeklyActivityProps) => {
    return (
        <div className="flex flex-col grow gap-5 w-full content:max-w-2/3">
          <div className="flex w-full justify-between items-center">
              <Text as="h1">Weekly Activity</Text>
          </div>
          <div className="rounded-chip bg-white p-7-5">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="deposit" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="withdraw" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </ResponsiveContainer>
          </div>
      </div>
    );
}

export default WeeklyActivity;