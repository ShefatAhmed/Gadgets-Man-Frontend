"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const Links = [
    { href: "/", label: "Home" },
    { href: "/categories", label: "Categories" },
    { href: "/gadgets", label: "Products" },
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
                <span className="block font-bold text-gray-800 py-2">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        )}
        <div className="hidden lg:flex items-center space-x-4">
          {Links.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="hover:underline  font-bold">{link.label}</span>
            </Link>
          ))}
        </div>
        <div>
          {session?.user ? (
            <button onClick={() => signOut()} className="px-5 p-5 rounded-full bg-red-400">Logout</button>
          ) : (
            <Link href="/login" className="p-5 rounded-full bg-teal-400">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
