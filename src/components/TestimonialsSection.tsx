import { useEffect, useRef } from "react";

const TRUSTMARY_SRC = "https://widget.trustmary.com/ABlPC9phT";

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Évite les doublons en cas de re-render
    if (containerRef.current.querySelector(`script[src="${TRUSTMARY_SRC}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.src = TRUSTMARY_SRC;
    script.async = true;
    containerRef.current.appendChild(script);
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
        <div ref={containerRef} className="trustmary-widget" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
