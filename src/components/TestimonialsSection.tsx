import { useEffect } from "react";

const TRUSTMARY_SRC = "https://widget.trustmary.com/vHMJ-6cRT";

const TestimonialsSection = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${TRUSTMARY_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = TRUSTMARY_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        <div className="trustmary-widget" />
      </div>
    </section>
  );
};

export default TestimonialsSection;