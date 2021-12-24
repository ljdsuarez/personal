import { useState } from "react";
import Menus from "../../NavBar/Menus/Menus";

import styles from "./MenuIcon.module.css";

function MenuIcon() {
  const [menuBtnState, setMenuBtnState] = useState(false);

  function handleMenuBtnState() {
    setMenuBtnState(!menuBtnState);
  }

  return (
    <div>
      <div
        className={
          menuBtnState ? styles.menuBtnOverlayOpen : styles.menuBtnOverlayClose
        }
      >
        <Menus />
      </div>
      <div
        className={menuBtnState ? styles.menuBtnOpen : styles.menuBtn}
        onClick={handleMenuBtnState}
      >
        <div className={styles.menuBtn__burger} />
      </div>
    </div>
  );
}

export default MenuIcon;
