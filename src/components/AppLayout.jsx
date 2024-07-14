import { Outlet } from 'react-router-dom';
import NavBar from './Nav/NavBar';

const AppLayout = () => {
  return (
    <div className="relative grid grid-cols-1 grid-rows-[auto_1fr] items-start bg-navy text-white">
      <NavBar relativeStyles="col-start-1 col-end-2 row-start-1 row-end-2 xl:mt-10" />
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 *:min-h-screen *:bg-no-repeat *:bg-cover *:bg-center *:bg-fixed">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
