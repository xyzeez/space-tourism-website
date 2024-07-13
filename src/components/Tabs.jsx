import { NavLink } from 'react-router-dom';

const Tabs = () => {
  return (
    <div className="flex flex-row gap-8 *:pb-[15px] *:nav *:uppercase *:text-blue *:border-b-4 *:border-transparent *:transition-colors w-fit">
      <NavLink
        to="/destination/moon"
        className="[&.active]:text-white [&.active]:border-white">
        Moon
      </NavLink>
      <NavLink
        to="/destination/mars"
        className="[&.active]:text-white [&.active]:border-white">
        Mars
      </NavLink>
      <NavLink
        to="/destination/europa"
        className="[&.active]:text-white [&.active]:border-white">
        europa
      </NavLink>
      <NavLink
        to="/destination/titan"
        className="[&.active]:text-white [&.active]:border-white">
        titan
      </NavLink>
    </div>
  );
};

export default Tabs;
