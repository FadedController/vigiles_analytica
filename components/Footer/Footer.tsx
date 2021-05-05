import Logo from "../Logo/Logo";

const Footer = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center bg-gray-200">
      <div className="max-w-7xl flex w-full py-10 px-5">
        <div>
          <Logo />
        </div>
        <div className="flex flex-1 justify-end items-center">
          <p className="font-light">© Vigiles Analytica | Canada</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
