import React from "react";
import Presentation from "../Components/Presentation/Presentation";
import Nav from "../Components/Nav/Nav";
import About_Me from "./About Me/About_Me";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.Home}>
            <Nav />
            <Presentation />
            <About_Me />
        </div>
    );
}

export default Home;