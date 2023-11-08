import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const sidebar = document.querySelector(".sidebar_menu");
        const closeBtn = document.querySelector("#Button");
        const menuItems = document.querySelectorAll(".Nav_Item li a");
        const mainContent = document.querySelector("#main"); // Add this line

        closeBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
            menuBtnChange();

            // Add logic to adjust main content margin
            if (sidebar.classList.contains("open")) {
                mainContent.style.marginLeft = "0";
            } else {
                mainContent.style.marginLeft = "260px";
            }
        });

        menuItems.forEach((menuItem) => {
            menuItem.addEventListener("click", (e) => {
                e.preventDefault();

                const targetId = menuItem.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                targetSection.scrollIntoView({
                    behavior: "smooth",
                });

                sidebar.classList.remove("open");
                menuBtnChange();

                menuItems.forEach((item) => {
                    item.style.backgroundColor = "";
                });
                menuItem.style.backgroundColor = "#ff00aa";
            });
        });

        function menuBtnChange() {
            if (sidebar.classList.contains("open")) {
                closeBtn.classList.replace("bx-menu", "bxs-x-circle");
            } else {
                closeBtn.classList.replace("bxs-x-circle", "bx-menu");
            }
        }
    }, []);
    return (
        <section id="main">
            <div className={`container ${isSidebarOpen ? "sidebar-open" : ""}`}>
                <div className={`sidebar_menu ${isSidebarOpen ? "open" : ""}`}>
                    <div className="Logo">
                        <i className="bx bxl-slack icon"></i>
                        <div className="Text_Logo">Me, Myself & I</div>
                        <i className={`bx ${isSidebarOpen ? "bxs-x-circle" : "bx-menu"}`} id="Button" onClick={toggleSidebar}></i>
                    </div>
                    <ul className="Nav_Item">
                        <li>
                            <i className="bx bx-search"></i>
                            <input type="text" placeholder="  Search...." />
                            <span className="Menu_btn">Search</span>
                        </li>
                        <li>
                            <a href="#main" onClick={scrollToTop}>
                                <i className="bx bxs-home"></i>
                                <span className="Item_Name">Home</span>
                            </a>
                            <span className="Menu_btn">Home</span>
                        </li>
                        <li>
                            <a href="#profile">
                                <i className="bx bxs-user"></i>
                                <span className="Item_Name">Profile</span>
                            </a>
                            <span className="Menu_btn">Profile</span>
                        </li>
                        <li>
                            <a href="#work">
                                <i className="bx bxs-briefcase-alt-2"></i>
                                <span className="Item_Name">Work</span>
                            </a>
                            <span className="Menu_btn">Work</span>
                        </li>
                        <li>
                            <a href="#phone">
                                <i className="bx bxs-phone"></i>
                                <span className="Item_Name">Contact</span>
                            </a>
                            <span className="Menu_btn">Contact</span>
                        </li>
                    </ul>
                </div >
            </div>
        </section>
    );
};

export default Navbar;
