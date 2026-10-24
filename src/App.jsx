import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './components/layout/AppLayout';
import GlobalStyles from './styles/GlobalStyles';
import ScrollToTop from './components/common/ScrollToTop';
import PujaServices from './pages/PujaServices';
import Pandits from './pages/Pandits';
import Astrology from './pages/Astrology';
import AstrologyDetails from './pages/AstrologyDetails';
import PujaDetails from './pages/PujaDetails';
import Register from './pages/Register';
import Founder from './pages/Founder';
import NotFound from './pages/not-found';

function App() {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <Routes>
        {/* The Layout wraps all these child routes */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/poojas" element={<PujaServices />} />
          <Route path="/poojas/:id" element={<PujaDetails />} />
          <Route path="/pandits" element={<Pandits />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/astrology/:id" element={<AstrologyDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/founder" element={<Founder />} />

          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
