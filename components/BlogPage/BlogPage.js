import { useEffect, useState } from "react";
import styles from "./BlogPage.module.css";
import { dummyBlog } from "../../DummyBlogData";
import Card from "../UI/Card/Card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(dummyBlog);
  }, []);

  const [carousel, setCarousel] = useState(0);
  const carouselLength = blogs.length;

  function nextSlide() {
    const slider = document.getElementById("slider");
    setCarousel(carousel === carouselLength - 1 ? 0 : carousel + 1);
    if (carousel === carouselLength - 1) {
      slider.scrollLeft = slider.scrollLeft - 10000;
    } else if (carousel > 0) {
      slider.scrollLeft = slider.scrollLeft + 400;
    }
  }

  function prevSlide() {
    const slider = document.getElementById("slider");
    setCarousel(carousel === 0 ? carouselLength - 1 : carousel - 1);
    if (carousel === 0) {
      slider.scrollLeft = slider.scrollLeft + 10000;
    } else if (carousel < carouselLength - 1) {
      slider.scrollLeft = slider.scrollLeft - 400;
    }
  }

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogContainer}>
        {blogs.map((blog, index) => {
          return (
            <div
              key={blog.id}
              className={
                carousel === index ? styles.animation_in : styles.animation_out
              }
            >
              {carousel === index && (
                <div
                  className={styles.blogSize}
                  style={{
                    background: `url(${blog.image})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className={styles.blog}>
                    <div>{blog.title}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div>
        <div className={styles.containerCards}>
          <div className={styles.leftArrow} onClick={prevSlide}>
            <ArrowBackIosIcon fontSize="large" />
          </div>
          <div id="slider" className={styles.sliderContainer}>
            {blogs.map((blog, index) => {
              return (
                <div key={blog.id}>
                  <Card
                    image={blog.image}
                    className={carousel === index && styles.cardSelected}
                    onClick={() => {
                      setCarousel(index);
                    }}
                  >
                    <div>{blog.title}</div>
                  </Card>
                </div>
              );
            })}
          </div>
          <div className={styles.rightArrow} onClick={nextSlide}>
            <ArrowForwardIosIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
