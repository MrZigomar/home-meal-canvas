import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    rating: 5,
    text: "Un vrai bonheur de retrouver des plats faits maison chaque soir sans avoir à cuisiner ! Les recettes sont variées et délicieuses.",
  },
  {
    name: "Laurent D.",
    rating: 5,
    text: "Service impeccable, cuisine rangée après la session. Mes enfants adorent les plats et redemandent chaque semaine.",
  },
  {
    name: "Camille R.",
    rating: 4,
    text: "Gain de temps incroyable et des repas équilibrés toute la semaine. Je recommande les yeux fermés !",
  },
  {
    name: "Marc B.",
    rating: 5,
    text: "Les ingrédients sont toujours frais et de saison. On sent la passion dans chaque plat. Merci infiniment !",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "text-accent fill-accent" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">
            Témoignages
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Ce que disent mes clients
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-lg p-8 border border-border/50 flex flex-col gap-4"
            >
              <Stars count={t.rating} />
              <p className="font-body text-muted-foreground leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="font-display font-semibold text-foreground mt-auto">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
