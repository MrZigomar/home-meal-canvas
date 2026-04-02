import { Leaf, Clock, Heart, User } from "lucide-react";

const features = [
  { icon: Leaf, title: "Produits sains", desc: "Des recettes de saison, des plats équilibrés" },
  { icon: Clock, title: "Gain de temps", desc: "Une semaine de repas préparés en une seule session" },
  { icon: Heart, title: "Fait maison", desc: "Cuisiné avec soin, directement dans votre cuisine" },
];

const AboutSection = () => {
  return (
    <section id="a-propos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">À propos</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Qui suis-je ?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10 text-left">
            {/* Photo placeholder — remplacez le src par votre photo */}
            <div className="shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-full bg-muted border-4 border-primary/20 flex items-center justify-center overflow-hidden">
              {/* Décommentez la ligne ci-dessous et ajoutez votre photo :*/}
              <img src="/julien.HEIC" alt="Photo de profil" className="w-full h-full object-cover" /> 
              <User className="w-16 h-16 text-muted-foreground/50" />
            </div>
            <p className="font-body text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Passionnée de cuisine depuis l'enfance, et baigné dans la culture culinaire italienne,
              j'ai créé mon service de batchcooking à domicile pour vous aider à retrouver le plaisir de bien manger au quotidien. 
              Je vous propose une sélection soignée de repas, prépare votre liste de courses puis viens chez vous pour cuisiner.
              Après mon départ, vous retrouvez une cuisine propre, et profitez de repas équilibrés toute la semaine !
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center p-8 bg-card rounded-lg">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
