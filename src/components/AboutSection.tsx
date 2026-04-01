import { Leaf, Clock, Heart } from "lucide-react";

const features = [
  { icon: Leaf, title: "Produits frais", desc: "Des ingrédients de saison, locaux et de qualité" },
  { icon: Clock, title: "Gain de temps", desc: "Une semaine de repas préparés en une seule session" },
  { icon: Heart, title: "Fait maison", desc: "Cuisiné avec soin, directement dans votre cuisine" },
];

const AboutSection = () => {
  return (
    <section id="a-propos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-3 font-body">À propos</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Qui suis-je ?
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Passionnée de cuisine et de nutrition, j'ai créé mon service de batchcooking à domicile 
            pour vous aider à retrouver le plaisir de bien manger au quotidien. Je viens chez vous 
            avec les ingrédients, je cuisine, je range — et vous profitez de repas équilibrés toute la semaine.
          </p>
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
