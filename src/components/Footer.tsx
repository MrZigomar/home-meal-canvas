import sapLogo from "@/assets/sap-logo.png";

const Footer = () => (
  <footer className="py-8 px-6 bg-foreground text-primary-foreground/60 text-center font-body text-sm">
    <div className="flex justify-center mb-4">
      <img
        src={sapLogo}
        alt="Logo Service à la Personne agréé"
        width={100}
        height={100}
        loading="lazy"
      />
    </div>
    <p>© {new Date().getFullYear()} Poivre & Sel — Batchcooking à domicile. Tous droits réservés.</p>
  </footer>
);

export default Footer;
