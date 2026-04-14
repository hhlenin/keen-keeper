import React from 'react';
import {House, Clock3, ChartLine} from 'lucide-react'
import logoImg from './../../assets/logo.png';
import {NavLink} from "react-router/internal/react-server-client";

const Navbar = () => {
    return (
        <nav className=''>
        <div className=" bg-base-100 shadow-sm">
            <div className={'px-20 navbar mx-auto'}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to={'/'} className={({isActive}) => isActive ? 'btn bg-[#244D3F] text-white' : 'btn  text-[#64748B]'}><House size={16} strokeWidth={2} />Home</NavLink></li>
                            <li><NavLink to={'/timeline'} className={({isActive}) => isActive ? 'btn bg-[#244D3F] text-white' : 'btn  text-[#64748B]'}><Clock3 size={16} strokeWidth={2} />Timeline</NavLink></li>
                            <li><NavLink to={'/stats'} className={({isActive}) => isActive ? 'btn bg-[#244D3F] text-white' : 'btn  text-[#64748B]'}><ChartLine size={16} strokeWidth={2} />Stats</NavLink></li>

                        </ul>
                    </div>
                    <NavLink to={'/'}>
                        <img className="text-xl" src={logoImg} alt="" />
                    </NavLink>
                </div>
                <div className="invisible lg:visible navbar-end gap-1">
                    <NavLink to={'/'} className={({isActive}) => isActive ? 'btn bg-[#244D3F] text-white' : 'btn  text-[#64748B]'}><House size={16} strokeWidth={2} />Home</NavLink>
                    <NavLink to={'/timeline'} className={({isActive}) => isActive ? 'btn bg-[#244D3F] text-white' : 'btn  text-[#64748B]'}><Clock3 size={16} strokeWidth={2} />Timeline</NavLink>
                    <NavLink to={'/stats'} className={({isActive}) => isActive ? 'btn bg-[#244D3F] text-white' : 'btn  text-[#64748B]'}><ChartLine size={16} strokeWidth={2} />Stats</NavLink>
                </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;