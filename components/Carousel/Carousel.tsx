// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Slide from "./Slide";
import { useRef, useState } from "react";

SwiperCore.use([Navigation]);

const CarouselArea = () => {
  const nextRef = useRef(null);
  const previousRef = useRef(null);
  const [buttonState, setButtonState] = useState(true);
  const slideData: {
    city: string;
    service: string;
    description: string;
    image: string;
  }[] = [
    {
      city: "Vancouver",
      service: "CRIME AND THREAT BRIEF",
      description:
        "Monthly or bi-monthly accurate, relevant, information for your situational awareness",
      image: "/products/vancouver.jpg",
    },
    {
      city: "Victoria",
      service: "CRIME AND THREAT BRIEF",
      description:
        "Monthly or bi-monthly accurate, relevant, information for your situational awareness",
      image: "/products/victoria.jpg",
    },
    {
      city: "British Columbia",
      service: "CRIME AND THREAT BRIEF",
      description:
        "Monthly or bi-monthly accurate, relevant, information for your situational awareness",
      image: "/products/bc.jpg",
    },
    {
      city: "Canada",
      service: "THREATS BRIEF",
      description:
        "Current trends that are important to you; seeing beyond the immediate mainstream issues to comprehend the broader implications of these trends.",
      image: "/products/canada.jpg",
    },
    {
      city: "World",
      service: "EXECUTIVE TRAVEL SAFETY BRIEF ADVISOR",
      description:
        "Planning on going somewhere? Out team can help you with important information on cities, neighborhoods, and countries for you to have a safe trip",
      image: "/products/world-travel.jpg",
    },
    {
      city: "World",
      service: "THREATS BRIEF",
      description:
        "Stay informed with global noteworthy, risk-related events, geopolitical analysis and developments around the world that may impact on organizational operations in the near-term",
      image: "/products/world-threat.jpg",
    },
    {
      city: "World",
      service: "LGBTQ SAFETY",
      description:
        "Ensure that all your personnel, regardless of sexual orientation, are informed and aware of situations and developments that could impact on their safety. Our report covers global or regional attitudes, events, and issues that have the potential to affect the safety of LGBTQ personnel.",
      image: "/products/world-lgbtq.jpg",
    },
    {
      city: "Tailored",
      service: "LOCATION SPECIFIC ASSESMENT",
      description:
        "Understand the risks that face you and what needs to be implemented to mitigate those risks. VIGILES will conduct a thorough examination and assessment of the risk factors of a location (region, province, state, city, or neigborrhood). ",
      image: "/products/tailored-assestment.jpg",
    },
    {
      city: "Tailored",
      service: "CRIME AND THREAT BRIEF",
      description:
        "Monthly or bi-monthly accurate, relevant, information for your situational awareness",
      image: "/products/tailored-brief.jpg",
    },
    {
      city: "Tailored",
      service: "INTELLIGENCE ALERTS",
      description:
        "Tell us about your security concerns and we shall make a tailored report for you",
      image: "/products/tailored-alerts.jpg",
    },
  ];
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col space-y-10 py-10 px-5">
          <h1 className="text-center text-blue-900 text-4xl font-normal uppercase">
            Our Services
          </h1>
        </div>
        <div
          className="pb-20 relative"
          onMouseEnter={() => setButtonState(true)}
          onMouseLeave={() => setButtonState(false)}
        >
          <span
            ref={previousRef}
            className={`swiper-prev absolute rounded-full cursor-pointer transform rotate-180 pl-1 flex items-center justify-center z-50 xl:top-64 top-52 transition ${
              buttonState ? "opacity-80" : "opacity-0"
            } bg-white opacity-80 left-2 text-2xl h-10 w-10 material-icons`}
          >
            arrow_forward_ios
          </span>
          <span
            ref={nextRef}
            className={`swiper-next absolute rounded-full cursor-pointer rotate pl-1 flex items-center justify-center z-50 xl:top-64 top-52 bg-white transition ${
              buttonState ? "opacity-80" : "opacity-0"
            } right-2 text-2xl h-10 w-10 material-icons`}
          >
            arrow_forward_ios
          </span>
          <Swiper
            navigation={{
              nextEl: nextRef.current,
              prevEl: previousRef.current,
            }}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                // @ts-ignore
                swiper.params.navigation.prevEl = previousRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            spaceBetween={5}
            slidesPerView={3}
            className="hidden lg:block"
          >
            {slideData.map((data) => (
              <SwiperSlide key={data.image}>
                <Slide
                  city={data.city}
                  description={data.description}
                  image={data.image}
                  service={data.service}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            navigation={{
              nextEl: nextRef.current,
              prevEl: previousRef.current,
            }}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                // @ts-ignore
                swiper.params.navigation.prevEl = previousRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            spaceBetween={5}
            slidesPerView={2}
            className="hidden sm:block lg:hidden"
          >
            {slideData.map((data) => (
              <SwiperSlide key={data.image}>
                <Slide
                  city={data.city}
                  description={data.description}
                  image={data.image}
                  service={data.service}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            navigation={{
              nextEl: nextRef.current,
              prevEl: previousRef.current,
            }}
            onSwiper={(swiper) => {
              // Delay execution for the refs to be defined
              setTimeout(() => {
                // Override prevEl & nextEl now that refs are defined
                // @ts-ignore
                swiper.params.navigation.prevEl = previousRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            spaceBetween={5}
            slidesPerView={1}
            className="sm:hidden"
          >
            {slideData.map((data) => (
              <SwiperSlide key={data.image}>
                <Slide
                  city={data.city}
                  description={data.description}
                  image={data.image}
                  service={data.service}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CarouselArea;
