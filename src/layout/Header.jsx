import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from '../provider/Provider'
import Swal from 'sweetalert2';

const Header = () => {

    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("log out successfully")
                Swal.fire(
                    'confrim!',
                    'logged out successfully',
                    'success'
                )
            })
            .catch((err) => console.log(err.message))
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {
            user && <li><NavLink to="/profile">Profile</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <h1 className='bg-green-600 shadow-sm font-bold flex items-center justify-center p-2  text-gray-800 h-8 w-8  rounded-full '>
                    <Link className="  normal-case">
                        {
                            user ? user?.email.slice(0, 1) : <h1>P</h1>
                        }
                    </Link>
                </h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navItems}

                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <Link to="/login" onClick={handleLogOut} className="btn capitalize">Log out</Link> : <Link to="/login" className="btn capitalize">Log in</Link>
                }


            </div>
        </div>
    )
}

export default Header