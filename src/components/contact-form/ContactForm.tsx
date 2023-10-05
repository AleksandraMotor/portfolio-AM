import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.scss';

const ContactForm: React.FC = () => {

    const form = useRef();

    const sendEmail = (ele: any) => {
        ele.preventDefault();

        emailjs.sendForm(
            'service_a0hnxcn', 
            'template_czb8tjo', 
            form.current, 
            'uS_Xt1WLPdNMYH-IM')
        .then((result) => {
            console.log(result.text);
            console.log("message send");
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-form">
            <form className="contact-form__content" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;
