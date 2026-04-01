import { Clock, Users } from "lucide-react";

const recipes = [
  { name: "Poulet rôti aux herbes & légumes de saison", category: "Plat principal", time: "45 min", portions: "4", color: "bg-primary" },
  { name: "Curry de lentilles corail & lait de coco", category: "Végétarien", time: "35 min", portions: "4", color: "bg-accent" },
  { name: "Gratin de courgettes au chèvre frais", category: "Végétarien", time: "40 min", portions: "4", color: "bg-primary" },
  { name: "Bœuf mijoté aux carottes & pommes de terre", category: "Plat principal", time: "1h30", portions: "6", color: "bg-accent" },
  { name: "Salade de quinoa, avocat & saumon fumé", category: "Entrée", time: "20 min", portions: "4", color: "bg-primary" },
  { name: "Soupe veloutée de butternut & noisettes", category: "Entrée", time: "30 min", portions: "4", color: "bg-accent" },
];

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
              <div className={`h-2 ${r.color}`} />
              <div className="p-6">
                <span className="text-xs tracking-widest uppercase text-accent font-body font-bold">
                  {r.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-4 group-hover:text-primary transition-colors">
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
