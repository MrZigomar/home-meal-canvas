import { Clock, Users } from "lucide-react";
import { recipes } from "@/data/recipes";

const RecipesSection = () => {
  return (
    <section id="recettes" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">Mes recettes</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Au menu cette semaine
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
            Un aperçu des recettes que je peux préparer pour vous. Le menu s'adapte à vos goûts et besoins.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <div
              key={r.name}
              className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.name}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-xs tracking-widest uppercase text-accent font-body font-bold px-3 py-1 rounded-full">
                  {r.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {r.name}
                </h3>
                <div className="flex gap-4 text-muted-foreground text-sm font-body">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {r.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> {r.portions} pers.
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
