import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Home, Slide, Reveal } from "./components/Pages";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route element={<Home />} path="/css-animations" />
          <Route element={<Slide />} path="/slide" />
          <Route element={<Reveal />} path="/reveal" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
