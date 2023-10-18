/*import styles from "../styles/components/layout.module.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import List from "../pages/List";
import Gallery from "../pages/Gallery";

const Layeout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.ui}>
      <header className={styles.topbar}>
        <img src="/Pokedexicon.webp" alt="pokedex logo" width="150px" className={styles.logo}/>
        <nav className={styles.nav}>
          <h2 hidden>Generation</h2>
          <button
            className={location.pathname === "/" ? styles.activeLink : ""}
            onClick={() => navigate("/")}
          ><h2>List</h2>
          </button>
          <button
            className={location.pathname === "/gallery" ? styles.activeLink : ""}
            onClick={() => navigate("/gallery")}
          >
            <h2>Gallery</h2>
          </button>
        </nav>
      </header>

      <div className={styles.content}>
        <Router>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/gallery" element={<Gallery/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Layeout;*/

import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import List from "../pages/List";
import Gallery from "../pages/Gallery";
import styles from "../styles/components/layout.module.css";
import NavBar from "./atoms/NavBar"

const Layout: React.FC = () => {
  return (
    <div className={styles.ui}>
        <Router>
          <NavBar />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
};

export default Layout;
