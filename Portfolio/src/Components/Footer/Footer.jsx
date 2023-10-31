import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.FooterContainer}>
            <div className={styles.LinksContainer}>
                <div className={styles.mjpgContainer}>
                    <p className={styles.mjpgText}>MJPG</p>
                    <p className={styles.mjpgText2}>© 2023 MJPG</p>
                </div>
                <div className={styles.Links}>
                    <NavLink to={"https://www.linkedin.com/in/mateo-jeremias-pg/"} className={styles.Link}>Mi LinkedIn</NavLink>
                    <NavLink to={"https://github.com/Argiiasd"} className={styles.Link}>Mi GitHub</NavLink>
                </div>
            </div>
            <div className={styles.Text}>
                <p>Imágenes por Viktor Talashuk <br/> y Daniel Putzer en Pexels. </p>
            </div>
        </div>
    )
}

export default Footer;