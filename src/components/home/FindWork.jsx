import { Link, useNavigate } from "react-router-dom";
import { works } from '../../constants/index';

const FindWork = () => {
    const navigate = new useNavigate();

    const redirectToComingSoon = () => {
        navigate('/coming-soon');
    };

    return (
        <section className="find-works" id='findWork'>
            <div className="works-head">
                <h3>Find <abbr>Works</abbr></h3>
                <Link to={'/coming-soon'} className="darkBtn">More</Link>
            </div>
            <div className="works-list">
                {works.map((work) => (
                    <div key={work.title} className="work" onClick={redirectToComingSoon} data-aos="fade-up">
                        <div className="work-contents">
                            <i className={work.iconClass}></i>
                            <div className="work-content">
                                <h3>{work.title}</h3>
                                <p>{work.location}</p>
                                <p>{work.description}</p>
                                {/* <Link to="" className="learn-more">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}

export default FindWork;