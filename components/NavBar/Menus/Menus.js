import Link from "next/link";
import styles from "./Menus.module.css";

function Menus() {
  return (
    <ul className={styles.menus}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/blogs">Blogs</Link>
      </li>
      <li>
        <Link href="/contacts">Contacts</Link>
      </li>
    </ul>
  );
}

export default Menus;
