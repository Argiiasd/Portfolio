import React from "react";
import { NavLink } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "./Presentation.module.css";

const Presentation = () => {
    return (
        <div className={styles.Presentation}>
            <div className={styles.Text}>
                <h2 className={styles.Name}>Mateo J. Pinto</h2>
                <h2 className={styles.Name}>Giacosa</h2>
                <h3 className={styles.Job}>Desarrollador Web <span className={styles.Job_2}>Full-Stack</span></h3>
                <div className={styles.Social_Media}>
                    <NavLink to={"https://www.linkedin.com/in/mateo-jeremias-pg/"}>
                        <LinkedInIcon className={styles.Icon} sx={{color: 'white', fontSize: 80}}/>    
                    </NavLink>
                    <NavLink to={"https://github.com/Argiiasd"}>
                        <GitHubIcon className={styles.Icon} sx={{color: 'white', fontSize: 80}}/>    
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Presentation;