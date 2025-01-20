"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [color, setColor] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

    const handleScroll = () => {
        if (window.scrollY >= 20) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className={`fixed w-[88%] z-40 transaction-ease-in-out duration-300 ${color ? 'header_bg shadow-md' : 'flex items-center pt-4 justify-between mx-[90px] fixed w-[100%] z-20'}`}>
                {
                    color ? (
                        <Image
                            src="/assets/images/asset 1.png"
                            width={150}
                            height={70}
                            alt='logo'
                        />
                    ) : (
                        <div className="nav">
                            <Image
                                src="/assets/images/asset 2.png"
                                width={150}
                                height={70}
                                alt='logo'
                            />
                        </div>
                    )
                }

                <nav className='hidden md:flex items-center md:gap-5 lg:gap-10'>
                    <ul className='flex md:gap-5 lg:gap-10 items-center mb-0'>
                        <Link href="/" className={`list ${color ? 'text-black' : 'text-white'} group relative`}>
                            Home
                            <ul className="bg-white text-black hidden group-hover:block absolute left-0 mt-2 w-40">
                                <li>hello</li>
                                <li>hello</li>
                                <li>hello</li>
                            </ul>
                        </Link>

                        <Link href="/Page" className={`list ${color ? 'text-black' : 'text-white'}`}>page</Link>
                        <Link href="/Portfolio" className={`list ${color ? 'text-black' : 'text-white'}`}>Portfolio</Link>
                        <Link href="/Blog" className={`list ${color ? 'text-black' : 'text-white'}`}>Blog</Link>
                        <Link href="/Element" className={`list ${color ? 'text-black' : 'text-white'}`}>Element</Link>
                        <Link href="/Shop" className={`list ${color ? 'text-black' : 'text-white'}`}>Shop</Link>
                    </ul>
                    <div className="icons flex gap-2">
                        <h6 className={`${color ? 'text-black' : 'text-white'}`}>|</h6>
                        <ShoppingCartIcon className={`${color ? 'text-black' : 'text-white'}`} />
                        <SearchIcon className={`${color ? 'text-black' : 'text-white'}`} />
                    </div>
                </nav>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <MenuIcon className={`${color ? 'text-black' : 'text-white mx-[90px]'}`} onClick={toggleSidebar} />
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed w-[100%] h-[100vh] z-50   transition-all duration-1000 ease-in-out ${sidebarOpen ? 'translate-x-0 ' : 'translate-x-[100%]'}`}>
                <div className='w-full sm:w-[60%] bg-white h-[100vh] fixed right-0'>
                    <div className="flex justify-end  p-4">
                        <button onClick={toggleSidebar} className="text-2xl ">X</button>
                    </div>

                    <nav className="flex flex-col items-center justify-center text-white mt-10 border ">
                        <Link href="/" className="border w-full text-black no-underline py-3 pl-10" onClick={toggleSidebar}>Home</Link>
                        <Link href="/Page" className="border w-full text-black no-underline py-3  pl-10" onClick={toggleSidebar}>Page</Link>
                        <Link href="/Portfolio" className="border w-full text-black no-underline py-3 pl-10" onClick={toggleSidebar}>Portfolio</Link>
                        <Link href="/Blog" className="border w-full text-black no-underline py-3 pl-10" onClick={toggleSidebar}>Blog</Link>
                        <Link href="/Element" className="border w-full text-black no-underline py-3 pl-10" onClick={toggleSidebar}>Element</Link>
                        <Link href="/Shop" className="border w-full text-black no-underline py-3 pl-10" onClick={toggleSidebar}>Shop</Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
