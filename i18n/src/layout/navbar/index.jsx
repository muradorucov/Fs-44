import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition ${isActive
      ? "bg-black text-white"
      : "text-gray-700 hover:bg-gray-100"
    }`;
  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <header className="shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          {t("logo")}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            {t("navbar.home")}
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            {t("navbar.contact")}
          </NavLink>
        </nav>

        <select onChange={changeLang}>
          <option value="az">az</option>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;