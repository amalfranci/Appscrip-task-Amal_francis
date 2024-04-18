"use client"
import React, { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import '../components/Navbar.css';

const CustomNavbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3>LOGO</h3>

            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My work</a>
                <a href="/#">Blog</a>
                <a href="/#">About me</a>
            </nav>

            <div className="icons">
                <span onClick={showNavbar}>
                    <FaBars />
                </span>
                <span onClick={showNavbar}>
                    <FaTimes />
                </span>
                <button>Log In</button>
            </div>
        </header>
    );
}

export default CustomNavbar;
