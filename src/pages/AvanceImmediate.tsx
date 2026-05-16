import { ArrowRight, CheckCircle2, ExternalLink, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: (string | Record<string, string>)[]) => void;
  }
}

const steps = [
  {
    n: "01",
    title: "Activation de votre compte",
    text: "Avec votre accord, Poivre et Sel crée votre espace sur le site dédié de l'Urssaf (particulier.urssaf.fr). Vous recevez un email ou SMS vous invitant à activer votre compte.",
  },
  {
    n: "02",
    title: "Réception des demandes de paiement",
    text: "Après chaque prestation, vous recevez une demande de paiement directement sur votre espace en ligne. Vous disposez de 48h pour la valider ou la contester.",
  },
  {
    n: "03",
    title: "Déduction automatique",
    text: "L'avance immédiate de crédit d'impôt est automatiquement déduite. L'Urssaf ne prélève que le reste à charge sur votre compte bancaire.",
  },
  {
    n: "04",
    title: "Déclaration simplifiée",
    text: "Votre déclaration de revenus est pré-remplie. Vérifiez simplement l'exactitude des informations.",
  },
];

const AvanceImmediate = () => {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: "Avance immédiate",
        page_location: window.location.href,
      });
    }
  }, []);

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
              L'Avance immédiate <span className="italic font-normal">de crédit d'impôt</span>
            </h1>
            <p className="font-display text-2xl md:text-3xl italic font-normal mb-6 text-primary-foreground/95">
              Bénéficiez de votre crédit d'impôt en temps réel
            </p>
            <p className="font-body text-base md:text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
              L'Avance immédiate est un service optionnel et gratuit proposé par l'Urssaf et la
              Direction générale des Finances publiques (DGFiP). Il vous permet de déduire
              immédiatement votre crédit d'impôt de 50 % au moment de chaque paiement, sans
              attendre votre déclaration annuelle.
            </p>
          </div>
        </section>

        {/* Avant / Avec */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
                Le changement
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                Ce que ça change pour vous
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-lg bg-muted border border-border">
                <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
                  Avant
                </p>
                <p className="font-display text-5xl font-bold mb-4">200 €</p>
                <p className="font-body text-foreground/80 leading-relaxed">
                  Vous payez <strong>200 €</strong>, vous attendez l'année suivante pour récupérer{" "}
                  <strong>100 €</strong> via votre déclaration d'impôts.
                </p>
              </div>
              <div className="p-8 rounded-lg bg-primary text-primary-foreground border border-primary relative overflow-hidden">
                <p className="font-body text-xs tracking-[0.25em] uppercase text-primary-foreground/70 mb-4">
                  Avec l'Avance immédiate
                </p>
                <p className="font-display text-5xl font-bold mb-4">100 €</p>
                <p className="font-body text-primary-foreground/90 leading-relaxed">
                  Vous ne payez que <strong>100 €</strong>. L'Urssaf prélève uniquement le reste à
                  charge, immédiatement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-20 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
                Étape par étape
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                Comment ça marche ?
              </h2>
            </div>
            <ol className="space-y-6">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="flex flex-col sm:flex-row gap-6 p-8 bg-background rounded-lg border border-border"
                >
                  <div className="shrink-0">
                    <span className="font-display text-5xl font-bold text-accent">{s.n}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">
                      {s.title}
                    </h3>
                    <p className="font-body text-foreground/80 leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Conditions d'accès */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
                Éligibilité
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                Conditions d'accès
              </h2>
            </div>
            <ul className="space-y-4">
              {[
                "Vous devez recourir à des services à la personne auprès d'un organisme déclaré (c'est le cas de Poivre et Sel).",
                "Vous devez disposer d'un compte bancaire pour le prélèvement du reste à charge.",
                "Le service est accessible depuis le site particulier.urssaf.fr.",
              ].map((c) => (
                <li
                  key={c}
                  className="flex gap-4 p-5 bg-card rounded-lg border border-border"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="font-body text-foreground/85 leading-relaxed">{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Service facultatif - callout */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 md:p-10 rounded-lg bg-muted border-l-4 border-accent">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                Un service entièrement facultatif
              </h2>
              <p className="font-body text-foreground/85 leading-relaxed text-lg">
                L'Avance immédiate est un service totalement optionnel. Vous pouvez continuer à
                bénéficier de votre crédit d'impôt via votre déclaration annuelle si vous le
                préférez. Aucune obligation de souscription.
              </p>
            </div>
          </div>
        </section>

        {/* Plafonds */}
        <section className="py-20 px-6 bg-secondary">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
              Plafonds
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Plafonds du crédit d'impôt
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-8 text-lg">
              Le crédit d'impôt pour les services à la personne est soumis à des plafonds annuels
              fixés par l'administration fiscale. Ces plafonds peuvent varier en fonction de votre
              situation personnelle (composition du foyer, situation de handicap, etc.).
            </p>
            <a
              href="https://www.impots.gouv.fr/portail/particulier/emploi-domicile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
            >
              Consulter les plafonds sur impots.gouv.fr
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Question */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body">
              À votre écoute
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Une question ?
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-8 text-lg">
              Pour toute question sur l'Avance immédiate, votre interlocuteur reste Poivre et Sel.
              N'hésitez pas à nous contacter directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm"
              >
                Nous contacter
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

        {/* Legal footer mention */}
        <section className="py-10 px-6 bg-muted">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              L'Avance immédiate est un service mis en place par l'Urssaf et la Direction générale
              des Finances publiques (DGFiP). Poivre et Sel est un organisme de services à la
              personne déclaré.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AvanceImmediate;
