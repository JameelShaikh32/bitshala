import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import validator from 'validator';
import '../css/comingSoon.css';


const ComingSoon = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        email: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email) {
            toast.info("Please fill all the required fields!");
        } else {
            if (!validator.isEmail(form.email)) {
                return toast.error('Please enter valid email!.')
            }
            setLoading(true);
            emailjs
                .send(
                    'bitshala_emailer',
                    'template_subscribtion',
                    {
                        to_name: "BitShala",
                        from_email: form.email,
                        to_email: "info.bitshala@gmail.com",
                        message: 'Subscribed for Updated and Anouncements.',
                    },
                    'NHHlo5wwARLSPcekP'
                )
                .then(
                    () => {
                        setLoading(false);
                        toast.success("Thank you for subscribing! 😊.\n We will let you know when available.");
                        setForm({
                            email: ""
                        });
                    },
                    (error) => {
                        setLoading(false);
                        console.error(error);
                        toast.error("Ahh, something went wrong. Please try again.");
                    }
                );
        }
    };

    return (
        <>
            <div className="coming-soon-container">
                <div className="coming-soon">
                    <div className="content-container">
                        <div className="headings">
                            <h1>Coming Soon</h1>
                            <p>Stay tuned for updates and announcements</p>
                        </div>
                        <div className="subscribtion-container">
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className="subscribtion-form">
                                    <input type="email" name="email" value={form.email} onChange={handleChange} id="subscribtion-field" placeholder="Enter your email" title="Please enter valid email." />
                                    <input type="submit" value={loading ? "Sending..." : "Subscribe"} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="bottom-right"
                width="500px"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}

export default ComingSoon;