import { ReactElement } from "react"
import { NavLink as RouterNavLink } from "react-router-dom"
interface Props {
    icon: ReactElement,
    title: string,
    to: string,
}

const NavLink = ({ icon, title, to }: Props) => {
    return (
        <RouterNavLink to={to} className={ ({ isActive }) => isActive ? 'nav-link nav-selected' : 'nav-link nav-deselected'}>
            { icon }
            <p>{title}</p>
        </RouterNavLink>
    )
}

export default NavLink