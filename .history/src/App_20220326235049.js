import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <Router>
      <nav>
        <Link className="btn" to="/">Home</Link>
        <Link className="btn"  to="/about">About</Link>
        <Link className="btn"  to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route   path="/" element={<Home  />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
git reset --hard HEAD~2
export default App;
