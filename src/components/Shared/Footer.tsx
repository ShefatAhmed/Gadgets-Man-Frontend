import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-col">
            <h1 className="text-center text-2xl font-bold">
              <span className="text-red-500">GADGETS</span>MAN
            </h1>
          </div>
          <div className="footer-col mx-auto">
            <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
            <ul className="flex flex-col">
              <li className="mr-4 mb-2 md:mb-0">
                <Link href="/trending-products">
                  <span className="cursor-pointer hover:text-gray-200">
                    Trending Products
                  </span>
                </Link>
              </li>
              <li className="mr-4 mb-2 md:mb-0">
                <Link href="/categories">
                  <span className="cursor-pointer hover:text-gray-200">
                    Categories
                  </span>
                </Link>
              </li>
              <li className="mr-4 mb-2 md:mb-0">
                <Link href="/about-us">
                  <span className="cursor-pointer hover:text-gray-200">
                    About Us
                  </span>
                </Link>
              </li>
              <li className="mr-4 mb-2 md:mb-0">
                <Link href="/contact-us">
                  <span className="cursor-pointer hover:text-gray-200">
                    Contact Us
                  </span>
                </Link>
              </li>
              <li className="mr-4 mb-2 md:mb-0">
                <Link href="/customer-care">
                  <span className="cursor-pointer hover:text-gray-200">
                    Customer Care
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-lg font-semibold mb-6 md:text-center">
              Follow Us
            </h4>
            <div className="flex md:justify-center">
              <a
                href="#"
                className="text-white w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-gray-900"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-white w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-gray-900"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="text-white w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-gray-900"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-white w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-gray-900"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
      <div className="text-center mt-5">
        <p className="text-sm">&copy; {new Date().getFullYear()} Gadget Man</p>
      </div>
    </footer>
  );
};

export default Footer;
