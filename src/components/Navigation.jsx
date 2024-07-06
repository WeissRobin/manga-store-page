import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from '../assets/nihon-logo.webp';

function Navigation() {

    const [toggle, isToggled] = useState(true);

    const handleToggle = () => {
        isToggled(!toggle);
    }

    return (
        <nav className='border-b border-black fixed z-50 w-full bg-white'>
            <div className='flex px-2 items-center justify-between'>
                <img src={Logo} alt='Nihon Logo' className='h-auto w-[200px] xl:w-[350px]'/>
                <div className='flex'>
                    <div className='hidden md:flex font-poppins gap-10 font-bold mr-10 items-center'>
                        <Link className='relative group p-1'>
                            <p className='relative z-10 group-hover:text-white'>Manga</p>
                            <span className='absolute z-0 bottom-0 left-0 w-full h-0.5 bg-black transition-all group-hover:h-full'></span>
                        </Link>
                        <Link className='relative group p-1'>
                            <p className='relative z-10 group-hover:text-white'>Light Novels</p>
                            <span className='absolute z-0 bottom-0 left-0 w-full h-0.5 bg-black transition-all group-hover:h-full'></span>
                        </Link>
                        <Link className='relative group p-1'>
                            <p className='relative z-10 group-hover:text-white'>Books</p>
                            <span className='absolute z-0 bottom-0 left-0 w-full h-0.5 bg-black transition-all group-hover:h-full'></span>
                        </Link>
                        <Link className='relative group p-1'>
                            <p className='relative z-10 group-hover:text-white'>About</p>
                            <span className='absolute z-0 bottom-0 left-0 w-full h-0.5 bg-black transition-all group-hover:h-full'></span>
                        </Link>
                    </div>
                    <div className='icons flex gap-2 mr-3 xl:gap-4 items-center'>
                    <div className='bag cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 xl:size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </div>
                    <div className='menu cursor-pointer' onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 xl:size-7">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='search cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 xl:size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
                </div>
            </div>
            <div className={`fixed z-10 left-0 w-full h-full bg-white transition-all duration-300 ${toggle ? 'top-1/4 opacity-0 pointer-events-none' : 'top-0 opacity-1 z-30'}`}>
                <div className='border-b border-black mb-3 cursor-pointer' onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14 xl:size-16 m-auto py-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='flex flex-col w-full h-full pl-5 font-poppins font-semibold text-4xl xl:text-6xl'>
                    <Link>Manga</Link>
                    <Link>Light Novels</Link>
                    <Link>Information</Link>
                    <Link className='mb-10'>About</Link>
                    <Link className='text-3xl xl:text-4xl'>My account</Link>
                    <Link className='text-3xl xl:text-4xl mb-1'>Cart</Link>
                    <div className='flex flex-col pt-10 text-sm xl:text-lg'>
                        <a href="">Twitter↗</a>
                        <a href="">Instagram↗</a>
                        <a href="">Facebook↗</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;