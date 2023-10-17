import React from "react";
import Imagen from "../../assets/1907.i109.039.p.m004.c30.programming_development_isometric_icons-07-removebg-preview.png"
import styles from "./Presentation.module.css";

const Presentation = () => {
    return (
        <div className={styles.Presentation}>
            <div className={styles.Text}>
                <h2 className={styles.Name}>Mateo J. Pinto</h2>
                <h2 className={styles.Name}>Giacosa</h2>
                <h3 className={styles.Job}>Desarrollador Web <span className={styles.Job_2}>Full-Stack</span></h3>
                <img src={Imagen} alt="" className={styles.Imagen}/>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Presentation;