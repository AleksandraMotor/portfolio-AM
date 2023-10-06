import React from 'react';
import ContactForm from '../../components/contact-form/ContactForm';

import './Contact.scss';

const Contact: React.FunctionComponent = () => {
    return (
        <div className="contact-page">
            <h1>Contact</h1>
            <div className="contact-page__line"></div>
            <h2>Get in touch</h2>
            <ContactForm/>
        </div>
    );
};

export default Contact;
