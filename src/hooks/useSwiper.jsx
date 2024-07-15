import { useState, useEffect } from 'react';

function useSwiper(numOfSlides = 1, swipeDelaySecs = 6, initialSlide = 1) {
  const [activeSlide, setActiveSlide] = useState(initialSlide);

  useEffect(() => {
    const autoSwipeSlides = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === numOfSlides ? 1 : ++prevSlide
      );
    }, swipeDelaySecs * 1000);

    return () => clearInterval(autoSwipeSlides);
  }, [numOfSlides, swipeDelaySecs]);

  const handleSlideChange = (newSlideIndex) => {
    if (newSlideIndex >= 1 && newSlideIndex <= numOfSlides) {
      setActiveSlide(newSlideIndex);
    }
  };

  return [activeSlide, handleSlideChange];
}

export default useSwiper;
