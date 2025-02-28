import MyCard from "../../components/container/MyCard";
import RecentTransaction from "../../components/container/RecentTransaction";
import WeeklyActivity from "../../components/container/WeeklyActivaty";
import ExpenseStatistics from "../../components/container/ExpenseStatistics";
import BalanceHistory from "../../components/container/BalanceHistory";
import QuickTransfer from "../../components/container/QuickTransfer";
import { generateBalanceHistoryData, generateCardData, generateExpenseStatisticsData, generateFakeChips, generateWeeklyActivityData } from "../../utils/data";

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
            <WeeklyActivity data={generateWeeklyActivityData()}/>
            <ExpenseStatistics data={generateExpenseStatisticsData()}/>
          </div>
            
          <div className='flex flex-wrap content:flex-nowrap gap-7-5'>
            <QuickTransfer/>
            <BalanceHistory data={generateBalanceHistoryData()}/>
          </div>
        </div>
    );
}

export default DashboardIndexPage;