import { useEffect, useState } from 'react';
import NavList from './NavList';
import useWindowWidth from '../../hooks/useWindowWidth';

const NavMenu = () => {
  const [windowWidth] = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  const setNavState = () => {
    if (windowWidth >= 768) return;
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    windowWidth >= 768 && setIsOpen(true);
  }, [windowWidth]);

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
