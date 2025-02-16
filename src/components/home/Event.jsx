import { Link } from 'react-router-dom';
import { events } from '../../constants/index';

const Event = () => {
    return (
        <section className="events" id='event'>
            <div className="event-head">
                <h3>Events</h3>
                <Link className="darkBtn" to={'https://app.bitshala.in'}>More</Link>
            </div>
            <div className="events-list">
                {events.filter(event => event.status === 'Active').map((event) => (
                    <div key={event.title} className="event" data-aos="fade-up">
                        <img src={event.image} alt="" />
                        <div className="event-content">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <Link to={'/coming-soon'} className="eventBtn">
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Event;