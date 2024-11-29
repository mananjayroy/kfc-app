import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/KFC_Logo.svg";
import { ReactComponent as AccountIcon } from "../../assets/Account_Icon.svg";
import { ReactComponent as CartIcon } from "../../assets/bucket_cart_icon2.svg";
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <ul>
                    <li>
                        <Link to="/"><Logo className="navbar-logo" /></Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/offers">Deals</Link>
                    </li>
                </ul>
            </div>
            <div className='navbar-right'>
                <ul>
                    <li>
                        <Link to="/sign-in"><AccountIcon className="account-icon" />Sign-in</Link>
                    </li>
                    <li>
                        <Link to="/cart">₹0.00<CartIcon className="cart-icon" /></Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;
