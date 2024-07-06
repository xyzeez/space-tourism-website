import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const NavList = ({ navState, navStateHandler }) => {
  return (
    <AnimatePresence>
      {navState && (
        <motion.div
          className="absolute top-0 right-0 flex flex-col gap-y-20 w-full max-w-64 h-screen pt-8 pl-8 bg-nav/15 backdrop-blur-[80px]"
          initial={{ x: '100%' }}
          animate={{ x: 1 }}
          exit={{ x: '100%' }}
          transition={{ ease: 'easeInOut' }}>
          <button className="mr-6 self-end" onClick={navStateHandler}>
            <img
              src="/assets/shared/icon-close.svg"
              alt=""
              className="w-6 h-[21px]"
            />
          </button>
          <ul className="flex flex-col gap-y-8">
            <li className="border-r-4 border-transparent has-[.active]:border-white">
              <NavLink to="home" onClick={navStateHandler}>
                <span className="nav-bold pr-3">00</span>
                <span className="nav">Home</span>
              </NavLink>
            </li>
            <li className="border-r-4 border-transparent has-[.active]:border-white">
              <NavLink to="destination" onClick={navStateHandler}>
                <span className="nav-bold pr-3">00</span>
                <span className="nav">Destination</span>
              </NavLink>
            </li>
            <li className="border-r-4 border-transparent has-[.active]:border-white">
              <NavLink to="crew" onClick={navStateHandler}>
                <span className="nav-bold pr-3">00</span>
                <span className="nav">Crew</span>
              </NavLink>
            </li>
            <li className="border-r-4 border-transparent has-[.active]:border-white">
              <NavLink to="technology" onClick={navStateHandler}>
                <span className="nav-bold pr-3">00</span>
                <span className="nav">Technology</span>
              </NavLink>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavList;
