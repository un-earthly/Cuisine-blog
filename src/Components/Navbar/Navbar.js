import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ cartQuantity }) {
    const [nav, setNav] = useState(false)
    const [open, setOpen] = useState(false)
    window.addEventListener('scroll', () => {
        window.scrollY >= 20 ? setNav(true) : setNav(false)
    })
    return (
        <header className='sticky top-0'>
            <nav className={nav ? 'shadow-lg flex justify-between px-2 bg-[#ffffff9c] backdrop-blur-sm items-center md:px-20 py-8 duration-300 relative' : 'relative flex px-2 justify-between items-center md:px-20 py-8'}>
                <i className={open ? "bi bi-x text-3xl duration-500 md:hidden" : "bi bi-list duration-500 text-3xl md:hidden"} onClick={() => setOpen(!open)}></i>
                <Link to='/'><h1 className="md:text-3xl text-lg font-['Pacifico']">Cuisine Blog</h1></Link>
                <div className='flex justify-center items-center '>
                    <ul className={`md:flex items-center justify-center md:static ${open ? 'absolute top-[6.2rem] text-right  bg-[#ffffff9c] backdrop-blur-sm w-full right-0 z-10' : 'backdrop-blur-none hidden bg-transparent'}`}>
                        <li className='my-8 md:my-2'>
                            <NavLink className='px-3 py-1 duration-500 hover:border-b hover:border-b-black mx-4 text-sm' activeclassname='active' to='/blog'>Blog</NavLink>
                        </li>
                        <li className='my-8 md:my-2'>
                            <NavLink className='px-3 py-1 duration-500 hover:border-b hover:border-b-black mx-4 text-sm' activeclassname='active' to='/shop'>Shop</NavLink>
                        </li>
                        <li className='my-8 md:my-2'>
                            <NavLink className='px-3 py-1 duration-500 hover:border-b hover:border-b-black mx-4 text-sm' activeclassname='active' to='/about'>About</NavLink>
                        </li>
                        <li className='my-8 md:my-2'>
                            <NavLink className='px-3 py-1 duration-500 hover:border-b hover:border-b-black mx-4 text-sm' activeclassname='active' to='/contact'>Contact</NavLink>
                        </li>
                    </ul >
                    <ul>
                        <li className='flex justify-center items-center'>
                            <i className="bi bi-bag md:text-3xl"></i>
                            <NavLink className='md:px-3 py-1 duration-500 hover:border-b hover:border-b-black text-sm ' activeclassname='active' to='/cart'>Shopping bag ({cartQuantity})</NavLink>
                        </li>
                    </ul>
                </div>
            </nav >
        </header>
    )
}
