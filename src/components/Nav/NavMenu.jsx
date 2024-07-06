import { useState } from 'react';
import NavList from './NavList';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setNavState = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <nav className="py-8">
      <button onClick={setNavState}>
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
