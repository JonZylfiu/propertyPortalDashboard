import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


// main
// soft
// mid
// dark
// accent

const Navbar = () => {
    const [ open, setOpen ] = useState(true);
    let location = useLocation();
    let pathname = location.pathname;
  
  
    return (
    <>    
        <nav className={`${open ? "w-80" : "w-24"} transition-all ease-linear duration-200 bg-soft pl-6 py-6 h-screen relative`}>
            <div className='flex items-center mb-8 gap-8'>
                {open
                ?
                <>
                    <h3 className='text-2xl'>PropertyPortal</h3>
                    <Icon onClick={() => setOpen(!open)} icon="mdi:arrow-left" width={40} className='cursor-pointer'/>
                </>
                :
                <Icon onClick={() => setOpen(!open)} icon="mdi:arrow-right" width={40} className='cursor-pointer'/>
                }
            </div>

            {
                open &&
                <div className='flex flex-col gap-5'>
                    <Link to="/" className={`flex items-center gap-2 h-16 p-4 ${pathname == "/" ? "bg-main rounded-lg" : ""}`}>
                        <Icon icon="mdi:view-dashboard" width="24"/>
                        <h5 className='text-lg'>Dashboard</h5>
                    </Link>
                    <Link to="/my-properties" className={`flex items-center gap-2 h-16 p-4 ${pathname == "/my-properties" ? "bg-main rounded-lg" : ""}`}>
                        <Icon icon="mdi:home-city" width="24"/>
                        <h5 className='text-lg'>My Properties</h5>
                    </Link>
                </div>
            }
        

            <div className="absolute bottom-4 flex gap-2 cursor-pointer">
                <Icon icon="mdi:logout" width={28}/>
                <h4 className={`${open ? "block" : "hidden"} font-semibold text-lg`}>Log Out</h4>
            </div>
        </nav>
    </>
)}

export default Navbar