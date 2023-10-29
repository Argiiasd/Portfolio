import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from 'react-router-dom';
import styles from "./Contact_Form.module.css";

const Contact_Form = () => {
    return (
        <div className={styles.Contact_Form}>
            <h2 className={styles.FormTitle}>Contáctame</h2>
            <div className={styles.Line}/>
            <p className={styles.FormText}>Espero que podamos trabajar juntos.</p>
            <div className={styles.Contact_Container}>
                <form className={styles.Contact_Form_Container} action="https://formsubmit.co/mateo.p.giacosa@gmail.com" method="POST">
                    <input type="text" name="name" placeholder="Tu nombre" className={styles.Input}/>
                    <input type="text" name="email" placeholder="Email" className={styles.Input}/>
                    <textarea type="text" name="message" placeholder="Mensaje" className={styles.Textarea}/>
                    <button type="submit" className={styles.Button}>Enviar</button>
                </form>
                <div className={styles.Contact_Icons_Container}>
                    <div className={styles.Contact_Icons}>
                        <p className={styles.Contact_Icons_Text}><LocationOnIcon sx={{fontSize: 35}} className={styles.Icon}/>Buenos Aires, Argentina</p>
                        <p className={styles.Contact_Icons_Text}><EmailIcon sx={{fontSize: 35}} className={styles.Icon}/>mateo.p.giacosa@gmail.com</p>    
                        <div className={styles.SecondLine}/>
                        <div className={styles.Contact_Icons_2}>
                            <NavLink to={"https://www.linkedin.com/in/mateo-jeremias-pg/"}>
                                <LinkedInIcon sx={{fontSize: 35}} className={styles.Icon2}/>
                            </NavLink>
                            <NavLink to={"https://github.com/Argiiasd"}>
                                <GitHubIcon sx={{fontSize: 35}} className={styles.Icon2}/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact_Form;