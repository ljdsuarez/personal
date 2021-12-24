import { useState } from "react";
import styles from "./Card.module.css";

function Card(props) {
  const [blogOnHover, setBlogOnHover] = useState(false);

  function handleBlogOnHover() {
    setBlogOnHover(true);
  }

  function handleBlogMouseLeave() {
    setBlogOnHover(false);
  }

  return (
    <div
      onMouseOver={handleBlogOnHover}
      onMouseLeave={handleBlogMouseLeave}
      className={props.className}
    >
      <div
        style={{ background: `url(${props.image})`, backgroundSize: "cover" }}
        className={styles.card} onClick={props.onClick}
      >
        <div
          className={blogOnHover ? styles.blogTitlesOnHover : styles.blogTitles}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Card;
