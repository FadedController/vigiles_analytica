import "tailwindcss/tailwind.css";
import "../styles/styles.css";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import { FormspreeProvider } from "@formspree/react";

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1671634153453387709">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp;
