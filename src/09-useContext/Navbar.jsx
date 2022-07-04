import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        
        <div className="container flex flex-wrap justify-between items-center mx-auto">

            <Link className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" to="/">useContext</Link>

            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbarNav">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    
                    <NavLink 
                        className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
                        //{ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/">
                        Home
                    </NavLink>


                    <NavLink 
                        className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
                        //{ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/about">
                        About
                    </NavLink>

                    <NavLink 
                        className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
                        //{ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/Login">
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}
