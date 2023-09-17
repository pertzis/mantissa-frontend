import { ReactElement } from "react"

interface Props {
    title: string,
    value: string,
    icon?: ReactElement,
    className: string
}

const Widget = ({ title, value, icon, className }: Props) => {
    return (
        <div className={`flex justify-between items-center flex-1 shadow-lg p-3 rounded-lg border-2 ${className || "border-slate-300"}`}>
            {/* Left side */}
            <div className="">
                <p className="text-gray-500 font-inter font-medium">{title}</p>
                <span className="font-medium text-3xl">{value}</span>
            </div>
            {/* Right side */}
            { icon || null }
        </div>
    )
}

export default Widget