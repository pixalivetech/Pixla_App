import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./../../assets/logo1.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // reference for outside click

  // Smooth scroll or redirect
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    } else {
      window.location.href = "/";
    }
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Close menu on scroll
    const handleScrollClose = () => {
      if (menuOpen) setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScrollClose);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScrollClose);
    };
  }, [menuOpen]);

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6 md:px-24 py-12 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Pixla Logo"
            className="w-12 h-auto object-contain cursor-pointer"
            onClick={() => handleScroll("home")}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-md font-medium text-black">
          <a href="/" className="hover:text-gray-600 transition-colors">
            Home
          </a>
          {[
            { id: "about", label: "About Us" },
            { id: "why-pixla", label: "Why Pixla" },
            { id: "features", label: "App Features" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-gray-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a href="/contact" className="hover:text-gray-600 transition-colors">
            Contact Us
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleScroll("faq")}
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

      {/* Animated Compact Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed bottom-40 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-3xl py-8 px-6 flex flex-col items-center space-y-5 text-black font-medium transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        } w-[85%] sm:w-[70%] z-40`}
      >
        <a href="/" className="hover:text-gray-600 transition-colors">
          Home
        </a>
        {[
          { id: "about", label: "About Us" },
          { id: "why-pixla", label: "Why Pixla" },
          { id: "features", label: "App Features" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="hover:text-gray-600 transition-colors"
          >
            {item.label}
          </button>
        ))}
        <a href="/contact" className="hover:text-gray-600 transition-colors">
          Contact Us
        </a>
        <button
          onClick={() => handleScroll("faq")}
          className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-[#e6c200] transition-all"
        >
          Let’s Talk
        </button>
      </div>
    </header>
  );
};

export default Header;
