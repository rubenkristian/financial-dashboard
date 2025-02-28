import { generateFakeTransfers } from "../../utils/data";
import Transfer from "../input/Transfer";
import Text from "../label/Text";
import ContactList from "./ContactList";

const QuickTransfer = () => {
    return (
        <div className="flex flex-col grow gap-5 w-1/3">
            <div className="flex w-full justify-between items-center">
                <Text as="h1">Quick Transfer</Text>
            </div>
            <div className="flex flex-wrap gap-7-5 px-6 py-8-5 bg-white rounded-chip">
                <ContactList data={generateFakeTransfers(10)}/>
                <div className="flex items-center justify-between w-full gap-6-5">
                    <Text as="span" className="whitespace-nowrap overflow-hidden text-xs font-normal">Write Amount</Text>
                    <Transfer/>
                </div>
            </div>
        </div>
    );
}

export default QuickTransfer;