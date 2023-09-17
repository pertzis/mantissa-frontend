import { ReactElement } from "react"
import { AiOutlineHome } from "react-icons/ai"
import { AiFillHome } from "react-icons/ai"
import { RiComputerLine, RiComputerFill } from "react-icons/ri" 
interface NavLink {
    category: string,
    links: {
        icon: ReactElement,
        selectedIcon: ReactElement,
        title: string,
        url: string,
    }[]
}

const navLinks: NavLink[] = [
    {
        category: "General",
        links: [
            {
                icon: <AiOutlineHome />,
                selectedIcon: <AiFillHome />,
                title: "Dashboard",
                url: "/"
            },
            {
                icon: <RiComputerLine />,
                selectedIcon: <RiComputerFill />,
                title: "Clients",
                url: "/clients"
            }
        ]
    }
]

export default navLinks