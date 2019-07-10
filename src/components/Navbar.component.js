import React from 'react'
import './Navbar.styles.scss'
import { ReactComponent as SearchIcon } from '../images/search.svg'

const Navbar = () => (
    <div className="navbar">
        <h1 className="title">Foodima</h1>
        <ul className="navbar-links">
            <li className="navbar-item">Shop</li>
            <li className="navbar-item">Features</li>
            <li className="navbar-item"><strong>Recipes</strong></li>
            <li className="navbar-item">Hotline</li>
            <li className="navbar-item search">
                <input type="text" className="searchInput" />
                <SearchIcon onClick={(e) => {e.target.parentNode.classList.toggle('open')}} />
            </li>
        </ul>
        <div className="navbar-userSection">
            <div className="navbar-userSection-notification">0</div>
            <button className="login">Log In</button>
            <button className="signUp">Sign Up</button>
        </div>
    </div>
)

export default Navbar