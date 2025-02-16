import { Link } from "react-router-dom";
import { events } from '../constants/index';

import "../css/events.css";

const EventsApp = () => {
    return (
        <div className="event-container">
            {/* Hero Section */}
            <div className="event-hero-container">
                <div className="events-hero">
                    <div className="eve-hero-content">
                        <h1>Make The Most Of Your Time</h1>
                        <p>Discover new skills, hobbies, and passions with our diverse and interactive events.</p>
                    </div>
                    <div className="event-hero-btn">
                        <Link to="#" className="lightBtn" id='exploreBtn'>Explore</Link>
                    </div>
                </div>
            </div>

            {/* Search Box */}
            <div className="search-container">
                <div className="search-box">
                    <div className="search-form">
                        <div className="input-group">
                            <label htmlFor="looking-for">Looking For</label>
                            <input type="text" name="looking-for" id="lookingFor" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="city">In</label>
                            <select name="city" id="city">
                                <option value="delhi">Delhi</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="chennai">Chennai</option>
                                <option value="kolkata">Kolkata</option>
                                <option value="hyderabad">Hyderabad</option>
                                <option value="pune">Pune</option>
                                <option value="jaipur">Jaipur</option>
                                <option value="ahmedabad">Ahmedabad</option>
                                <option value="surat">Surat</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="date">When</label>
                            <input type="date" name="date" id="whenDate" />
                        </div>
                    </div>
                    <div className="search-btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="up-coming-container">
                <div className="up-coming-head">
                    <h3>Upcoming Events</h3>
                </div>
                <div className="up-coming-eve">
                    <div className="events-list">
                        {events.filter(event => event.status === 'Active').map((event) => (
                            <div key={event.title} className="event">
                                <div className="event-btns">
                                    <div className="cost-btn">
                                        <p>{event.cost}</p>
                                    </div>
                                    <div className="share-btn">
                                        <i className="fa-solid fa-share"></i>
                                    </div>
                                </div>
                                <img src={event.image} alt="" />
                                <div className="event-content">
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                </div>
                                <div className="event-schedule">
                                    <div className="date">
                                        <p>{event.date}</p>
                                    </div>
                                    <div className="time">
                                        <p>{event.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsApp;