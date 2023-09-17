import { ReactElement } from "react"

interface Props {
    icon: ReactElement,
    title: string,
    to?: string,
}

const NavLink = ({ icon, title, to }: Props) => {
    return (
        <li title={to} className='nav-link nav-deselected'>
            { icon }
            <p>{title}</p>
        </li>
    )
}

export default NavLink