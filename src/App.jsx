import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainApp from "./pages/MainApp";

function App() {
  return (
    <Router className="m-auto" >
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<MainApp />} />
        </Routes>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
