import heroImage from "@/assets/hero-batchcooking.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Préparation de batchcooking avec légumes frais et plats cuisinés"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4">
          Batchcooking à domicile
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Mangez bien,<br />
          <span className="italic font-normal">sans effort</span>
        </h1>
        <p className="font-body text-lg text-primary-foreground/90 mb-10 max-w-xl mx-auto leading-relaxed">
          Je prépare chez vous une semaine de repas sains, savoureux et faits maison. 
          Gagnez du temps, mangez mieux.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tarifs"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm"
          >
            Découvrir les formules
          </a>
          <a
            href="#contact"
            className="inline-block border border-primary-foreground/50 text-primary-foreground px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors rounded-sm"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
