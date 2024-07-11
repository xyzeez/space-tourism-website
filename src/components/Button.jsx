const Button = ({ children, type = 'display' }) => {
  const buttonStyles = {
    display:
      'relative heading-s text-navy text-center uppercase bg-white size-36 md:size-[272px] cursor-pointer z-[1] rounded-full before:absolute before:-top-[88px] before:-bottom-[88px] before:-right-[88px] before:-left-[88px] before:-z-[1] before:bg-transparent before:rounded-full before:transition-colors before:duration-500 before:ease-in-out [&:hover]:before:bg-white/10',
  };
  return <button className={buttonStyles[type]}>{children}</button>;
};

export default Button;
