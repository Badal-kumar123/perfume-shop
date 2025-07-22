import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);

  // 👇 Scroll-based show/hide header
  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowHeader(false); // Scroll down -> hide
      } else {
        setShowHeader(true); // Scroll up -> show
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Cart", path: "/cart" },
    { label: "Favorites", path: "/favorites" },
    { label: "Orders", path: "/orders" },
  ];

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 bg-amber-200 rounded-4xl object-contain"
          />
          <NavLink
            to="/"
            className="text-3xl font-extrabold text-gray-800 dark:text-white"
          >
            Perfume<span className="text-blue-600">Shop</span>
          </NavLink>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ label, path }, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                `text-lg font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* 🌙 Dark Mode */}
          <div className="flex items-center gap-1 pl-2 border-l border-gray-300 dark:border-gray-600 ml-2">
            <label className="flex items-center gap-2 cursor-pointer">
              🌙
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="w-5 h-5 accent-blue-600"
              />
            </label>
          </div>

          {/* 👤 Avatar */}
          <div className="relative">
            <button onClick={() => setDropdownOpen((prev) => !prev)}>
              {avatar ? (
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border border-gray-300"
                />
              ) : (
                <UserCircle className="w-8 h-8 text-gray-600 dark:text-white" />
              )}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50">
                <Link
                  to="/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  My Profile
                </Link>
                <Link
                  to="/orders"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  My Orders
                </Link>
                <Link
                  to="/about"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  About
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Login
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("avatar");
                    localStorage.removeItem("user");
                    window.location.href = "/login";
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 dark:text-gray-100 text-2xl"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col items-end px-6 pb-4 gap-1 bg-white dark:bg-gray-900 shadow-md"
          >
            {[...navLinks, { label: "About", path: "/about" }].map(
              ({ label, path }, idx) => (
                <NavLink
                  key={idx}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-right text-base py-2 transition duration-200 ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                    }`
                  }
                >
                  {label}
                </NavLink>
              )
            )}

            {/* 🌙 Dark Toggle */}
            <div className="flex items-center justify-end w-full pr-1 gap-2 pt-2">
              <label className="text-sm text-gray-700 dark:text-gray-300">
                🌙
              </label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="w-5 h-5 accent-blue-600"
              />
            </div>

            {/* 👤 Avatar in Mobile */}
            <Link to="/profile" onClick={() => setOpen(false)} className="pt-2">
              {avatar ? (
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover border border-gray-300"
                />
              ) : (
                <UserCircle className="w-8 h-8 text-gray-600 dark:text-white" />
              )}
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
