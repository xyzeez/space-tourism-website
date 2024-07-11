import NavBar from './Nav/NavBar';

const AppLayout = ({ children }) => {
  return (
    <div className="relative grid grid-cols-1 grid-rows-1 bg-navy text-white">
      <NavBar />
      <div className="*:min-h-screen *:bg-no-repeat *:bg-cover *:bg-center *:bg-fixed">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
