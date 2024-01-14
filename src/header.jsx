import React from "react"
import "./css/Header.css"



function Header(){
    return(
        <div className="head-cont">

        <header className="header-el">
            <div className="logo-cont">
                <img src="src\assets\Vector.svg" alt="logo" />
                <span>
                    <a className="a" href="">Travlog</a>
                    </span>
            </div>
            <ul className="header-links">
                <li>Home</li>
                <li>Discover</li>
                <li>Special Deals</li>
                <li>Contact</li>
            </ul>
            <div className="login-cont">
                <button className="login-btn">
                <a href="">Log in</a>
                </button>
                <button className="register-btn">
                Sing Up
                </button>
            </div>
        </header>
        </div>
    )
}

export default Header