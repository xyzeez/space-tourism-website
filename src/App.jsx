import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Destination from './pages/Destination';
import { loader as destinationLoader } from './pages/Destination';
import Crew from './pages/Crew';
import { loader as crewLoader } from './pages/Crew';
import Technology from './pages/Technology';
import { loader as technologyLoader } from './pages/Technology';
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
        loader: destinationLoader,
      },
      {
        path: 'crew',
        element: <Crew />,
        loader: crewLoader,
      },
      {
        path: 'technology',
        element: <Technology />,
        loader: technologyLoader,
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
