import styles from "./NavBar.module.css";
import MenuIcon from '../UI/MenuIcon/MenuIcon'

function NavBar() {

  return (
    <div className={styles.navBar}>
      <div className={styles.menuIcon}>

        <MenuIcon />
        
      </div>
    </div>
  );
}

export default NavBar;
