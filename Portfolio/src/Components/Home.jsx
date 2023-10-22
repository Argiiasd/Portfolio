import React from "react";
import Presentation from "../Components/Presentation/Presentation";
import Nav from "../Components/Nav/Nav";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.Home}>
            <Nav />
            <Presentation />
        </div>
    );
}

export default Home;