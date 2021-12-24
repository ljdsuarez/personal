import BlogPage from "../components/BlogPage/BlogPage";
import HomePage from "../components/HomePage/HomePage";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.navBar}>
        <NavBar />
      </div>
      <div className={styles.header}>
        <HomePage />
      </div>
      <div>
        <BlogPage />
      </div>

      <div className={styles.about}>
        <h1>ABOUT</h1>
      </div>
    </>
  );
}
