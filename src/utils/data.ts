import { faker } from "@faker-js/faker";
import { TransactionData } from "../components/container/RecentTransaction";
import { MyCardData } from "../components/container/MyCard";
import { TransferData } from "../components/container/ContactList";

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
