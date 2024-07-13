export const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

export const debouce = (func, delay = 100) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
