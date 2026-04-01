import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
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
          <a href="mailto:bonjour@monbatchcooking.fr" className="flex items-center gap-4 p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
            <Mail className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60">Email</p>
              <p className="font-body font-bold">bonjour@monbatchcooking.fr</p>
            </div>
          </a>
          <a href="tel:+33612345678" className="flex items-center gap-4 p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
            <Phone className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60">Téléphone</p>
              <p className="font-body font-bold">06 12 34 56 78</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-6 rounded-lg bg-primary-foreground/10">
            <MapPin className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60">Zone</p>
              <p className="font-body font-bold">Paris & Île-de-France</p>
            </div>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors">
            <Instagram className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60">Instagram</p>
              <p className="font-body font-bold">@monbatchcooking</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
