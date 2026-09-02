import styles from "./Carolsel.module.css";
import image from "../../images/image.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Container } from "../Container";

const slides = [image, image2, image3];

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;

    const distance = e.clientX - startX.current;

    if (distance > 50) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }

    if (distance < -50) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }

    setIsDragging(false);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
  };

  return (
    <section
      className={styles.carousel}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >


      <button
        className={styles.prev}
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
      >
        <FiChevronLeft />
      </button>
      <Container>
              <img
        key={currentSlide}
        src={slides[currentSlide]}
        alt=""
        className={styles.slideImage}
        draggable="false"
      />
      </Container>

      <button
        className={styles.next}
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        <FiChevronRight />
      </button>

      <div className={styles.pagination}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={currentSlide === index ? styles.active : ""}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
