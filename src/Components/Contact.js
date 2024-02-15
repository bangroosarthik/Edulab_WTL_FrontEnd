import { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        t: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const submitBtn = document.querySelector('.submitbtn');

        const handleClick = () => {
            alert("Feedback Sent!!!");
        };

        if (submitBtn) {
            submitBtn.addEventListener('click', handleClick);
        }

        // Cleanup the event listener when the component is unmounted
        return () => {
            if (submitBtn) {
                submitBtn.removeEventListener('click', handleClick);
            }
        };
    }, []); // Empty dependency array ensures this effect runs once after the initial render

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_a6e3qwq', 'template_8q7u326', formRef.current, 'HprfSSGxRpEdMQZ8y')
            .then((result) => {
                setError(false);
                setSuccess(true);
            })
            .catch((error) => {
                setError(true);
                setSuccess(false);
            });
    };

    return (
        <div>
            <motion.h1 variants={variants} style={{textAlign:'center',marginTop:"5rem",fontSize:"2.5rem",fontFamily:'Times New Roman, Times, serif'} }>Send Feedback</motion.h1>
            <motion.div className="contact" style={{marginTop:"4rem"}} variants={variants} initial="initial" whileInView="animate">
                
                <motion.div className="textContainer" variants={variants}>
                    
                    <motion.div className="item" variants={variants}>
                        <h2>Mail</h2>
                        <span>sarthikbangroo@gmail.com</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Contact</h2>
                        <span>+918715063565</span>
                    </motion.div>
                    
                </motion.div>
                <motion.div className="formContainer">
                    <motion.form ref={formRef} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="name" />
                        <input type="email" required placeholder="Email" name="email"/>
                        <textarea rows={8} placeholder="Enter text" name="message"/>
                        <button className="submitbtn">Submit</button>
                        {error && "Error"}
                        {success && "Success"}
                    </motion.form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
