import { TbCrystalBall } from 'react-icons/tb';
import { AiOutlineHome } from "react-icons/ai"
import navLinks from './navLinks';
import NavLink from './NavLink';
import './NavLink.css'

const Sidebar = () => {
    return (
        <div className="border-r border-r-slate-200 h-screen w-[300px] shadow-lg">
            <div className="h-24 flex items-center justify-center border-b border-b-slate-300 text-2xl gap-2 mb-4 group select-none cursor-pointer hover:text-white transition-colors hover:bg-blue-600">
                <div className="bg-blue-800 text-white rounded-md p-1">
                    <TbCrystalBall />
                </div>
                <span className='font-medium'>mantissa</span>
            </div>
            <nav className='ml-2 mr-2'>
                <ul>
                    {
                        navLinks.map(navLink => (
                            <>
                                <p key={JSON.stringify(navLink)} className='text-gray-600 font-medium mb-1 mt-2'>{navLink.category}</p>
                                {
                                    navLink.links.map(link => (
                                        <NavLink key={JSON.stringify(link)} icon={link.icon} title={link.title} to={link.url} />
                                    ))
                                }
                            </>
                            
                        ))
                    }
                </ul>
               
            </nav>
        </div>
    )
}

export default Sidebar