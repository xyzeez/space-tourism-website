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
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="destination" element={<Navigate replace to="moon" />} />
          <Route path="destination/:tab" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
