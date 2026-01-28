import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (typeof window !== "undefined") {
    console.log("Analytics ID carregado:", gaId);
  }

  if (typeof window !== "undefined") {
    window.gtag =
      window.gtag ||
      function () {
        (window.dataLayer = window.dataLayer || []).push(arguments);
      };
    window.gtag("policy", "all", { essential: true, statistics: true });
  }

  return (
    <>
      {gaId && <GoogleAnalytics gaId={gaId} strategy="afterInteractive" />}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
