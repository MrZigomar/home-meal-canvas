import { Mail, MessageCircle, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  const handleWhatsApp = () => {
    const num = ["33", "6", "95", "38", "54", "67"].join("");
    window.open(`https://wa.me/${num}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-3 font-body">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Parlons de vos repas
          </h2>
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto text-lg">
            Envie d'essayer ? Contactez-moi pour discuter de vos besoins et planifier votre première session.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <a href="mailto:julien@poivreetsel.kitchen" className="flex items-center gap-4 p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
            <Mail className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60">Email</p>
              <p className="font-body font-bold">julien@poivreetsel.kitchen</p>
            </div>
          </a>
          <button onClick={handleWhatsApp} className="flex items-center gap-4 p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors text-left">
            <MessageCircle className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60">WhatsApp</p>
              <p className="font-body font-bold">Discutons ensemble</p>
            </div>
          </button>
          <div className="flex items-center gap-4 p-6 rounded-lg bg-primary-foreground/10">
            <MapPin className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60">Zone</p>
              <p className="font-body font-bold">Combourg / Dinan / Saint-Malo</p>
            </div>
          </div>
          <a href="https://instagram.com/poivreetsel.kitchen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
            <Instagram className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60">Instagram</p>
              <p className="font-body font-bold">@poivreetsel.kitchen</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
