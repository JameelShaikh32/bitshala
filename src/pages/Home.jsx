/* eslint-disable react/no-unknown-property */
import "../css/home.css";

//Components
import Footer from "../components/Footer";
import { Hero, Event, Community, FindWork, HireTalent, ContactUs } from '../components/home/home_components.js';
import ScrollToTop from "../components/ScrollToTop.jsx";

const Home = () => {
    return (
        <div id='home'>
            {/* Hero Section */}
            <Hero />
            {/* Events Section */}
            <Event />
            {/* Community Section */}
            <Community />
            {/* Find Works Section */}
            <FindWork />
            {/* Hire Talent Section */}
            <HireTalent />
            {/* Contact Section */}
            <ContactUs />
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default Home;