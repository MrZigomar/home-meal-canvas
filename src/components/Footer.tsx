import sapLogo from "@/assets/sap-logo.png";
import urssafLogo from "@/assets/urssaf-logo.jpg";

const Footer = () => (
  <footer className="py-10 px-6 bg-foreground text-primary-foreground/60 text-center font-body text-sm">
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
      <img
        src={sapLogo}
        alt="Logo Service à la Personne agréé"
        width={100}
        height={100}
        loading="lazy"
        className="w-[100px] h-auto"
      />
      <img
        src={urssafLogo}
        alt="Logo Urssaf - Au service de notre protection sociale"
        loading="lazy"
        className="w-[100px] h-auto bg-white p-2 rounded-sm"
      />
    </div>
    <nav aria-label="Infos pratiques" className="mb-4">
      <p className="text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-2">
        Infos pratiques
      </p>
      <a
        href="/avance-immediate"
        className="text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-4 transition-colors"
      >
        L'Avance immédiate de crédit d'impôt
      </a>
    </nav>
    <p>© {new Date().getFullYear()} Poivre & Sel — Batchcooking à domicile. Tous droits réservés.</p>
  </footer>
);

export default Footer;
