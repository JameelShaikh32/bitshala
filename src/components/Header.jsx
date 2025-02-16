import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/index';
import { bitlogo } from '../assets';
import "../css/header.css";

const Header = () => {
    const [active, setActive] = useState("");
    // const [toggle, setToggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const menuToggle = useRef(null);

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function toggleMenu() {
        menuToggle.current.classList.toggle('menu-active');
    }

    return (
        <div className={`header ${isSticky ? 'sticky' : ''}`}>
            <div className="logo">
                <img src={bitlogo} alt="Compnay Logo" onClick={() => { window.location.href = '/'; }} />
            </div>
            <div className="navbar" ref={menuToggle}>
                <nav>
                    <ul className="nav">
                        {navLinks.map((nav) => (
                            <a href={`${nav.url}`} key={nav.url}>
                                <li
                                    className={`${active === nav.title ? "navlinkActive" : "navlink"
                                        }`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`${nav.url}`} className='link'>{nav.title}</a>
                                </li>
                            </a>
                        ))}
                    </ul>
                </nav>
                <Link to="/signin" className='lightBtn' onClick={toggleMenu}>Sign In</Link>
            </div>
            <i className="fa-solid fa-bars" id='menu-toggle' onClick={toggleMenu}></i>
        </div>
    );
}

export default Header;