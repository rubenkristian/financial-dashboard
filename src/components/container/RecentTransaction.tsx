import Transaction from "../card/Transaction";
import Text from "../label/Text";

export interface TransactionData {
    type: 'card' | 'paypal' | 'transfer';
    description: string;
    date: string;
    amount: number;
}

interface RecentTransactionProps {
    data: Array<TransactionData>;
}

const RecentTransaction = ({data}: RecentTransactionProps) => {
    return (
        <div className="flex flex-col grow gap-5 w-full content:max-w-1/3">
            <div className="flex w-full justify-between items-center">
                <Text as="h1">Recent Transaction</Text>
            </div>
            <div className="flex flex-wrap gap-7-5 bg-white rounded-chip p-6-5 max-h-56 overflow-y-auto overflow-x-hidden scrollbar-hide">
                {
                    data.map(({type, description, date, amount}: TransactionData, index: number) => {
                        return (
                            <Transaction
                                key={index}
                                description={description}
                                type={type}
                                date={date}
                                amount={amount}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default RecentTransaction;