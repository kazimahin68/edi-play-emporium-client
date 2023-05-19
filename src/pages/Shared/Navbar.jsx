import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () =>{
        setDropdownVisible(!dropdownVisible)
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-toys'>All Toys</Link></li>
        <li><Link to='/my-toys'>My Toys</Link></li>
        <li><Link to='/add-toy'>Add a Toy</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 md:w-4/5 mx-auto rounded-lg px-5">
            <div className="navbar-start justify-between lg:justify-normal">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {dropdownVisible && <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>}
                </div>
                <Link to='/'><img src={logo} className="w-16 h-16 " alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn font-bold bg-[#7c9c05] border-none hover:bg-[#a5c926]">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;