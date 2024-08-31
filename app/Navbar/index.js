"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [color, setColor] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 60) {
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

    return (
        <div className={`fixed w-[88%] z-20 transaction-ease-in-out duration-300 ${color ? 'header_bg shadow-md ' : 'flex items-center pt-4 justify-between h-[60px] mx-[90px] fixed w-[100%] z-20'}`}>
            {
                (color ? (
                    <Image
                        src="/assets/images/asset 1.png"
                        width={150}
                        height={70}
                        alt='logo'
                    />
                )
                    :
                    (<div className="nav">
                        <Image
                            src="/assets/images/asset 2.png"
                            width={150}
                            height={70}
                            alt='logo'
                        />
                    </div>)
                )



            }


            <nav className='flex items-center gap-10'>
                <ul className='flex gap-10 items-center mb-0 '>
                    <Link href="/" className={`list ${color ? 'text-black' : 'text-white'}`}>Home</Link>
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
                    <MenuIcon className={`${color ? 'text-black' : 'text-white'}`} />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
