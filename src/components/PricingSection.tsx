import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: "120",
    desc: "Idéal pour découvrir",
    features: ["5 repas pour 2 personnes", "Courses incluses", "Recettes de saison", "Rangement cuisine"],
    popular: false,
  },
  {
    name: "Famille",
    price: "190",
    desc: "Le plus populaire",
    features: ["5 repas pour 4 personnes", "Courses incluses", "Menu personnalisé", "Rangement cuisine", "Conseils nutrition"],
    popular: true,
  },
  {
    name: "Premium",
    price: "280",
    desc: "Pour les gourmands",
    features: ["7 repas pour 4 personnes", "Courses bio incluses", "Menu 100% sur mesure", "Rangement cuisine", "Desserts inclus", "Suivi hebdomadaire"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="tarifs" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Tarifs</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Mes formules
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
            Des formules adaptées à tous les besoins. Prix par session de batchcooking.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 flex flex-col ${
                plan.popular
                  ? "bg-primary text-primary-foreground ring-2 ring-primary scale-105"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <span className="text-xs tracking-widest uppercase font-body font-bold mb-4 text-primary-foreground/80">
                  ★ Populaire
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
              <p className={`font-body text-sm mt-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <div className="my-6">
                <span className="font-display text-5xl font-bold">{plan.price}</span>
                <span className={`font-body text-sm ml-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>€ / session</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-body">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-sm text-sm font-body tracking-widest uppercase transition-colors ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Réserver
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
