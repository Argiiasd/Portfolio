import React from "react";
import Presentation from "../Components/Presentation/Presentation";
import Nav from "../Components/Nav/Nav";
import About_Me from "./About Me/About_Me";
import Proyects from "./Projects/Proyects";
import Contact_Form from "./Contact Form/Contact_Form";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.Home}>
            <Nav />
            <Presentation />
            <About_Me />
            <Proyects />
            <Contact_Form />
        </div>
    );
}

export default Home;