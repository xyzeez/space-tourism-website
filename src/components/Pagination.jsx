import Button from './Button';

const Pagination = () => {
  return (
    <div className="flex flex-row gap-4 xl:gap-10 w-fit">
      <Button type="pagination-s"></Button>
      <Button type="pagination-s"></Button>
      <Button type="pagination-s"></Button>
      <Button type="pagination-s"></Button>
    </div>
  );
};

export default Pagination;
