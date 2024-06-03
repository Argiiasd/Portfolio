import React from "react";
import { NavLink } from "react-router-dom";
import trendytech from "../../assets/Captura de pantalla 2023-10-31 215440.png";
import agilix from "../../assets/agilix.png";
import henrydogs from "../../assets/henrydogs.png";
import rym from "../../assets/rym.png";
import cncExpert from "../../assets/cncExpert.png";
import soon2 from "../../assets/og-productions.jpg";
import maskotAppFeed from "../../assets/maskotapp_feed.jpeg";
import mrias from "../../assets/mrias.jpeg";
import csv from "../../assets/csv.jpeg";
import styles from "./Proyects.module.css";

const Proyects = () => {
  return (
    <div className={styles.Proyects} id="proyectos">
      <h2 className={styles.Title}>Projects</h2>
      <div className={styles.Container_Proyects}>
        <div className={styles.Proyect}>
          <img
            src={csv}
            alt="CSV Data Viewer"
            className={styles.Img}
          />
          <div className={styles.Proyect_Body}>
            <h2 className={styles.Proyect_Title}>
              CSV Data Viewer
            </h2>
            <p className={styles.Proyect_Info}>
              Application for reading CSV files.
            </p>
            <NavLink to="https://csv-file-reader.vercel.app" className={styles.Proyect_Button}>
              Deploy
            </NavLink>
          </div>
        </div>
        <div className={styles.Proyect}>
          <img
            src={mrias}
            alt="My Roommate is a SuperHero?!"
            className={styles.Img}
          />
          <div className={styles.Proyect_Body}>
            <h2 className={styles.Proyect_Title}>
              My Roommate is a SuperHero?! - WIP
            </h2>
            <p className={styles.Proyect_Info}>
              WebComic application for an artist. More info to be added.
            </p>
            <NavLink disabled={true} className={styles.Proyect_Button}>
              Deploy (soon)
            </NavLink>
          </div>
        </div>
        <div className={styles.Proyect}>
          <img src={maskotAppFeed} alt="MaskotApp" className={styles.Img} />
          <div className={styles.Proyect_Body}>
            <h2 className={styles.Proyect_Title}>
              MaskotApp - Social Network for pets
            </h2>
            <p className={styles.Proyect_Info}>
              MaskotApp is a social network where you can share your pets, and
              know others. <br />
              Design by Mariana Guadalupe Miño.
            </p>
            <NavLink disabled={true} className={styles.Proyect_Button}>
              Deploy (Not available)
            </NavLink>
          </div>
        </div>
        <div className={styles.Proyect}>
          <img src={cncExpert} alt="CNC Expert" className={styles.Img} />
          <div className={styles.Proyect_Body}>
            <h2 className={styles.Proyect_Title}>CNC Expert</h2>
            <p className={styles.Proyect_Info}>
              Landing page for the final project of students at the EEST N1
              (Merlo, Buenos Aires).
            </p>
            <NavLink
              to="https://github.com/Argiiasd/CNC_Expert_Landing_Page"
              className={styles.Proyect_Button}
            >
              Repository
            </NavLink>
            <NavLink
              to="https://cncexpert.netlify.app"
              className={styles.Proyect_Button}
            >
              CNC Expert
            </NavLink>
          </div>
        </div>
        <div className={styles.Proyect}>
          <img src={trendytech} alt="TrendyTech" className={styles.Img} />
          <div className={styles.Proyect_Body}>
            <h2 className={styles.Proyect_Title}>Trendy-Tech</h2>
            <p className={styles.Proyect_Info}>
              E-Commerce dedicated to the sale of computer hardware and
              household aplliances. <br /> (Not responsive)
            </p>
            <NavLink
              to="https://github.com/Rey5440/TrendyTech-Front"
              className={styles.Proyect_Button}
            >
              Rep. Front
            </NavLink>
            <NavLink
              to="https://github.com/Rey5440/TrendyTech-Back"
              className={styles.Proyect_Button}
            >
              Rep. Back
            </NavLink>
            <NavLink
              to="https://trendy-tech.onrender.com"
              className={styles.Proyect_Button}
            >
              TrendyTech
            </NavLink>
          </div>
        </div>
        <div className={styles.Proyect}>
          <img src={agilix} alt="Agilix" className={styles.Img} />
          <div className={styles.Proyect_Body}>
            <h2 className={styles.Proyect_Title}>Agilix</h2>
            <p className={styles.Proyect_Info}>
              Application for merchants that allows you to track your sales,
              products and customers.
            </p>
            <button className={styles.Proyect_Button}>
              Rep. Not Available
            </button>
          </div>
        </div>
        <div className={styles.Proyect}>
          <img src={henrydogs} alt="Henry Dogs" className={styles.Img} />
          <div className={styles.Proyect_Body}>
            <h2 className={styles.Proyect_Title}>Henry Dogs</h2>
            <p className={styles.Proyect_Info}>
              Application that allows you to view information about dog breeds,
              search for them, filter them and create new ones.
            </p>
            <NavLink
              to="https://github.com/Argiiasd/DOGS-PI"
              className={styles.Proyect_Button}
            >
              Repository
            </NavLink>
          </div>
        </div>
        <div className={styles.Proyect}>
          <img src={rym} alt="Rick & Morty" className={styles.Img} />
          <div className={styles.Proyect_Body}>
            <h2 className={styles.Proyect_Title}>Rick & Morty</h2>
            <p className={styles.Proyect_Info}>
              SoyHenry bootcamp integrative project. The application uses the
              Rick and Morty API to display character information, be able to
              search for them, filter them and add them to favorites.
            </p>
            <NavLink
              to="https://github.com/Argiiasd/Module-2-4-Integrated-Project---SoyHenry-Rick-and-Morty"
              className={styles.Proyect_Button}
            >
              Repository
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
