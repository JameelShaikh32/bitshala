import { Link } from "react-router-dom";
import { hireSvg } from '../../assets';

const HireTalent = () => {
    return (
        <section className="hire-talent" id='hireTalent'>
            <div className="content-container">
                <div className="image">
                    <img src={hireSvg} alt="conference_img" data-aos="fade-right" />
                </div>
                <div className="content">
                    <h4>Hire <abbr>Talent</abbr></h4>
                    <h2> Get the best talent in market.</h2>
                    <p>
                        Search Candidates with a wide range of filters and proper validations.
                    </p>
                    <Link to={'/coming-soon'} className="lightBtn comBtn">Hire Talent</Link>
                </div>
            </div>
        </section>
    );
}

export default HireTalent;