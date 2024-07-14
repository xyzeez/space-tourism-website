import Logo from '../Logo';
import NavMenu from './NavMenu';

const NavBar = ({ relativeStyles }) => {
  return (
    <header
      className={`${relativeStyles} flex items-center gap-10 px-6 md:pr-0 md:pl-10 xl:pl-16 z-50`}>
      <Logo />
      <NavMenu />
    </header>
  );
};

export default NavBar;
