import { event1, event2, event3 } from "../assets";

const navLinks = [
    {
        url: "#event",
        title: "Event"
    },
    {
        url: "#community",
        title: "Community"
    },
    {
        url: "#findWork",
        title: "Find Work"
    },
    {
        url: "#hireTalent",
        title: "Hire Talent"
    },
    {
        url: "#contact",
        title: "Contact Us"
    },
];

const events = [
    {
        status: "Active",
        title: "Event1",
        image: event1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non eum deleniti.",
        date: "05/06/2020",
        time: "9:48 AM",
        cost: "Free",
        link: "https://www.google.com"
    },
    {
        status: "Active",
        title: "Event2",
        image: event2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non eum deleniti.",
        date: "05/06/2020",
        time: "9:48 AM",
        cost: "Free",
        link: "https://www.google.com"
    },
    {
        status: "Active",
        title: "Event3",
        image: event3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non eum deleniti.",
        date: "05/06/2020",
        time: "9:48 AM",
        cost: "Free",
        link: "https://www.google.com"
    },
    {
        status: "In-active",
        title: "Event4",
        image: event1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non eum deleniti.",
        date: "05/06/2020",
        time: "9:48 AM",
        cost: "Free",
        link: "https://www.google.com"
    },
    {
        status: "In-active",
        title: "Event5",
        image: event2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non eum deleniti.",
        date: "05/06/2020",
        time: "9:48 AM",
        cost: "Free",
        link: "https://www.google.com"
    },
    {
        status: "In-active",
        title: "Event6",
        image: event3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non eum deleniti.",
        date: "05/06/2020",
        time: "9:48 AM",
        cost: "Free",
        link: "https://www.google.com"
    },
];

const works = [
    {
        title: "FrontEnd Developer",
        location: "Mumbai",
        description: "WFH | 3 LPA",
        iconClass: `fa-solid fa-code`
    },
    {
        title: "WordPress Designer",
        location: "Bangalore",
        description: "WFO | 5 LPA",
        iconClass: `fa-brands fa-wordpress`
    },
    {
        title: "UI/UX Designer",
        location: "Chennai",
        description: "WFH | 2 LPA",
        iconClass: `fa-brands fa-figma`
    },
    {
        title: "PHP Developer",
        location: "Mumbai",
        description: "WFO | 6 LPA",
        iconClass: `fa-brands fa-php`
    }
];

export { navLinks, events, works };