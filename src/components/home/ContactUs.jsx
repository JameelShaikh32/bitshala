import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import validator from 'validator';
import { ToastContainer, toast } from "react-toastify";
import { contactSvg } from '../../assets';

const ContactUs = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
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

        if (!form.name || !form.email || !form.message) {
            toast.info("Please fill all the required fields!");
        } else {
            if (!validator.isEmail(form.email)) {
                return toast.error('Please enter valid email!.')
            }

            let message = form.message.concat("\nContact No: ", form.phone);
            setLoading(true);
            emailjs
                .send(
                    'bitshala_emailer',
                    'template_contactus',
                    {
                        from_name: form.name,
                        to_name: "BitShala",
                        from_email: form.email,
                        to_email: "info.bitshala@gmail.com",
                        message: message,
                    },
                    'NHHlo5wwARLSPcekP'
                )
                .then(
                    () => {
                        setLoading(false);
                        toast.success("Thank you! 😊.\n We will get back to you as soon as possible.");

                        setForm({
                            name: "",
                            phone: "",
                            email: "",
                            message: "",
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
        <section className="contact" id='contact'>
            <div className="contact-form" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="content">
                    <h4>Contact <abbr>Us</abbr></h4>
                    <h2>Get In Touch</h2>
                    <p>
                        We will do our best to serve you.
                    </p>
                </div>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                    <div className="contact-info">
                        <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} maxLength={10} pattern='[0-9]{8,}' title='Please provide valid phone number.' />
                        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} title="Please enter a valid email address" required />
                    </div>
                    <textarea name="message" cols="30" rows="10" value={form.message} onChange={handleChange} placeholder='Message' required></textarea>
                    <input type="submit" value={loading ? "Sending..." : "Send Message"} />
                </form>
            </div>
            <div className="contact-image">
                <img src={contactSvg} alt="contact image" />
            </div>

            <ToastContainer
                position="bottom-right"
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
        </section>
    );
}

export default ContactUs;