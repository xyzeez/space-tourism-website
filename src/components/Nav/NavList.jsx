import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const NavList = ({ relativeStyles, navState, navStateHandler }) => {
  return (
    <AnimatePresence>
      {navState && (
        <motion.div
          className={`${relativeStyles} flex flex-col gap-y-20 w-full max-w-64 md:max-w-full h-full max-h-screen md:max-h-auto pt-8 md:pt-0 md:pr-10 pl-8 md:pl-28 bg-navy/15 md:bg-white/5 backdrop-blur-[80px] xl:before:absolute xl:before:w-[min(100%,560px)] xl:before:h-[1px] xl:before:top-[calc(50%-0.5px)] xl:before:-left-[80%] xl:before:bg-white`}
          initial={{ x: '100%' }}
          animate={{ x: 1 }}
          exit={{ x: '100%' }}
          transition={{ ease: 'easeInOut' }}>
          <button className="mr-6 self-end md:hidden" onClick={navStateHandler}>
            <img
              src="/assets/shared/icon-close.svg"
              alt=""
              className="w-6 h-[21px]"
            />
          </button>
          <menu className="flex flex-col md:flex-row gap-y-8 gap-x-12">
            <li className="border-r-4 md:border-r-0 md:border-b-4 md:py-[38.5px] border-transparent has-[:hover]:border-white/50 has-[.active]:border-white transition-colors">
              <NavLink to="home" onClick={navStateHandler}>
                <span className="nav-bold pr-3">00</span>
                <span className="nav">Home</span>
              </NavLink>
            </li>
            <li className="border-r-4 md:border-r-0 md:border-b-4 md:py-[38.5px] border-transparent has-[:hover]:border-white/50 has-[.active]:border-white transition-colors">
              <NavLink to="destination" onClick={navStateHandler}>
                <span className="nav-bold pr-3">01</span>
                <span className="nav">Destination</span>
              </NavLink>
            </li>
            <li className="border-r-4 md:border-r-0 md:border-b-4 md:py-[38.5px] border-transparent has-[:hover]:border-white/50 has-[.active]:border-white transition-colors">
              <NavLink to="crew" onClick={navStateHandler}>
                <span className="nav-bold pr-3">02</span>
                <span className="nav">Crew</span>
              </NavLink>
            </li>
            <li className="border-r-4 md:border-r-0 md:border-b-4 md:py-[38.5px] border-transparent has-[:hover]:border-white/50 has-[.active]:border-white transition-colors">
              <NavLink to="technology" onClick={navStateHandler}>
                <span className="nav-bold pr-3">03</span>
                <span className="nav">Technology</span>
              </NavLink>
            </li>
          </menu>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavList;
