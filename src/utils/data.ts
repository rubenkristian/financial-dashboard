import { faker } from "@faker-js/faker";
import { TransactionData } from "../components/container/RecentTransaction";
import { MyCardData } from "../components/container/MyCard";
import { TransferData } from "../components/container/ContactList";
import { WeeklyActivityData } from "../components/container/WeeklyActivaty";
import { ExpenseStatisticsData } from "../components/container/ExpenseStatistics";
import { BalanceHistoryData } from "../components/container/BalanceHistory";

export function generateCardData(count: number): TransactionData[] {
    const types: TransactionData["type"][] = ["card", "paypal", "transfer"];
    return Array.from({ length: count }, () => ({
        type: faker.helpers.arrayElement(types),
        description: faker.finance.transactionDescription(),
        date: faker.date.past().toDateString(),
        amount: faker.datatype.boolean()
            ? +faker.finance.amount({min: -1000, max: -100, dec: 2})
            : +faker.finance.amount({min: 100, max: 5000, dec: 2}),
    }));
}

export function generateFakeChips(count: number): MyCardData[] {
    return Array.from({ length: count }, () => ({
        balance: faker.number.int({ min: 1000, max: 10000 }),
        holder: faker.person.fullName(),
        valid: faker.date.future({ years: 5 }).toLocaleDateString("en-US", { year: "2-digit", month: "2-digit" }),
        numbers: `${faker.number.int({ min: 1000, max: 9999 })} **** **** ${faker.number.int({ min: 1000, max: 9999 })}`,
    }));
};

export function generateFakeTransfers(count: number): TransferData[] {
    return Array.from({ length: count }, () => ({
        name: faker.person.fullName(),
        position: faker.person.jobTitle(),
        img: faker.image.avatar(),
    }));
};

export const generateWeeklyActivityData = (): WeeklyActivityData[] => {
    const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    return days.map((day) => ({
        name: day,
        deposit: faker.number.int({ min: 1000, max: 5000 }),
        withdraw: faker.number.int({ min: 500, max: 3000 }),
        amt: faker.number.int({ min: 500, max: 4000 }),
    }));
};

export const generateExpenseStatisticsData = (): ExpenseStatisticsData[] => {
    return [
        { label: 'Entertainment', value: faker.number.int({ min: 10, max: 40 }) },
        { label: 'Investment', value: faker.number.int({ min: 10, max: 30 }) },
        { label: 'Bill Expense', value: faker.number.int({ min: 5, max: 20 }) },
        { label: 'Others', value: faker.number.int({ min: 20, max: 50 }) },
    ];
};

export const generateBalanceHistoryData = (): BalanceHistoryData[] => {
    const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    return months.map((month) => ({
        label: month,
        value: faker.number.int({ min: 1000, max: 10000 }),
        amt: faker.number.int({ min: 1500, max: 3000 }),
    }));
};