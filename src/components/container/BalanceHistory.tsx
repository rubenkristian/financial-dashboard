import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import Text from "../label/Text"

export interface BalanceHistoryData {
    label: string;
    value: number;
    amt: number;
}

interface BalanceHistoryprops {
    data: Array<BalanceHistoryData>;
}

const BalanceHistory = ({data}: BalanceHistoryprops) => {
    return (
        <div className="flex flex-col grow gap-5 w-full content:max-w-2/3">
            <div className="flex w-full justify-between items-center">
                <Text as="h1">Balance History</Text>
            </div>
            <div className="flex flex-wrap gap-7-5 h-full rounded-chip bg-white p-7-5">
                <ResponsiveContainer width="100%" height={200}>
                <AreaChart width={500} height={200} data={data} syncId="anyId" margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BalanceHistory;