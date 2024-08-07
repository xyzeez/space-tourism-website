const Button = ({ children, type = 'display', clickHandler }) => {
  const buttonStyles = {
    display:
      'relative heading-s text-navy text-center uppercase bg-white size-36 md:size-[272px] cursor-pointer z-[1] rounded-full before:absolute before:-top-0 before:-bottom-0 before:-right-0 before:-left-0 before:-z-[1] before:bg-transparent before:rounded-full before:transition-all before:duration-500 before:ease-out [&:hover]:before:bg-white/10 [&:hover]:before:scale-[2] md:[&:hover]:before:scale-150',
    'pagination-dots':
      'relative size-[10px] xl:size-[15px] rounded-full cursor-pointer bg-white/25 hover:bg-ashe',
    'pagination-numbers':
      'relative heading-s text-center text-white size-10 md:size-14 xl:size-20 bg-transparent border border-white/25 hover:border-white rounded-full cursor-pointer',
  };

  const handleClick = (e) => {
    e.preventDefault();
    clickHandler();
  };

  return (
    <button onClick={handleClick} className={buttonStyles[type]}>
      {children}
    </button>
  );
};

export default Button;
