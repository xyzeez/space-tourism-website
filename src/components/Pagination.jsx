import Button from './Button';

const Pagination = ({ activeSlide, slideHandler }) => {
  return (
    <div className="flex flex-row gap-4 xl:gap-10 w-fit">
      <Button
        type="pagination-s"
        active={activeSlide === 0}
        clickHandler={() => slideHandler(0)}></Button>
      <Button
        type="pagination-s"
        active={activeSlide === 1}
        clickHandler={() => slideHandler(1)}></Button>
      <Button
        type="pagination-s"
        active={activeSlide === 2}
        clickHandler={() => slideHandler(2)}></Button>
      <Button
        type="pagination-s"
        active={activeSlide === 3}
        clickHandler={() => slideHandler(3)}></Button>
    </div>
  );
};

export default Pagination;
