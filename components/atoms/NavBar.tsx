import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/components/atoms/navBar.module.css";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.topbar}>
        <img src="/Pokedexicon.webp" alt="pokedex logo" width="150px" height="54px" className={styles.logo}/>
        <nav className={styles.nav}>
          <h2 hidden>Generation</h2>
          <button
            className={location.pathname === "/" ? styles.activeLink : ""}
            onClick={() => navigate("/")}
            title="Link to list"
          ><h2>List</h2>
          </button>
          <button
            className={location.pathname === "/gallery" ? styles.activeLink : ""}
            onClick={() => navigate("/gallery")}
            title="Link to gallery"
          >
            <h2>Gallery</h2>
          </button>
        </nav>
      </header>
  );
};
export default NavBar