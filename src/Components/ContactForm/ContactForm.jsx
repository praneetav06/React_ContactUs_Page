import Button from '../Button/Button';
import styles from './Contact.module.css';
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import { useState } from 'react';
const ContactForm = () => {
    const [name, setName] = useState("Sample");
    const [email, setEmail] = useState("sample@gmail.com");
    const [text, setText] = useState("Frontend framework React.js!");
    const onViaCallSubmit = () => {
        console.log("I am from Via Call");
    };
    const onSubmit = (event) => {
        // console.log(event);
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        event.preventDefault();
        // console.log("name",event.target[0].value);
        // console.log("email",event.target[1].value);
        // console.log("text",event.target[2].value);
    }
    return (
        <section className={styles.container}>
            <div className={styles.contact_Form}>
                <div className={styles.top_btn}><Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="25px"/>}/>
                <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<FaPhoneAlt fontSize="25px"/>}/></div>
                <Button isOutline={true} text="VIA E-MAIL FORM" icon={<HiMail fontSize="25px"/>}/>
                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                    </div>
                    <div className={styles.form_control}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email"/>
                    </div>
                    <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" rows="5"/>
                    </div>
                    <div style={{display:"flex",
                    justifyContent:"end"}}>
                    <Button text="SUBMIT"/>
                    </div>
                    <div>{name + " " + email + " " + text}</div>
                </form>
            </div>
            <div className={styles.contact_Image}>
                <img src="contact.svg" alt="contact-image" />
            </div>
        </section>
    )
}
export default ContactForm;
