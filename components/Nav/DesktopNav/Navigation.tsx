import Logo from "../../Logo/Logo";

const DesktopNav = (): JSX.Element => {
  return (
    <div className="hidden md:block sticky top-0 z-10">
      <nav className="flex bg-gray-200 justify-center px-5 py-6">
        <div className="flex flex-1 max-w-7xl">
          <div>
            {/* <img src="logo.png" className="h-20" /> */}
            <Logo />
          </div>
          <ul className="flex font-normal space-x-8 lg:space-x-14 flex-row flex-1 text-xl justify-end items-center tracking-widest">
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DesktopNav;
