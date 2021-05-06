const Hero = (): JSX.Element => {
  return (
    <div>
      <div className="bg-gray-900 flex flex-col lg:flex-row items-center space-x-0 lg:space-x-16 justify-center">
        <div className="hidden lg:flex justify-center items-center pt-16 pb-12 lg:pt-24 lg:pb-24">
          <div className="flex flex-col justify-center items-center space-y-20 pl-10">
            <div className="text-8xl italic text-gray-50 flex flex-col">
              <div className="h-40 w-44 pl-8 font-semibold bg-blue-700 rounded-xl flex items-center">
                Vigiles
              </div>{" "}
              <div className="flex font-light items-center pl-8">Analytica</div>
            </div>
            <div className="flex">
              <a
                href="#our-firm"
                className="animate-bounce transition bg-gray-300 hover:bg-gray-400 font-semibold text-2xl px-6 py-4 rounded-lg"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex relative items-center justify-center pr-10">
          {/* <div
            className="m-5 absolute h-96 bg-blue-900 opacity-40 top-0"
            style={{ width: "42.66rem" }}
          ></div> */}
          <video playsInline autoPlay muted loop placeholder="placeholder.jpg">
            <source src="hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="lg:hidden py-16 px-5">
          <div className="flex flex-col space-y-16 items-center justify-center">
            <div className="flex items-center justify-center">
              <h1 className="text-6xl text-center italic text-gray-50 bg-[#19185557] p-5 rounded-xl">
                <span className="font-semibold">Vigiles </span>
                <span className="font-light">Analytica</span>
              </h1>
            </div>
            <div className="flex">
              <a
                href="#our-firm"
                className="animate-bounce z-0 transition bg-gray-300 hover:bg-gray-400 font-semibold text-2xl px-6 py-4 rounded-lg"
              >
                Learn more
              </a>
            </div>
          </div>
          <video
            playsInline
            autoPlay
            muted
            loop
            className="pt-8 flex items-center justify-center"
          >
            <source src="hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
