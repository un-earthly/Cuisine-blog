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
                <i className={open ? "bi bi-x text-3xl md:hidden" : "bi bi-list text-3xl md:hidden"} onClick={() => setOpen(!open)}></i>
                <Link to='/'><h1 className="text-3xl font-['Pacifico']">Cuisine Blog</h1></Link>
                <div className='flex justify-center items-center '>
                    <ul className={`md:flex items-center justify-center hidden`}>
                        <li>
                            <NavLink className='px-3 py-1 duration-500 hover:border-b hover:border-b-black mx-4' activeclassname='active' to='/blog'>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className='px-3 py-1 duration-500 hover:border-b hover:border-b-black mx-4' activeclassname='active' to='/shop'>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink className='px-3 py-1 duration-500 hover:border-b hover:border-b-black mx-4' activeclassname='active' to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink className='px-3 py-1 duration-500 hover:border-b hover:border-b-black mx-4' activeclassname='active' to='/contact'>Contact</NavLink>
                        </li>
                    </ul >
                    <ul>
                        <li className='flex justify-center items-center'>
                            <i className="bi bi-bag text-3xl"></i>
                            <NavLink className='md:px-3 py-1 duration-500 hover:border-b hover:border-b-black ' activeclassname='active' to='/cart'>Shopping bag ({cartQuantity})</NavLink>
                        </li>
                    </ul>
                </div>
            </nav >
        </header>
    )
}
