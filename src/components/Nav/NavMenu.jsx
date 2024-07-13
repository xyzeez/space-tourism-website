import { useEffect, useState } from 'react';
import NavList from './NavList';
import useWindowWidth from '../../hooks/useWindowWidth';

const NavMenu = () => {
  const [windowWidth] = useWindowWidth();
  const isViewportLarge = windowWidth >= 768;
  const [isOpen, setIsOpen] = useState(false);

  const setNavState = () => {
    if (isViewportLarge) return;
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    setIsOpen(isViewportLarge);
  }, [isViewportLarge]);

  return (
    <nav className="py-8 md:py-0">
      <button className="md:hidden" onClick={setNavState}>
        <img
          src="/assets/shared/icon-hamburger.svg"
          alt=""
          className="w-6 h-[21px]"
        />
      </button>
      <NavList navState={isOpen} navStateHandler={setNavState} />
    </nav>
  );
};

export default NavMenu;
