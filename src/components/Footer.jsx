import { Link } from "react-router-dom";
import "../css/footer.css"
import { bitlogo } from '../assets';

const Footer = () => {
    let year = document.getElementById("year");

    let date = new Date();

    year = date.getFullYear();
    return (
        <footer>
            <div className="footer-row">
                <div className="column f-info">
                    <div id="logo">
                        <Link to="/">
                            <img src={bitlogo} alt="company logo" />
                        </Link>
                    </div>
                    <div className="copyright-row">
                        <div id="copyright">
                            <p>
                                Copyright &copy; {year} <Link to={'/'}>BitShala</Link><br />All rights reserved.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="column">
                    <h3>Company</h3>
                    <ul className="company-links">
                        <li>
                            <Link to="#">About Us</Link>
                        </li>
                        <li>
                            <Link to="#">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="#">Terms &amp; Conditions</Link>
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Quick Links</h3>
                    <ul className="footer-menu">
                        <li>
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#hireTalent">Hire Talent</a>
                        </li>
                        <li>
                            <a href="#findWork">Find Work</a>
                        </li>
                        <li>
                            <a href="#community">Community</a>
                        </li>
                        <li>
                            <a href="#event">Events</a>
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Connect with us</h3>
                    <div id="social-icons">
                        <span>
                            <i className="fa-brands fa-youtube"></i>
                        </span>
                        <span>
                            <i className="fa-brands fa-instagram"></i>
                        </span>
                        <span>
                            <i className="fa-brands fa-linkedin"></i>
                        </span>
                        <span>
                            <i className="fa-brands fa-x-twitter"></i>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;