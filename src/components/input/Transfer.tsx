import IconButton from "../button/IconButton";

const Transfer = () => {
    return (
        <div className="flex justify-between items-center w-full rounded-5xl bg-light-gray-blue h-5xl">
            <div className="pl-7-5 py-4">
                <input className="w-full border-b border-transparent focus:outline-none placeholder-text-placeholder"></input>
            </div>
            <IconButton/>
        </div>
    )
}

export default Transfer;