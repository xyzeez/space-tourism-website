import { motion } from 'framer-motion';
import Button from './Button';

const Pagination = ({ activeSlide, slideHandler }) => {
  const dotStyles = 'absolute top-0 size-full bg-white rounded-full';

  return (
    <div className="flex flex-row gap-4 xl:gap-10 w-fit">
      <Button type="pagination-s" clickHandler={() => slideHandler(0)}>
        {activeSlide === 0 ? (
          <motion.div layoutId="pagination" className={dotStyles} />
        ) : null}
      </Button>
      <Button type="pagination-s" clickHandler={() => slideHandler(1)}>
        {activeSlide === 1 ? (
          <motion.div layoutId="pagination" className={dotStyles} />
        ) : null}
      </Button>
      <Button type="pagination-s" clickHandler={() => slideHandler(2)}>
        {activeSlide === 2 ? (
          <motion.div layoutId="pagination" className={dotStyles} />
        ) : null}
      </Button>
      <Button type="pagination-s" clickHandler={() => slideHandler(3)}>
        {activeSlide === 3 ? (
          <motion.div layoutId="pagination" className={dotStyles} />
        ) : null}
      </Button>
    </div>
  );
};

export default Pagination;
