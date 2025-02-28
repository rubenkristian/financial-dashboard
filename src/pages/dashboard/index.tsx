import MyCard from "../../components/container/MyCard";
import RecentTransaction from "../../components/container/RecentTransaction";
import WeeklyActivity, { WeeklyActivityData } from "../../components/container/WeeklyActivaty";
import ExpenseStatistics, { ExpenseStatisticsData } from "../../components/container/ExpenseStatistics";
import BalanceHistory, { BalanceHistoryData } from "../../components/container/BalanceHistory";
import QuickTransfer from "../../components/container/QuickTransfer";
import { generateCardData, generateFakeChips } from "../../utils/data";

const data: Array<WeeklyActivityData> = [
  {
    name: 'Sat',
    deposit: 4000,
    withdraw: 2400,
    amt: 2400,
  },
  {
    name: 'Sun',
    deposit: 4000,
    withdraw: 2400,
    amt: 2400,
  },
  {
    name: 'Mon',
    deposit: 4000,
    withdraw: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    deposit: 4000,
    withdraw: 2400,
    amt: 2400,
  },
  {
    name: 'Wed',
    deposit: 4000,
    withdraw: 2400,
    amt: 2400,
  },
  {
    name: 'Thu',
    deposit: 4000,
    withdraw: 2400,
    amt: 2400,
  },
  {
    name: 'Fri',
    deposit: 4000,
    withdraw: 2400,
    amt: 2400,
  },
];

const dataPie: Array<ExpenseStatisticsData> = [
  { label: 'Entertainment', value: 30 },
  { label: 'Investment', value: 20 },
  { label: 'Bill Expense', value: 15 },
  { label: 'Others', value: 35 },
];

const dataLines: Array<BalanceHistoryData> = [
  {
    label: 'Jul',
    value: 2400,
    amt: 2400,
  },
  {
    label: 'Aug',
    value: 1398,
    amt: 2210,
  },
  {
    label: 'Sep',
    value: 9800,
    amt: 2290,
  },
  {
    label: 'Oct',
    value: 3908,
    amt: 2000,
  },
  {
    label: 'Nov',
    value: 4800,
    amt: 2181,
  },
  {
    label: 'Dec',
    value: 3800,
    amt: 2500,
  },
  {
    label: 'Jan',
    value: 4300,
    amt: 2100,
  },
];

const DashboardIndexPage = () => {
    return (
        <div className="flex flex-col gap-6">
          <div className='flex flex-wrap content:flex-nowrap gap-7-5'>
            <MyCard
              data={generateFakeChips(10)}
            />
            <RecentTransaction
              data={generateCardData(10)}
            />
          </div>
            
          <div className='flex flex-wrap content:flex-nowrap gap-7-5'>
            <WeeklyActivity data={data}/>
            <ExpenseStatistics data={dataPie}/>
          </div>
            
          <div className='flex flex-wrap content:flex-nowrap gap-7-5'>
            <QuickTransfer/>
            <BalanceHistory data={dataLines}/>
          </div>
        </div>
    );
}

export default DashboardIndexPage;