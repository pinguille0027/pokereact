import styles from "../styles/components/layout.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "../pages/List";

const Layeout: React.FC = () => {
  return (
    <div className={styles.ui}>
      <header className={styles.topbar}>
        <img src="/Pokedexicon.webp" alt="pokedex logo" width="150px" className={styles.logo}/>
        <nav className={styles.nav}>
          <h2 hidden>Generation</h2>
          <h2>List</h2>
          <h2>Gallery</h2>
        </nav>
      </header>

      <div className={styles.content}>
        <Router>
          <Routes>
            <Route path="/" element={<List />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Layeout;
