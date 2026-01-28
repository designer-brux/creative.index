import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
