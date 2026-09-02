import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import styles from "./Carolsel.module.css";

import { CarouselContent } from "../CarouselContent";
import { CarouselContent2 } from "../CarouselContent2";
import { CarouselContent3 } from "../CarouselContent3";

const slides = [
  CarouselContent,
  CarouselContent2,
  CarouselContent3,
];

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // Próximo slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Slide anterior
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Início do swipe
  const handlePointerDown = (e: { pointerType: string; button: number; clientX: number; }) => {
    // Só inicia o drag com o botão principal do mouse
    if (e.pointerType === "mouse" && e.button !== 0) {
      return;
    }

    isDragging.current = true;
    startX.current = e.clientX;
  };

  // Final do swipe
  const handlePointerUp = (e: { clientX: number; }) => {
    if (!isDragging.current) return;

    const distance = e.clientX - startX.current;

    // Arrastou para a direita
    if (distance > 50) {
      prevSlide();
    }

    // Arrastou para a esquerda
    if (distance < -50) {
      nextSlide();
    }

    isDragging.current = false;
  };

  // Cancela o swipe
  const handlePointerCancel = () => {
    isDragging.current = false;
  };

  const Slide = slides[currentSlide];

  return (
    <section className={styles.carousel}>
      <div
        className={styles.slide}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <Slide />
      </div>

      <button
        type="button"
        className={styles.prev}
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <FiChevronLeft />
      </button>

      <button
        type="button"
        className={styles.next}
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <FiChevronRight />
      </button>

      <div className={styles.pagination}>
        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            className={
              currentSlide === index ? styles.active : ""
            }
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};