import Logo from '../Logo';
import NavMenu from './NavMenu';

const NavBar = () => {
  return (
    <div className="fixed top-0 xl:top-10 w-full flex items-center justify-between px-6 md:pr-0 md:pl-10 xl:pl-16 z-50">
      <Logo />
      <NavMenu />
    </div>
  );
};

export default NavBar;
