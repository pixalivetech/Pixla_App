import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./../../assets/logo1.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll function (for same-page navigation)
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenuOpen(false); // close mobile menu after click
    }
  };

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6 md:px-24 py-12 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Pixla Logo"
            className="w-12 h-auto object-contain cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-md font-medium text-black">
          <a
            href="/"
            onClick={() => handleScroll("home")}
            className="hover:text-gray-600 transition-colors"
          >
            Home
          </a>

          {[
            { id: "about", label: "About Us" },
            { id: "why-pixla", label: "Why Pixla" },
            { id: "features", label: "App Features" },
            { id: "footer", label: "Contact Us" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-gray-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-[#e6c200] transition-all"
          >
            Let’s Talk
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-2xl mx-4 mt-2 py-4 flex flex-col items-center space-y-4 text-black font-medium">
          <a
            href="/"
            onClick={() => handleScroll("home")}
            className="hover:text-gray-600 transition-colors"
          >
            Home
          </a>

          {[
            { id: "about", label: "About Us" },
            { id: "why-pixla", label: "Why Pixla" },
            { id: "features", label: "App Features" },
            { id: "contact", label: "Contact Us" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-gray-600 transition-colors"
            >
              {item.label}
            </button>
          ))}

          {/* Mobile CTA Button */}
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-[#e6c200] transition-all"
          >
            Let’s Talk
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
