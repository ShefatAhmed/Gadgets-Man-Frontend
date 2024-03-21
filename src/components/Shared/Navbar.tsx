"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const Links = [
    { href: "/", label: "Home" },
    { href: "/categories", label: "Categories" },
    { href: "/products", label: "Products" },
    { href: "/flash-sale", label: "Flash Sale" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ].filter(Boolean);
  return (
    <nav>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/">
            <p className="text-2xl font-extrabold uppercase">
              <span className="text-red-500">Gadgets</span>Man
            </p>
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-white w-full p-4 z-10">
            {Links.map((link, index) => (
              <Link key={index} href={link.href}>
                <span className="block text-gray-800 py-2">{link.label}</span>
              </Link>
            ))}
          </div>
        )}
        <div className="hidden lg:flex items-center space-x-4">
          {Links.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="hover:underline">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;