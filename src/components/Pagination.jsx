import { motion } from 'framer-motion';
import Button from './Button';

const Dots = ({ numOfDots, activeSlide, slideHandler }) => {
  const dotStyles = 'absolute top-0 size-full bg-white rounded-full';

  const dots = Array.from({ length: numOfDots }, (_, i) => i + 1).map(
    (slideIndex) => (
      <Button
        key={slideIndex}
        type="pagination-dots"
        clickHandler={() => slideHandler(slideIndex)}
        style={
          activeSlide === slideIndex
            ? { ...dotStyles, opacity: 1 }
            : { ...dotStyles, opacity: 0.5 }
        }>
        {activeSlide === slideIndex && (
          <motion.div layoutId="pagination-dots" className={dotStyles} />
        )}
      </Button>
    )
  );

  return <>{dots}</>;
};

const Numbers = ({ numOfDots, activeSlide, slideHandler }) => {
  const dotStyles = 'absolute top-0 size-full bg-white rounded-full z-10';

  const buttons = Array.from({ length: numOfDots }, (_, i) => i + 1).map(
    (slideIndex) => (
      <Button
        key={slideIndex}
        type="pagination-numbers"
        clickHandler={() => slideHandler(slideIndex)}>
        <span
          className={`relative z-20 text-gray-500 ${
            activeSlide === slideIndex ? 'text-navy' : ''
          }`}>
          {slideIndex}
        </span>
        {activeSlide === slideIndex && (
          <motion.div layoutId="pagination-numbers" className={dotStyles} />
        )}
      </Button>
    )
  );

  return <>{buttons}</>;
};

const Pagination = ({
  orientationStyles,
  type,
  numOfSlides = 1,
  activeSlide,
  slideHandler,
}) => {
  const spacingStyles = {
    dots: 'xl:gap-10',
    numbers: 'xl:gap-8',
  };

  return (
    <div
      className={`flex gap-4 w-fit ${orientationStyles} ${spacingStyles[type]}`}>
      {type === 'dots' && (
        <Dots
          numOfDots={numOfSlides}
          activeSlide={activeSlide}
          slideHandler={slideHandler}
        />
      )}
      {type === 'numbers' && (
        <Numbers
          numOfDots={numOfSlides}
          activeSlide={activeSlide}
          slideHandler={slideHandler}
        />
      )}
    </div>
  );
};

export default Pagination;
