import { NavLink, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Tabs = () => {
  const { tab } = useParams();

  return (
    <div className="flex flex-row gap-8 *:pb-[15px] *:nav *:uppercase *:text-blue w-fit">
      <NavLink
        to="/destination/moon"
        className="relative [&.active]:text-white">
        Moon
        {tab === 'moon' ? (
          <motion.span
            layoutId="tabs"
            className="absolute -bottom-[1px] left-0 right-0 h-1 bg-white"></motion.span>
        ) : null}
      </NavLink>
      <NavLink
        to="/destination/mars"
        className="relative [&.active]:text-white">
        Mars
        {tab === 'mars' ? (
          <motion.span
            layoutId="tabs"
            className="absolute -bottom-[1px] left-0 right-0 h-1 bg-white"></motion.span>
        ) : null}
      </NavLink>
      <NavLink
        to="/destination/europa"
        className="relative [&.active]:text-white">
        europa
        {tab === 'europa' ? (
          <motion.span
            layoutId="tabs"
            className="absolute -bottom-[1px] left-0 right-0 h-1 bg-white"></motion.span>
        ) : null}
      </NavLink>
      <NavLink
        to="/destination/titan"
        className="relative [&.active]:text-white">
        titan
        {tab === 'titan' ? (
          <motion.span
            layoutId="tabs"
            className="absolute -bottom-[1px] left-0 right-0 h-1 bg-white"></motion.span>
        ) : null}
      </NavLink>
    </div>
  );
};

export default Tabs;
