import Logo from '../Logo';
import NavMenu from './NavMenu';

const NavBar = ({ relativeStyles }) => {
  return (
    <header
      className={`${relativeStyles} flex items-center justify-between px-6 md:pr-0 md:pl-10 xl:pl-16 z-50 overflow-hidden`}>
      <Logo />
      <NavMenu />
    </header>
  );
};

export default NavBar;
