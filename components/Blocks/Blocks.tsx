import Block from "./Block";

const Blocks = (): JSX.Element => {
  const data: {
    content?: JSX.Element;
    image?: string;
    id?: string;
    inverted?: boolean;
  }[] = [
    {
      content: (
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl tracking-widest uppercase text-blue-900 font-normal">
            Why Us
          </h1>
          <p className="text-xl font-light">
            With the <span className="font-semibold">polarization</span> of the
            media, the <span className="font-semibold">censorship</span> of
            accurate information, the coming{" "}
            <span className="font-semibold">economic crisis</span> and the
            increase in crime due to the{" "}
            <span className="font-semibold">COVID-19 pandemic</span>, a need to
            have accurate situational awareness has risen in order to properly
            anticipate and evaluate emerging risks in your community to protect
            what matters the most to you.
          </p>
          <p className="text-xl font-light">
            <span className="font-semibold">VIGILES</span> offers to you that
            solution. Relevant, accurate, unbiased, threat briefs for you to
            take proper action on security measures or advice your clientele
            accordingly.
          </p>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1485056981035-7a565c03c6aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      id: "why-us",
      inverted: true,
    },
    {
      content: (
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl tracking-widest uppercase text-blue-900 font-normal">
            Our Team
          </h1>
          <p className="text-xl font-light">
            VIGILES analytical division is composed by a{" "}
            <span className="font-semibold">diverse team</span> bringing
            experience from all relevant security fields.{" "}
            <span className="font-semibold">Highly trained</span> in
            investigation, research, and analysis our team is committed into
            producing tailored reporting for you and your organization. Because
            our analyst are dedicated to your business, they can provide a
            forward-looking assessment that{" "}
            <span className="font-semibold">anticipates</span> incidents or
            trends that could impact{" "}
            <span className="font-semibold">
              business continuity and personnel safety
            </span>
            .
          </p>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1480944657103-7fed22359e1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      id: "our-team",
      inverted: false,
    },
    {
      content: (
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl tracking-widest uppercase text-blue-900 font-normal">
            Our Mission
          </h1>
          <p className="text-xl font-light">
            Identification and assessment of threats to your operations, assets
            and personnel, through the monitoring and analyzing global and
            regional events, with a focus on the issues unique to your business
            or personal operations.
          </p>
          <p className="text-xl font-light">
            Regularly scheduled briefings that capture significant and relevant
            incidents that affect you, your business & your employees.
          </p>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1584597397904-ca34a579a7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: "our-mission",
      inverted: true,
    },
    {
      content: (
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl tracking-widest uppercase text-blue-900 font-normal">
            STAY UP-TO-DATE ON THE LATEST SECURITY THREATS
          </h1>
          <ul className="text-xl font-light list-item">
            <li>- Significant crime reports</li>
            <li>- Wanted in the area</li>
            <li>- Police warning</li>
            <li>- Emerging trends</li>
            <li>- Crime statistics</li>
            <li>- Heat maps and crime areas</li>
            <li>- Homeless camps</li>
            <li>- Cyber threats</li>
            <li>- Upcoming protest in your area </li>
            <li>- Scam advisory</li>
            <li>- International travel warning updates</li>
            <li>- Political/civil unrest</li>
          </ul>
        </div>
      ),
      id: "threats",
      image:
        "https://images.unsplash.com/photo-1557098335-a82a4f429af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=703&q=80",
      inverted: false,
    },
    {
      content: (
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl tracking-widest uppercase text-blue-900 font-normal">
            Travel Safety Briefs
          </h1>
          <p className="text-xl font-light">
            Make sure your personnel have the destination risk intelligence they
            need so that they are aware of issues in their location and have the
            appropriate advice to mitigate those concerns. Travel briefs provide
            a comprehensive understanding of the risks associated with a
            location, factored around your itinerary and dates of the trip.
          </p>
          <p className="text-xl font-light">
            Topics including issues related to security, crime, effectiveness of
            local law enforcement, kidnapping, lodging reviews, health concerns,
            political/civil unrest, infrastructure, and health topics, route
            overviews, specific areas of concern, and cultural considerations.
          </p>
        </div>
      ),
      id: "travel",
      image:
        "https://images.unsplash.com/photo-1605803283706-9af568041f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80",
      inverted: true,
    },
    {
      content: (
        <div className="flex flex-col space-y-5">
          <h1 className="text-3xl tracking-widest uppercase text-blue-900 font-normal">
            FEEL SAFE AND INFORMED EVERYWHERE
          </h1>
          <p className="text-xl font-light">
            Understand the risks that face you and what needs to be implemented
            to mitigate those risks. VIGILES will conduct a thorough examination
            and assessment of the risk factors of a location (region, province,
            state, city, or neighborhood). address key concerns relevant to your
            organization to cover the broader concerns of the location,
            including security, political and geopolitical considerations,
            business conduct concerns, transportation and infrastructure,
            communications availability and regulations, and health issues.
          </p>
        </div>
      ),
      id: "safety",
      image:
        "https://images.unsplash.com/photo-1532696048130-58b5234bea5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80",
      inverted: false,
    },
  ];

  return (
    <div className="bg-white">
      {data.map((block) => (
        <Block
          content={block.content}
          image={block.image}
          inverted={block.inverted}
          id={block.id}
          key={block.id}
        />
      ))}
    </div>
  );
};

export default Blocks;
