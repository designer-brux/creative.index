import { GoogleAnalytics } from "@next/third-parties/google";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [consent, setConsent] = useState("denied");

  useEffect(() => {
    // Busca o consentimento salvo no cookie ao carregar a página
    const savedConsent = getCookie("local-consent");
    if (savedConsent === "granted") {
      setConsent("granted");
    }
  }, []);

  // O console log para depuração (opcional)
  if (typeof window !== "undefined") {
    console.log("Analytics ID:", gaId, "| Consentimento:", consent);
  }

  return (
    <>
      {/* Google Analytics respeitando o estado de consentimento */}
      {gaId && (
        <GoogleAnalytics
          gaId={gaId}
          strategy="afterInteractive"
          consent={consent}
        />
      )}

      <CookieBanner />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

// ESTA LINHA É A MAIS IMPORTANTE:
export default MyApp;
