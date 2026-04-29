import sapLogo from "@/assets/sap-logo.png";
import urssafLogo from "@/assets/urssaf-logo.jpg";

const Footer = () => (
  <footer className="py-8 px-6 bg-foreground text-primary-foreground/60 text-center font-body text-sm">
    <div className="flex justify-center items-center gap-6 mb-4">
      <img
        src={sapLogo}
        alt="Logo Service à la Personne agréé"
        width={100}
        height={100}
        loading="lazy"
      />
      <img
        src={urssafLogo}
        alt="Logo Urssaf - Au service de notre protection sociale"
        height={100}
        loading="lazy"
        className="h-[100px] w-auto bg-white p-2 rounded-sm"
      />
    </div>
    <p>© {new Date().getFullYear()} Poivre & Sel — Batchcooking à domicile. Tous droits réservés.</p>
  </footer>
);

export default Footer;
