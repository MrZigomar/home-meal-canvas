import sapLogo from "@/assets/sap-logo.png";

const Footer = () => (
  <footer className="py-8 px-6 bg-foreground text-primary-foreground/60 text-center font-body text-sm">
    <div className="flex justify-center mb-4">
      <img
        src={sapLogo}
        alt="Logo Service à la Personne agréé"
        width={80}
        height={80}
        loading="lazy"
        className="w-20 h-20 rounded-full bg-primary-foreground/90 p-2"
      />
    </div>
    <p>© {new Date().getFullYear()} Poivre & Sel — Batchcooking à domicile. Tous droits réservés.</p>
  </footer>
);

export default Footer;
