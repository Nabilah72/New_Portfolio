import React, { useEffect, useState } from "react";
import "./navbar.css";
import navbar from "../../img/nav_bar.png"

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const [activeLink, setActiveLink] = useState("intro"); // Set the initial active link

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsActive(!isActive);
    };

    useEffect(() => {
        const mainNav = document.getElementById("js-menu");
        const navBarToggle = document.getElementById("js-navbar-toggle");

        const handleToggleClick = () => {
            mainNav.classList.toggle("active");
            setIsActive(!isActive);
        };

        navBarToggle.addEventListener("click", handleToggleClick);

        return () => {
            // Cleanup event listener on component unmount
            navBarToggle.removeEventListener("click", handleToggleClick);
        };
    }, [isActive]);

    return (
        <section id="main">
            <nav className={`navbar ${isActive ? "active" : ""}`}>
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <img className="navbar-icon" src={navbar} width="20px" alt="" />
                </span>

                <a href="#main" className="logo">Me, Myself & I</a>
                <ul className="main-nav" id="js-menu">
                    <li>
                        <a href="#intro" className={`nav-links ${activeLink === "intro" ? "active-link" : ""}`} onClick={() => handleLinkClick("intro")} >
                        <i className='bx bx-home-alt-2'></i> Home
                        </a>
                    </li>
                    <li>
                        <a href="#profile" className={`nav-links ${activeLink === "profile" ? "active-link" : ""}`} onClick={() => handleLinkClick("profile")}>
                        <i className='bx bxs-user'></i> Profile
                        </a>
                    </li>
                    <li>
                        <a href="#work" className={`nav-links ${activeLink === "work" ? "active-link" : ""}`} onClick={() => handleLinkClick("work")}>
                        <i className='bx bx-briefcase'></i> Work
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className={`nav-links ${activeLink === "contact" ? "active-link" : ""}`} onClick={() => handleLinkClick("contact")}>
                        <i className='bx bx-phone'></i> Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
