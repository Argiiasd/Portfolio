import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <h1>MJPG</h1>
            <div className={styles.Buttons_container}>
                <button className={styles.Button}>Sobre mi <ArrowDownwardIcon /></button>
                <button className={styles.Button}>Proyectos</button>
                <button className={styles.Button}>Contacto</button>
            </div>
        </div>
    );
}

export default Nav;