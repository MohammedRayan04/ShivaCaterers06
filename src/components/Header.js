import Link from "next/link";
import { Logo } from "@/assets/images";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center w-full h-24.5 py-4 shadow-bottom px-4 bg-white">
      <div className="ml-8">
        <Image src={Logo} alt="logo" width={180} height={150} priority />
      </div>

      {/* Desktop menu */}
      <div className="hidden sm:flex">
        <ul className="flex gap-8 list-none font-bold items-center text-black">
          {["Home", "Menu", "Contact", "About Us"].map((item, i) => (
            <li key={i}>
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                legacyBehavior
              >
                <a className="hover:text-red transition-colors duration-500">
                  {item}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop button */}
      <div className="hidden sm:flex m-24">
        <Link href="/contact-us" legacyBehavior>
          <a className="btn-primary font-bold text-white py-2 px-4">
            Book Now
          </a>
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden relative z-10">
        <button onClick={toggleMenu} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {menuOpen && (
          <ul className="absolute right-0 top-16 w-56 bg-black text-cyan-50 font-bold flex flex-col p-4 gap-4 shadow-lg rounded-lg">
            {["Home", "Menu", "Contact", "About Us"].map((item, i) => (
              <li key={i}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  legacyBehavior
                >
                  <a className="hover:text-red transition-colors duration-500">
                    {item}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact-us" legacyBehavior>
                <a className="btn-primary text-white py-2 px-4">
                  Book Now
                </a>
              </Link>
            </li>
          </ul>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .shadow-bottom {
            box-shadow: 0 4px 2px -2px gray;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;

