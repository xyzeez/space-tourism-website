import { motion } from 'framer-motion';
import Button from './Button';

const Dots = ({ activeSlide, slideHandler }) => {
  const dotStyles = 'absolute top-0 size-full bg-white rounded-full';

  return (
    <>
      <Button type="pagination-dots" clickHandler={() => slideHandler(1)}>
        {activeSlide === 1 && (
          <motion.div layoutId="pagination-dots" className={dotStyles} />
        )}
      </Button>
      <Button type="pagination-dots" clickHandler={() => slideHandler(2)}>
        {activeSlide === 2 && (
          <motion.div layoutId="pagination-dots" className={dotStyles} />
        )}
      </Button>
      <Button type="pagination-dots" clickHandler={() => slideHandler(3)}>
        {activeSlide === 3 && (
          <motion.div layoutId="pagination-dots" className={dotStyles} />
        )}
      </Button>
      <Button type="pagination-dots" clickHandler={() => slideHandler(4)}>
        {activeSlide === 4 && (
          <motion.div layoutId="pagination-dots" className={dotStyles} />
        )}
      </Button>
    </>
  );
};

const Numbers = ({ activeSlide, slideHandler }) => {
  const dotStyles = 'absolute top-0 size-full bg-white rounded-full z-10';

  return (
    <>
      <Button type="pagination-numbers" clickHandler={() => slideHandler(1)}>
        <span className={`relative z-20 ${activeSlide === 1 && 'text-navy'}`}>
          1
        </span>
        {activeSlide === 1 && (
          <motion.div layoutId="pagination-numbers" className={dotStyles} />
        )}
      </Button>
      <Button type="pagination-numbers" clickHandler={() => slideHandler(2)}>
        <span className={`relative z-20 ${activeSlide === 2 && 'text-navy'}`}>
          2
        </span>
        {activeSlide === 2 && (
          <motion.div layoutId="pagination-numbers" className={dotStyles} />
        )}
      </Button>
      <Button type="pagination-numbers" clickHandler={() => slideHandler(3)}>
        <span className={`relative z-20 ${activeSlide === 3 && 'text-navy'}`}>
          3
        </span>
        {activeSlide === 3 && (
          <motion.div layoutId="pagination-numbers" className={dotStyles} />
        )}
      </Button>
    </>
  );
};

const Pagination = ({ orientationStyles, type, activeSlide, slideHandler }) => {
  return (
    <div
      className={`flex gap-4 w-fit ${orientationStyles}
        ${type === 'dots' && 'xl:gap-10'} ${type === 'numbers' && 'xl:gap-8'}`}>
      {type === 'dots' && (
        <Dots activeSlide={activeSlide} slideHandler={slideHandler} />
      )}
      {type === 'numbers' && (
        <Numbers activeSlide={activeSlide} slideHandler={slideHandler} />
      )}
    </div>
  );
};

export default Pagination;
