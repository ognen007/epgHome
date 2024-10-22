import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { Service } from "./components/pages/Service";
import { Projects } from './components/pages/Projects';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};
