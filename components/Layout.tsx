import styles from "../styles/components/layout.module.css"
interface IProps {
  children?: JSX.Element | JSX.Element[];
}

const Layeout: React.FC<IProps> = ({children}) => {
  return (
    <div>
      <header className={styles.topbar}>
        <img src="/Pokedexicon.webp" alt="pokedex logo" width="150px" />
        <nav className={styles.nav}>
          <h2 hidden>Generation</h2>
          <h2>List</h2>
          <h2>Gallery</h2>
        </nav>
      </header>
      
    <div>{children}</div>
    </div>
    
  );
};

export default Layeout;