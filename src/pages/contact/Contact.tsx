import React from 'react';

import './Contact.scss';
import ContactForm from '../../components/contact-form/ContactForm';

const Contact: React.FunctionComponent = () => {
    return (
        <div className='contact-page'>
            <ContactForm/>
        </div>
    );
};

export default Contact;
