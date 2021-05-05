import Head from "next/head";
import Blocks from "../components/Blocks/Blocks";
import DesktopNav from "../components/Nav/DesktopNav/Navigation";
import OurFirm from "../components/Firm/OurFirm";
import Hero from "../components/Hero/Hero";
import MobileNav from "../components/Nav/MobileNav/MobileNav";
import Quote from "../components/Quote/Quote";
import Footer from "../components/Footer/Footer";
import CarouselArea from "../components/Carousel/Carousel";

const Index = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Vigiles Analytica</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <DesktopNav />
      <MobileNav />
      <Hero />
      <OurFirm />
      <Blocks />
      <Quote />
      <CarouselArea />
      <Footer />
    </div>
  );
};

export default Index;
