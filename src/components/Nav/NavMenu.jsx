import { useState } from 'react';
import NavList from './NavList';
import useViewport from '../../hooks/useViewport';

const NavMenu = () => {
  const [inViewport] = useViewport('768px');
  const [isOpen, setIsOpen] = useState(false);

  const setNavState = () => {
    if (inViewport) return;
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <nav className="py-8 md:py-0">
      <button className="md:hidden" onClick={setNavState}>
        <img
          src="/assets/shared/icon-hamburger.svg"
          alt=""
          className="w-6 h-[21px]"
        />
      </button>
      <NavList
        relativeStyles="fixed md:relative top-0 md:top-auto right-0 md:right-auto"
        navState={inViewport || isOpen}
        navStateHandler={setNavState}
      />
    </nav>
  );
};

export default NavMenu;
