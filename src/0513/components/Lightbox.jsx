import { useEffect, useRef, useState } from "react";
import "../App.css";

export default function Lightbox({ images, index, onClose, onChange }) {
  const [fade, setFade] = useState(true);
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      onChange((index - 1 + images.length) % images.length);
      setFade(true);
    }, 200);
  };

  const next = () => {
    setFade(false);
    setTimeout(() => {
      onChange((index + 1) % images.length);
      setFade(true);
    }, 200);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prev();
    if (deltaX < -50) next();
    touchStartX.current = null;
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div
        className="lightbox"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[index]}
          alt=""
          className={`lightbox-img ${fade ? "fade-in" : "fade-out"}`}
        />
        <button className="nav prev" onClick={prev}>←</button>
        <button className="nav next" onClick={next}>→</button>
        <button className="close" onClick={onClose}>✕</button>
      </div>
    </>
  );
}