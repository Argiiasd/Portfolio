import React from 'react';
import { NavLink } from 'react-router-dom';
import trendytech from '../../assets/Captura de pantalla 2023-10-31 215440.png'
import agilix from "../../assets/agilix.png";
import henrydogs from "../../assets/henrydogs.png"
import styles from './Proyects.module.css';

const Proyects = () => {
    return (
        <div className={styles.Proyects} id='proyectos'>
            <h2 className={styles.Title}>Proyectos</h2>
            <div className={styles.Container_Proyects}>
                <div className={styles.Proyect}>
                    <img src={trendytech} alt='Imagen' className={styles.Img} />
                    <div className={styles.Proyect_Body}>
                        <h2 className={styles.Proyect_Title}>Trendy-Tech</h2>
                        <p className={styles.Proyect_Info}>Comercio electrónico dedicado a la venta de hardware y electrodomésticos. <br/> (No responsive)</p>
                        <NavLink to="https://github.com/Rey5440/TrendyTech-Front" className={styles.Proyect_Button}>Rep. Front</NavLink>
                        <NavLink to="https://github.com/Rey5440/TrendyTech-Back" className={styles.Proyect_Button}>Rep. Back</NavLink>
                        <NavLink to="https://trendy-tech.onrender.com" className={styles.Proyect_Button}>TrendyTech</NavLink>
                    </div>
                </div>
                <div className={styles.Proyect}>
                    <img src={agilix} alt='Imagen' className={styles.Img} />
                    <div className={styles.Proyect_Body}>
                        <h2 className={styles.Proyect_Title}>Agilix</h2>
                        <p className={styles.Proyect_Info}>Aplicación para comerciantes que permite llevar un seguimiento de sus ventas, productos y clientes.</p>
                        <button className={styles.Proyect_Button}>Rep. No Disponible</button>
                    </div>
                </div>
                <div className={styles.Proyect}>
                    <img src={henrydogs} alt='Imagen' className={styles.Img} />
                    <div className={styles.Proyect_Body}>
                        <h2 className={styles.Proyect_Title}>Henry Dogs</h2>
                        <p className={styles.Proyect_Info}>Aplicación que permite ver información sobre razas de perros, buscarlas, filtrarlas y crear nuevas.</p>
                        <button className={styles.Proyect_Button}>Repositorio</button>
                    </div>
                </div>
                <div className={styles.Proyect}>

                </div>
                <div className={styles.Proyect}>

                </div>
                <div className={styles.Proyect}>

                </div>
            </div>
        </div>
    );
}

export default Proyects;