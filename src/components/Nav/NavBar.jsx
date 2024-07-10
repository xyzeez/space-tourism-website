import Logo from '../Logo';
import NavMenu from './NavMenu';

const NavBar = () => {
  return (
    <div className="fixed top-0 xl:top-10 w-full flex items-center justify-between px-6 md:pr-0">
      <Logo />
      <NavMenu />
    </div>
  );
};

export default NavBar;
