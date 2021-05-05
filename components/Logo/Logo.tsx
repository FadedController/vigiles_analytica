const Logo = (): JSX.Element => {
  return (
    <div className="flex flex-col uppercase justify-center items-center cursor-pointer">
      <a href="#">
        <div className="font-semibold text-lg">Vigiles</div>
        <div className="text-base font-light">Analytica</div>
      </a>
    </div>
  );
};

export default Logo;
