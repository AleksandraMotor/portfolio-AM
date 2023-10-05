import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

import './ContactForm.scss';

const ContactForm: React.FC = () => {

    const form = useRef();

    const {
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
    });

    console.log("errors", errors);

    const sendEmail = (data: any) => {
        // data.preventDefault();

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
            <form 
                className="contact-form__content"
                ref={form} 
                onSubmit={handleSubmit(sendEmail)}
            >
                <label>Name</label>
                <input
                    name="user_name"
                    type="text"
                    placeholder="Username"
                    {...register("userName", {
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username must be atleast 3 characters long"
                        },
                        maxLength: {
                            value: 6,
                            message: "Username must be atmost 6 characters long"
                        },
                    })}
                />
                <p>{errors.userName?.message?.toString()}</p>
                <label>Email</label>
                <input
                    name="user_email"
                    type="email"
                    placeholder="Email"
                    {...register("userEmail", {
                        required: "Email is Requred...",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Email must be valid",
                        },
                    })} 
                />
                <p>{errors.userEmail?.message?.toString()}</p>
                <label>Message</label>
                <textarea
                    name="message"
                    placeholder="Message"
                    rows={10}
                />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;
