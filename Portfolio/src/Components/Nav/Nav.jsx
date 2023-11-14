import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from "react-scroll";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <h1>MJPG</h1>
            <div className={styles.Buttons_container}>
                <Link to="sobreMi" spy={true} smooth={true} offset={-250} duration={500} className={styles.Button}>About Me <ArrowDownwardIcon /></Link>
                <Link to="proyectos" spy={true} smooth={true} offset={-350} duration={500} className={styles.Button}>Projects</Link>
                <Link to="contacto" spy={true} smooth={true} offset={-300} duration={500} className={styles.Button}>Contact</Link>
            </div>
        </div>
    );
}

export default Nav;