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
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateAvatar = () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      setAvatar(userData?.avatar || null);
    };

    updateAvatar();
    window.addEventListener("storage", updateAvatar);
    const interval = setInterval(updateAvatar, 1000);

    return () => {
      window.removeEventListener("storage", updateAvatar);
      clearInterval(interval);
    };
  }, []);

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

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Cart", path: "/cart" },
    { label: "Favorites", path: "/favorites" },
    { label: "Orders", path: "/orders" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50"
                >
                  <Link to="/profile" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    My Profile
                  </Link>
                  <Link to="/orders" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    My Orders
                  </Link>
                  <Link to="/about" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    About
                  </Link>
                  <Link to="/signup" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Signup
                  </Link>
                  <Link to="/login" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Login
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.clear();
                      window.location.href = "/login";
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 dark:text-gray-100 text-2xl"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:hidden flex flex-col px-6 pb-4 gap-1 bg-white dark:bg-gray-900 shadow-md"
          >
            <div className="flex items-center gap-3 py-2">
              {avatar ? (
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xl">
                  👤
                </div>
              )}
              <NavLink
                to="/profile"
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
                My Profile
              </NavLink>
            </div>

            {navLinks.map(({ label, path }, idx) => (
              <NavLink
                key={idx}
                to={path}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-gray-800 dark:text-gray-200 hover:text-blue-600"
              >
                {label}
              </NavLink>
            ))}

            <NavLink to="/signup" onClick={() => setOpen(false)} className="py-2 text-base text-gray-800 dark:text-gray-200 hover:text-blue-600">Signup</NavLink>
            <NavLink to="/login" onClick={() => setOpen(false)} className="py-2 text-base text-gray-800 dark:text-gray-200 hover:text-blue-600">Login</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className="py-2 text-base text-gray-800 dark:text-gray-200 hover:text-blue-600">About</NavLink>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">🌙</span>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="w-5 h-5 accent-blue-600"
                />
              </div>
              <button
                onClick={() => {
                  localStorage.clear();
                  setOpen(false);
                  window.location.href = "/login";
                }}
                className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
