import { useState } from "react";
import Logo from "../../Logo/Logo";

const MobileNav = (): JSX.Element => {
  const [navState, setNavState] = useState(false);

  return (
    <div className="md:hidden sticky top-0 z-10">
      <div className="flex bg-gray-200 justify-center items-center px-5 py-6">
        <div className="flex flex-1">
          <div className="font-semibold flex items-center">
            <Logo />
          </div>
          <div className="flex flex-1 justify-end">
            <span
              className={`cursor-pointer transition material-icons text-4xl pt-1 px-2 ${
                navState ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setNavState(false)}
            >
              close
            </span>
            <span
              className="cursor-pointer material-icons text-4xl pt-1"
              onClick={() => setNavState(!navState)}
            >
              menu
            </span>
          </div>
        </div>
      </div>
      <nav className={`${navState && "topbar-open"} topbar bg-gray-200 px-5 `}>
        <ul
          className="flex font-light space-y-3 pb-4 flex-col flex-1 text-xl tracking-widest"
          onClick={() => setNavState(false)}
        >
          <a href="#">
            <li className="transition text-blue-900 cursor-pointer hover:text-blue-700">
              Home
            </li>
          </a>
          <a href="#our-firm">
            <li className="transition cursor-pointer hover:text-gray-700">
              Our Firm
            </li>
          </a>
          <a href="#why-us">
            <li className="transition cursor-pointer hover:text-gray-700">
              Why Us
            </li>
          </a>
          <a href="#our-team">
            <li className="transition cursor-pointer hover:text-gray-700">
              Team
            </li>
          </a>
          <a href="#our-mission">
            <li className="transition cursor-pointer hover:text-gray-700">
              Mission
            </li>
          </a>
          <a href="#contact">
            <li className="transition cursor-pointer hover:text-gray-700">
              Contact
            </li>
          </a>
        </ul>
      </nav>
      {/* {navState && (
        <>
          <div className="fixed top-24 vh-80 w-screen bg-gray-50 opacity-90"></div>
        </>
      )} */}
    </div>
  );
};

export default MobileNav;
