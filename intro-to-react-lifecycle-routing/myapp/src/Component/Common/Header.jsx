import './Header.css'

import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="header">
            <Link className='header-items' to="/">Home</Link>
            <Link className='header-items' to="/about-us">About us</Link>
            <Link className='header-items' to="/contact-us">Contact us</Link>
            <Link className='header-items' to="/login">Login</Link>
            <Link className='header-items' to="/sign-up">Signup</Link>
        </div>
    )
}