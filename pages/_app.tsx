import "tailwindcss/tailwind.css";
import "../styles/styles.css";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import { FormspreeProvider } from "@formspree/react";

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1673026586019888899">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp;
