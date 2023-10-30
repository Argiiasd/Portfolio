import React from 'react';
import styles from './Proyects.module.css';

const Proyects = () => {
    return (
        <div className={styles.Proyects} id='proyectos'>
            <h2 className={styles.Title}>Proyectos</h2>
            <div className={styles.Container_Proyects}>
                <div className={styles.Proyect}/>
                <div className={styles.Proyect}/>
                <div className={styles.Proyect}/>
                <div className={styles.Proyect}/>
                <div className={styles.Proyect}/>
                <div className={styles.Proyect}/>
            </div>
        </div>
    );
}

export default Proyects;