import React from 'react';
import ContactForm from '../../components/contact-form/ContactForm';

import './Contact.scss';

const Contact: React.FunctionComponent = () => {
    return (
        <div className='contact-page'>
            <ContactForm/>
        </div>
    );
};

export default Contact;
