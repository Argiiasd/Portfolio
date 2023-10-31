import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from "react-scroll";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <h1>MJPG</h1>
            <div className={styles.Buttons_container}>
                <Link to="sobreMi" spy={true} smooth={true} offset={-250} duration={500} className={styles.Button}>Sobre mi <ArrowDownwardIcon /></Link>
                <Link to="proyectos" spy={true} smooth={true} offset={-350} duration={500} className={styles.Button}>Proyectos</Link>
                <Link to="contacto" spy={true} smooth={true} duration={500} className={styles.Button}>Contacto</Link>
            </div>
        </div>
    );
}

export default Nav;