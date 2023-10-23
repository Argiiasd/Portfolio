import React from "react";
import ImagenAbout from "../../assets/Wavy-C_Bus-07_Single-08-removebg-preview.png";
import styles from "./About_Me.module.css";

const About_Me = () => {
    let iconos = ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"]
    return (
        <>
            <div className={styles.About_Me}>
                <div>
                    <img src={ImagenAbout} alt="" className={styles.ImagenAbout}/>
                </div>
                <div>
                    <h4 className={styles.Title}>Sobre mi</h4>
                    <p>Hola! soy Mateo. Recientemente me gradué como Full-Stack Web Developer en el bootcamp de soyHenry, y estoy constantemente aprendiendo y mejorando mis habilidades. Soy una persona extrovertida y sociable, y me encanta trabajar en equipo. Estoy buscando nuevas oportunidades para aprender y crecer profesionalmente. Considero que tengo un gran potencial, y un fuerte compromiso con lo que hago. 
                    Estoy seguro de que puedo aportar un gran valor a cualquier equipo.</p>
                </div>
            </div>
            <div className={styles.Tecnologias}>
                <h4 className={styles.Title}>Lenguajes y Tecnologías</h4>
                <div className={styles.Iconos}>
                    {iconos.map((icono) => {
                        return (
                            <div className={styles.IconContainer}>
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