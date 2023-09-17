import { FaComputer } from "react-icons/fa6"
const Widget = () => {
    return (
        <div className="flex justify-between items-center flex-1 shadow-lg p-3 rounded-lg border border-slate-300">

            {/* Left side */}
            <div className="">
                <p className="text-gray-500 font-inter font-medium">Clients online</p>
                <span className="font-medium text-3xl">10</span>
            </div>
            {/* Right side */}
            <FaComputer className="text-5xl" />
            
        </div>
    )
}

export default Widget

//<div className="flex w-full justify-between">
//                <p className="text-red-500">10%</p>
//            </div>
//            {/* Main content */}
//            <div className="flex justify-between">
//                <p className="self-end">icon</p>
//            </div>