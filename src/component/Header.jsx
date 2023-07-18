import React from 'react'
import './Header.css'
import logo from '../assets/White_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {

    const [{ basket, user }, dispach] = useStateValue();

    const handleAuthenticaton = () => {
        auth.signOut();
    }
    return (
        <div className='header'>
            <Link to="/">
                <img src={logo} className='header-logo' />
            </Link>

            <div className='header-search'>
                <input className='header-search-input' type='text' />
                <SearchIcon className='header-search-icon' />
            </div>

            <div className='header-nav'>
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthenticaton} className='header-option'>
                        <span className='header-option-lineone'>
                            Hello {!user ? 'Guest' : user.email}
                        </span>

                        <span className='header-option-linetwo'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>

                    </div>
                </Link>
                <Link to='/orders'>
                    <div className='header-option'>
                        <span className='header-option-lineone'>
                            Returns
                        </span>
                        <span className='header-option-linetwo'>
                            & Orders
                        </span> </div>
                </Link>
                <div className='header-option'>
                    <span className='header-option-lineone'>
                        Your Prime
                    </span>
                    <span className='header-option-linetwo'>
                        Sign In
                    </span>
                </div>
            </div>
            <Link to="/checkout">
                <div className='header-basket'>
                    <ShoppingBasketIcon />
                    <span className='header-option-linetwo header-option-backet-count'> {basket?.length} </span>
                </div>
            </Link>
        </div >
    )
}

export default Header
