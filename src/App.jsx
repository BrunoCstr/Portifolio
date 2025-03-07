import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Portifolio } from "./pages/Portifolio";
import { OpenProject } from "./pages/OpenProject";
import ScrollToTop from "./components/functions/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation(); // Obtém a rota atual

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Portifolio />} />
        <Route path="/project/:id" element={<OpenProject />} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <Router>
      <ScrollToTop/>
      <AnimatedRoutes/>
    </Router>
  );
}