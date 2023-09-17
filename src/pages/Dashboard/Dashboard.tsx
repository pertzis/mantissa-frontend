import Widget from "@components/Widget/Widget"
import { Avatar } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { FaComputer } from "react-icons/fa6"
import { GrCloudComputer } from "react-icons/gr"
import { AiOutlineClockCircle } from "react-icons/ai"
import { HiStatusOnline } from "react-icons/hi"
import { MdOutlineComputer } from "react-icons/md"
import moment from "moment"
const Dashboard = () => {

    interface Row {
        id: number,
        user: string,
        action: string,
        severity: string,
        clientName: string,
        time: Date
    }

    const columns: GridColDef[] = [
        {
            field: "user",
            width: 200,
            headerName: "User",
            renderCell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <Avatar  />
                    <p className="font-medium">{row.user}</p>
                </div>
            )
        },
        {
            field: "action",
            width: 300,
            headerName: "Action"
        },
        {
            field: "severity",
            headerName: "Severity",
            renderCell: ({ row }) => (
                <span className="text-green-700 bg-green-200 rounded-lg p-2">{row.severity}</span>
            )
        },
        {
            field: "clientName",
            width: 200,
            headerName: "Client",
            renderCell: ({ row }) => (
                <div className="flex gap-1 items-center font-bold">
                    <MdOutlineComputer className="text-xl text-gray-600" />
                    <p>{row.clientName}</p>

                </div>
            )
        },
        {
            field: "time",
            width: 300,
            headerName: "Time Executed",
            renderCell: ({ row }) => (
                <div className="flex gap-1 items-center">
                    <AiOutlineClockCircle className="text-xl text-gray-600" />
                    <span>{moment(row.time).fromNow()}</span>
                </div>
            )
        },
    ]

    const rows = [
        {
            id: 0,
            user: "Peter Giamalakis",
            action: "Viewed screen livestream.",
            severity: "Low",
            clientName: "PC-001",
            time: Date.parse("Sep 17, 2023")
        }
    ]

    return (
        <div className="px-5 w-full">
            <div className="h-24 flex items-center">
                <h1 className="text-3xl font-inter font-medium">Dashboard</h1>
            </div>
            
            <h2 className="text-lg font-inter font-medium text-gray-700 mb-2">At a glance</h2>
            {/* Widget container */}
            <div className="flex flex-wrap gap-2">
                <Widget title="Clients online" value="10" className="border-green-500" icon={<FaComputer className="text-5xl" />} />
                <Widget title="Clients registered" value="15" className="border-gray-400" icon={<GrCloudComputer className="text-5xl" />} />
                <Widget title="Server status" value="OK" className="border-purple-600" icon={<HiStatusOnline className="text-5xl" />} />
            </div>

            <h2 className="text-lg font-inter font-medium text-gray-700 mt-5 mb-2">Recent activity</h2>
            <div className="w-full">
                <DataGrid sx={{fontFamily: "Inter"}} columns={columns} rows={rows}  />
            </div>

        </div>
    )
}

export default Dashboard