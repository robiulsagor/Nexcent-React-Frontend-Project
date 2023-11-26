import React, { useEffect, useState } from 'react'
import icon from "../assets/icon.png"
import { Link } from 'react-scroll'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    // set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // set or unset sticky menu
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.addEventListener("scroll", handleScroll)
        }
    })

    // nav items array
    const navItems = [
        { title: "Home", path: "home" },
        { title: "About", path: "about" },
        { title: "Services", path: "services" },
        { title: "Troduct", path: "product" },
        { title: "Testimonial", path: "testimonial" },
        { title: "FAQ", path: "faq" }
    ]

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 px-4  lg:px-14 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex gap-8 items-center justify-between text-base'>
                    <a href="#" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={icon} alt="" className='w-10 inline-block items-center' />
                        <span className='text-brandSecondary'>Nexcent</span>
                    </a>

                    {/* nav items for large devices */}
                    <ul className='hidden md:flex space-x-12'>
                        {
                            navItems.map(({ title, path }) => {
                                return <Link to={path} spy={true} smooth={true} key={path} className='block text-neutraDlGray text-base hover:text-brandPrimary first:font-medium transition-all'>{title} </Link>
                            })
                        }
                    </ul>

                    {/* btns for large devices */}
                    <div className='hidden lg:flex space-x-12 items-center '>
                        <a href="#" className='text-brandPrimary hover:text-neutralGray'>Login</a>
                        <button className='bg-brandPrimary hover:bg-neutralDGray text-white px-4 py-2 transition-all duration-300 rounded'>Sign Up</button>
                    </div>

                    {/* menu btn for mobile devices only */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralDGray focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
                        </button>
                    </div>
                </div>

                {/* nav items for mobile devices */}
                <div className={`${isMenuOpen ? "block fixed top-0 left-0 right-0 h-auto px-5 py-7" : "h-0"} space-y-4 bg-brandPrimary mt-16`}
                >
                    {
                        navItems.map(({ title, path }) => {
                            return <Link to={path} spy={true} smooth={true} key={path} className='block text-white  text-base  first:font-medium transition-all'>{title} </Link>
                        })
                    }
                </div>
            </nav>
        </header >
    )
}

export default Navbar