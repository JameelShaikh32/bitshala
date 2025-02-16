import { hero_svg } from '../../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero c2flex" id='hero'>
            <div className="contents" data-aos="fade-up">
                <div className="hero-content">
                    <h1>Connect with the similar minds and achieve great heights</h1>
                    <p>
                        Meet people with diverse profile at bitshala community
                    </p>
                    <Link to="/signin" className="lightBtn" id='signupBtn'>Sign Up</Link>
                </div>
                <div className="hero-image">
                    <img src={hero_svg} alt="banner image" />
                </div>
            </div>
        </section>
    );
}

export default Hero;