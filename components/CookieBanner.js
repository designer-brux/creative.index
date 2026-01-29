import { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já tomou uma decisão anteriormente
    const consent = getCookie("local-consent");
    if (consent === undefined) {
      setShowBanner(true);
    }
  }, []);

  const acceptConsent = () => {
    setCookie("local-consent", "granted", { maxAge: 60 * 60 * 24 * 365 });
    setShowBanner(false);
    // Recarrega para aplicar o consentimento no GA
    window.location.reload();
  };

  const declineConsent = () => {
    setCookie("local-consent", "denied", { maxAge: 60 * 60 * 24 * 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
        Utilizamos cookies para melhorar sua experiência e entender como o site
        é usado. Ao aceitar, você nos ajuda a evoluir o creative.index
        continuamente.
      </p>
      <div className="cookie-btns">
        <button onClick={acceptConsent} className="btn-accept">
          Aceitar
        </button>
        <button onClick={declineConsent} className="btn-decline">
          Recusar
        </button>
      </div>
    </div>
  );
}
