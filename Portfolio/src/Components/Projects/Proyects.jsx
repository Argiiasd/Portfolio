import React from 'react';
import { NavLink } from 'react-router-dom';
import trendytech from '../../assets/Captura de pantalla 2023-10-31 215440.png'
import agilix from "../../assets/agilix.png";
import henrydogs from "../../assets/henrydogs.png";
import rym from "../../assets/rym.png";
import soon1 from "../../assets/pexels-og-productionz-17243087.jpg"
import soon2 from "../../assets/og-productions.jpg"
import styles from './Proyects.module.css';

const Proyects = () => {
    return (
        <div className={styles.Proyects} id='proyectos'>
            <h2 className={styles.Title}>Projects</h2>
            <div className={styles.Container_Proyects}>
                <div className={styles.Proyect}>
                    <img src={trendytech} alt='Imagen' className={styles.Img} />
                    <div className={styles.Proyect_Body}>
                        <h2 className={styles.Proyect_Title}>Trendy-Tech</h2>
                        <p className={styles.Proyect_Info}>E-Commerce dedicated to the sale of computer hardware and household aplliances. <br/> (Not responsive)</p>
                        <NavLink to="https://github.com/Rey5440/TrendyTech-Front" className={styles.Proyect_Button}>Rep. Front</NavLink>
                        <NavLink to="https://github.com/Rey5440/TrendyTech-Back" className={styles.Proyect_Button}>Rep. Back</NavLink>
                        <NavLink to="https://trendy-tech.onrender.com" className={styles.Proyect_Button}>TrendyTech</NavLink>
                    </div>
                </div>
                <div className={styles.Proyect}>
                    <img src={agilix} alt='Imagen' className={styles.Img} />
                    <div className={styles.Proyect_Body}>
                        <h2 className={styles.Proyect_Title}>Agilix</h2>
                        <p className={styles.Proyect_Info}>Application for merchants that allows you to track your sales, products and customers.</p>
                        <button className={styles.Proyect_Button}>Rep. Not Available</button>
                    </div>
                </div>
                <div className={styles.Proyect}>
                    <img src={henrydogs} alt='Imagen' className={styles.Img} />
                    <div className={styles.Proyect_Body}>
                        <h2 className={styles.Proyect_Title}>Henry Dogs</h2>
                        <p className={styles.Proyect_Info}>Application that allows you to view information about dog breeds, search for them, filter them and create new ones.</p>
                        <NavLink to="https://github.com/Argiiasd/DOGS-PI" className={styles.Proyect_Button}>Repository</NavLink>
                    </div>
                </div>
                <div className={styles.Proyect}>
                    <img src={rym} alt='Imagen' className={styles.Img} />
                    <div className={styles.Proyect_Body}>
                        <h2 className={styles.Proyect_Title}>Rick & Morty</h2>
                        <p className={styles.Proyect_Info}>SoyHenry bootcamp integrative project. The application uses the Rick and Morty API to display character information, be able to search for them, filter them and add them to favorites.</p>
                        <NavLink to="https://github.com/Argiiasd/Module-2-4-Integrated-Project---SoyHenry-Rick-and-Morty" className={styles.Proyect_Button}>Repository</NavLink>
                    </div>
                </div>
                <div className={styles.Proyect}>
                    <img src={soon1} alt='Imagen' className={styles.Img} />
                    <div className={styles.Proyect_Body}>
                        <h2 className={styles.Proyect_Title}>Soon!</h2>
                        <p className={styles.Proyect_Info}>Image from OG Productionz on Pexels.</p>
                    </div>
                </div>
                <div className={styles.Proyect}>
                    <img src={soon2} alt='Imagen' className={styles.Img} />
                    <div className={styles.Proyect_Body}>
                        <h2 className={styles.Proyect_Title}>Soon!</h2>
                        <p className={styles.Proyect_Info}>Image from OG Productionz on Pexels.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyects;