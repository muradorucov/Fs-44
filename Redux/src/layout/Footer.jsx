import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold mb-3">ShopApp</h2>
          <p className="text-sm text-gray-400">
            Simple e-commerce UI built with React & Tailwind.
            Clean, fast və boş-boş şeylərsiz.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Navigation</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white transition">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Contact</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>Email: support@shopapp.com</li>
            <li>Phone: +994 50 000 00 00</li>
            <li>Location: Baku, Azerbaijan</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} ShopApp. All rights reserved.
      </div>
    </footer>
  );
}