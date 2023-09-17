import Widget from "@components/Widget/Widget"

const Dashboard = () => {
    return (
        <div className="px-5 w-full">
            <div className="h-24 flex items-center">
                <h1 className="text-3xl font-inter font-medium">Dashboard</h1>
            </div>

             {/* Widget container */}
            <div className="flex flex-wrap gap-2">
                <Widget />
            </div>
        </div>
    )
}

export default Dashboard