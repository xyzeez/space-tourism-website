const Button = ({
  children,
  type = 'display',
  active = false,
  clickHandler,
}) => {
  const buttonStyles = {
    display:
      'relative heading-s text-navy text-center uppercase bg-white size-36 md:size-[272px] cursor-pointer z-[1] rounded-full before:absolute before:-top-[88px] before:-bottom-[88px] before:-right-[88px] before:-left-[88px] before:-z-[1] before:bg-transparent before:rounded-full before:transition-colors before:duration-500 before:ease-in-out [&:hover]:before:bg-white/10',
    'pagination-s': `size-[10px] xl:size-[15px] rounded-full cursor-pointer hover:bg-ashe
    ${active ? 'bg-white' : 'bg-white/25'}`,
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
