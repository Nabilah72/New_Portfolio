// ScrollSection.js
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import './scroll.css'; // Import your ScrollSection styles

const Scroll = ({ id, children }) => {
    const [sectionVisible, setSectionVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById(id);
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition && !sectionVisible) {
                setSectionVisible(true);
            } else if (sectionPosition > screenPosition && sectionVisible) {
                setSectionVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [id, sectionVisible]);

    return (
        <Link to={id} smooth={true} duration={500}>
            <section id={id} className={`scroll-section ${sectionVisible ? 'section-appear' : ''}`}>
                {children}
            </section>
        </Link>
    );
};

export default Scroll;
