import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import PageNotFound from './pages/PageNotFound';

// Components
import AppLayout from './components/AppLayout';

// Variables
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'destination',
        element: <Navigate replace to="/destination/moon" />,
      },
      {
        path: 'destination/:tab',
        element: <Destination />,
      },
      {
        path: 'crew',
        element: <Crew />,
      },
      {
        path: 'technology',
        element: <Technology />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
