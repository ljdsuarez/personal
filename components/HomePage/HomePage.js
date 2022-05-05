import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  const [offSetY, setOffSetY] = useState(0);

  function handleScroll() {
    setOffSetY(window.pageYOffset);

    return () => window.removeEventListener("scroll", handleScroll);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const opacityVal = (400 - offSetY) / 400;
  return (
    <div>
      <div
        style={{
          transform: `translateY(${offSetY * 0.7}px)`,
          opacity: `${opacityVal}`,
        }}
      >
        <div className={styles.headlineTitle}>
          <div className={styles.laurenzTitle}>
            <div className={styles.atomLa}>La</div>
            <div className={styles.atomLa57}>57</div>
            <div>urenz</div>
          </div>
          <div className={styles.pageTitle}>
            <div className={styles.atomP}>P</div>
            <div className={styles.atomLa57}>15</div>
            age
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
