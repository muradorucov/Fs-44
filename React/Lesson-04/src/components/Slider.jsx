import { useState} from "react";

function Slider() {
  const [slide, setSlide] = useState(1);
  const [active, setActive] = useState(true);

  const pervSlide = () => {
    setActive(false);

    setTimeout(() => {
      if (slide - 1 === 0) {
        setSlide(3);
      } else {
        setSlide(slide - 1);
      }
      setActive(true);
    }, 1000);
  };

  const nextSlide = () => {
    setActive(false);

    setTimeout(() => {
      if (slide + 1 === 4) {
        setSlide(1);
      } else {
        setSlide(slide + 1);
      }
      setActive(true);
    }, 1000);
  };

  return (
    <div>
      <button onClick={pervSlide}>prev</button>

      <img
        src={`/slider/${slide}.jpg`}
        className={`slider-img ${active ? "active" : ""}`}
      />

      <button onClick={nextSlide}>next</button>
    </div>
  );
}

export default Slider;