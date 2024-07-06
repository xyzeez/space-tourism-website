import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import PageNotFound from './pages/PageNotFound';

// Components
import AppLayout from './components/AppLayout';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
