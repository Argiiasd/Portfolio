import React from "react";
import ImagenAbout from "../../assets/pexels-daniel-putzer-633409.jpg";
import styles from "./About_Me.module.css";

const About_Me = () => {
    let iconos = ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"]
    return (
        <>
            <div className={styles.About_Me} id="sobreMi">
                <div>
                    <img src={ImagenAbout} alt="" className={styles.ImagenAbout}/>
                </div>
                <div>
                    <h4 className={styles.Title}>Sobre mi</h4>
                    <p>Hi! I am Mateo. I recently graduated as a Full-Stack Web Developer from soyHenry's bootcamp, and I am constantly learning and improving my skills. I am an extroverted and sociable person, and I love working in a team. I am looking for new opportunities to learn and grow professionally. I consider that I have great potential, and a strong commitment to what I do. I am sure that I can add great value to any team.</p>
                </div>
            </div>
            <div className={styles.Tecnologias}>
                <h4 className={styles.Title}>Languages and technologies</h4>
                <div className={styles.Iconos}>
                    {iconos.map((icono) => {
                        return (
                            <div className={styles.IconContainer} key={icono}>
                                <img src={icono} alt="" className={styles.Icono}/>
                            </div>
                        )
                    })}
                    <div className={styles.IconExpress}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"/>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default About_Me;