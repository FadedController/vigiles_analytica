const OurFirm = (): JSX.Element => {
  return (
    <div className="bg-gray-100 relative shadow-inner flex justify-center px-5 py-28">
      <div id="our-firm" className="absolute -top-10"></div>
      <div className="max-w-7xl flex flex-col space-y-5 flex-1">
        <h1 className="text-blue-900 text-4xl font-normal pb-4 uppercase">
          Our Firm
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-5 pb-4 text-xl font-light text-justify">
          <p>
            VIGILES Analytica is a threat analysis security company that
            provides tailored risk management intelligence solutions to a wide
            range of clients. Protecting your environment and assets starts with
            an advanced situational awareness of emerging threats in your area.
            We deliver timely and informed threat briefs so you and your
            organization can take an informed coursed of action and the best
            decision regarding security and threat risks.
          </p>
          <p>
            Dedicated analysts focus on your organization’s specific risk
            profile, vulnerabilities, business continuity needs, business
            requirements, and culture, providing you extensive support in-office
            or remote
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFirm;
