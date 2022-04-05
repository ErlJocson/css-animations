import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Home, Slide, Reveal, Jump, Spin } from "./components/Pages";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route element={<Home />} path="/css-animations" />
          <Route element={<Slide />} path="/slide" />
          <Route element={<Reveal />} path="/reveal" />
          <Route element={<Jump />} path="/jump" />
          <Route element={<Spin />} path="/spin" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
