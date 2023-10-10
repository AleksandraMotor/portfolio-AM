import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as HiIcons from 'react-icons/hi2';
import * as AiIcons from 'react-icons/ai';
import * as TfiIcons from 'react-icons/tfi';
import * as RxIcons from 'react-icons/rx';
import * as BiIcons from 'react-icons/bi'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ButtonGoBack from '../buttons/button-go-back/ButtonGoBack';

import './ContactForm.scss';

const ContactForm: React.FC = () => {

    const [showMessage, setshowMessage] = useState(false);
    const showInfo = () => setshowMessage(!showMessage);
    const [showSucess, setshowSucess] = useState(false);
    const showStatus = () => setshowSucess(!showSucess);
    const [showError, setshowError] = useState(false);
    const showErroStatus = () => setshowError(!showError);
    const form = useRef();

    const {
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
    });

    const sendEmail = () => {
        // data.preventDefault();
        
        emailjs
        .sendForm(
            'service_a0hnxcn', 
            'template_czb8tjo', 
            form.current, 
            'uS_Xt1WLPdNMYH-IM')
        .then((result) => {
            // console.log("result.text", result.text);
            // console.log("message send");
            return (showStatus())
                
        } , (error) => {
            // console.log("error.text", error.text);
            return (showErroStatus());
        });
    };
    
    console.log("showMessage", showMessage);
    console.log("showSucess", showSucess);
    console.log("showError", showError);

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
                    className="contact-form__content__input"
                    {...register("user_name", {
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username must be atleast 3 characters long"
                        },
                        maxLength: {
                            value: 30,
                            message: "Username must be atmost 30 characters long"
                        },
                    })}
                />
                <div className="contact-form__content__message">
                    {errors.user_name?.message?.toString()}
                </div>
                
                <label>Email</label>
                <input
                    name="user_email"
                    type="email"
                    placeholder="Email"
                    className="contact-form__content__input"
                    {...register("user_email", {
                        required: "Email is required...",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Email must be valid",
                        },
                    })} 
                />
                <div className="contact-form__content__message">
                    {errors.user_email?.message?.toString()}
                </div>
                <label>Message</label>
                <textarea
                    name="message"
                    placeholder="Message"
                    className="contact-form__content__input"
                />
                <input className="contact-form__content__send-button" type="submit" value="Send"
                 onClick={showInfo}
                 />
            </form>
            <div
                className={classNames({
                    'contact-form__message': true,
                    'contact-form__message--hide': !showMessage,
                })}
                >
                    
                        <div className="contact-form__message__validation">
                            <div
                                id='checking'
                                className="contact-form__message__validation__checking"
                            >
                                Checking
                                <HiIcons.HiOutlineArrowPath/>
                            </div>
                            {!showSucess && !showError &&
                                <div className="contact-form__message__validation__info">
                                    Form Validation
                                    <span>Check your contact form for validation requirement messages like "Email is required..." or " "Username is to short/long"</span>
                                    <button onClick={showInfo}>Return to the contact form<GiIcons.GiLobArrow/></button>   
                                </div>                             
                            }
                            {showSucess &&
                                <div className="contact-form__message__validation__send">
                                    <IoIcons.IoMdPaperPlane />
                                    <div>
                                        Message Sent
                                    </div>
                                    <ButtonGoBack/>
                                </div>  
                            }
                            {showError &&
                                <div className="contact-form__message__validation__error">
                                    <div className="contact-form__message__validation__error__text">
                                        <BiIcons.BiMessageSquareError/>
                                        Error
                                    </div>
                                    <ButtonGoBack/> 
                                </div> 
                            }  
                        </div>                    
                </div>                        
        </div>
    );
};

export default ContactForm;
