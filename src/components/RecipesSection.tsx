import { useState, useMemo } from "react";
import { Users, ChevronDown, Leaf } from "lucide-react";
import { recipes, allSeasons, allCategories, type Season, type Category } from "@/data/recipes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const INITIAL_COUNT = 6;

const RecipesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      if (selectedSeason && !r.seasons.includes(selectedSeason)) return false;
      if (selectedCategory && !r.categories.includes(selectedCategory)) return false;
      return true;
    });
  }, [selectedSeason, selectedCategory]);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT && !showAll;

  return (
    <section id="recettes" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">
            Mes recettes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Au menu cette semaine
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
            Un aperçu des recettes que je peux préparer pour vous. Le menu
            s'adapte à vos goûts et besoins.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedSeason(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-body transition-colors border ${
                selectedSeason === null
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              Toutes saisons
            </button>
            {allSeasons.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSeason(selectedSeason === s ? null : s)}
                className={`px-4 py-1.5 rounded-full text-sm font-body transition-colors border ${
                  selectedSeason === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="w-px h-6 bg-border hidden sm:block self-center" />
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-body transition-colors border ${
                selectedCategory === null
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-background text-muted-foreground border-border hover:border-accent/50"
              }`}
            >
              Tous types
            </button>
            {allCategories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(selectedCategory === c ? null : c)}
                className={`px-4 py-1.5 rounded-full text-sm font-body transition-colors border ${
                  selectedCategory === c
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-background text-muted-foreground border-border hover:border-accent/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((r) => (
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
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {r.categories.map((c) => (
                    <span
                      key={c}
                      className="bg-background/90 backdrop-blur-sm text-xs tracking-widest uppercase text-accent font-body font-bold px-3 py-1 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {r.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {r.seasons.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="text-xs font-body gap-1"
                    >
                      <Leaf className="w-3 h-3" />
                      {s}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 text-muted-foreground text-sm font-body">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> {r.portions} pers.
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-body mt-8">
            Aucune recette ne correspond aux filtres sélectionnés.
          </p>
        )}

        {hasMore && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="font-body gap-2"
            >
              Voir plus <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipesSection;