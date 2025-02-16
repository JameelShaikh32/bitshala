import { Link } from "react-router-dom";
import { communitySvg } from '../../assets';

const Community = () => {
    return (
        <section className="community" id='community'>
            <div className="content-container">
                <div className="content">
                    <h2>Our Community</h2>
                    <p>
                        At bitshala we conduct events, competitions and many more
                    </p>
                    <Link to={'/coming-soon'} className="lightBtn comBtn">Join Our Community</Link>
                </div>
                <div className="image">
                    <img src={communitySvg} alt="conference_img" data-aos="fade-left" />
                </div>
            </div>
        </section>
    );
}

export default Community;