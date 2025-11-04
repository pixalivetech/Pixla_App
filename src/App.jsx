import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Terms from "./Components/Policy/Terms&condition";
import Privacy from "./Components/Policy/Privacypolicy";
import Refund from "./Components/Policy/Refundpolicy";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      {/* Global font style applied here */}
      <div
        style={{
          fontFamily: "'Be Vietnam Pro', sans-serif",
        }}
        className="flex flex-col min-h-screen"
      >
        {/* Header */}
        <Header />

        {/* Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
