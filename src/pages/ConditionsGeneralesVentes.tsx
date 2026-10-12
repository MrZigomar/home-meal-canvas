import { ArrowRight, ExternalLink, Mail, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { groups, cgvProvider, cgvVersion } from "@/data/cgv";

declare global {
  interface Window {
    gtag?: (...args: (string | Record<string, string>)[]) => void;
  }
}

const ConditionsGeneralesVentes = () => {
  useEffect(() => {
    document.title = "Conditions générales de vente | Poivre & Sel";
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: "Conditions générales de vente",
        page_location: window.location.href,
      });
    }
    return () => {
      document.title = "Poivre & Sel";
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
              Infos pratiques
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Conditions générales <span className="italic font-normal">de vente</span>
            </h1>
            <p className="font-display text-2xl md:text-3xl italic font-normal mb-6 text-primary-foreground/95">
              Les règles claires, avant de cuisiner ensemble
            </p>
            <p className="font-body text-base md:text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
              {cgvProvider} — Version mise à jour en {cgvVersion}
            </p>
          </div>
        </section>

        {/* Sommaire */}
        <section className="py-14 px-6 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8 font-body">
              Sommaire
            </p>
            <nav aria-label="Sommaire des conditions générales de vente">
              <ul className="grid sm:grid-cols-2 gap-3">
                {groups.flatMap((group) =>
                  group.articles.map((a) => (
                    <li key={a.n}>
                      <Button
                        variant="outline"
                        onClick={() => scrollTo(`article-${a.n}`)}
                        className="w-full h-auto whitespace-normal justify-start flex items-center gap-3 text-left p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors"
                      >
                        <span className="font-display text-lg font-bold text-accent shrink-0">
                          {a.n}
                        </span>
                        <span className="font-body text-sm text-foreground/85">{a.title}</span>
                      </Button>
                    </li>
                  ))
                )}
              </ul>
            </nav>
          </div>
        </section>

        {/* Articles */}
        {groups.map((group, gi) => (
          <section
            key={group.id}
            id={group.id}
            className={`py-20 px-6 ${gi % 2 === 1 ? "bg-secondary" : ""}`}
          >
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
                  {group.kicker}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold">{group.title}</h2>
              </div>
              <ol className="space-y-6">
                {group.articles.map((a) => (
                  <li
                    key={a.n}
                    id={`article-${a.n}`}
                    className="flex flex-col sm:flex-row gap-6 p-8 bg-background rounded-lg border border-border scroll-mt-28"
                  >
                    <div className="shrink-0">
                      <span className="font-display text-5xl font-bold text-accent">{a.n}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl md:text-2xl font-semibold mb-3">
                        {a.title}
                      </h3>
                      {a.paras?.map((p) => (
                        <p
                          key={p}
                          className="font-body text-foreground/80 leading-relaxed mb-3 last:mb-0"
                        >
                          {p}
                        </p>
                      ))}

                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}

        {/* Callout crédit d'impôt */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 md:p-10 rounded-lg bg-muted border-l-4 border-accent">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                Une question sur votre crédit d'impôt ?
              </h2>
              <p className="font-body text-foreground/85 leading-relaxed text-lg mb-6">
                Le fonctionnement de l'Avance immédiate, ses conditions d'accès et ses plafonds sont
                détaillés sur une page dédiée.
              </p>
              <a
                href="/#/avance-immediate"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm"
              >
                Découvrir l'Avance immédiate
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Entrée en vigueur */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-5" />
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              Version des présentes conditions
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed text-lg mb-2">
              Version mise à jour en {cgvVersion}.
            </p>
            <p className="font-body text-muted-foreground text-sm">
              Poivre et Sel peut faire évoluer ces conditions ; la version applicable est celle en
              ligne à la date de réservation de la session.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
              À votre écoute
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Une précision à apporter ?
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-8 text-lg">
              Pour toute question sur ces conditions, sur un devis ou sur le déroulement d'une
              session, contactez-moi directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/Q3fgtHx1hjQD2bLN8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm"
              >
                Me contacter
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:julien@poivreetsel.kitchen"
                className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-foreground/5 transition-colors rounded-sm"
              >
                <Mail className="w-4 h-4" />
                Nous écrire
              </a>
            </div>
          </div>
        </section>

        {/* Legal mention */}
        <section className="py-10 px-6 bg-muted">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              Les références au crédit d'impôt et à l'Avance immédiate renvoient aux dispositifs
              mis en place par l'Urssaf et la Direction générale des Finances publiques. Poivre et
              Sel est un organisme de services à la personne déclaré et n'est pas habilité à reproduire
              les marques de ces organismes.
            </p>
            <a
              href="https://www.impots.gouv.fr/portail/particulier/emploi-domicile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-xs tracking-widest uppercase text-primary hover:underline underline-offset-4 font-body"
            >
              Référence officielle sur impots.gouv.fr
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ConditionsGeneralesVentes;
