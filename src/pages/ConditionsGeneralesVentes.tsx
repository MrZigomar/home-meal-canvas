import { ArrowRight, ExternalLink, Mail, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: (string | Record<string, string>)[]) => void;
  }
}

type Article = {
  n: string;
  title: string;
  paras?: string[];
  bullets?: string[];
};

type Group = {
  id: string;
  kicker: string;
  title: string;
  articles: Article[];
};

const groups: Group[] = [
  {
    id: "cadre",
    kicker: "Avant tout",
    title: "Cadre général",
    articles: [
      {
        n: "01",
        title: "Objet",
        paras: [
          "Les présentes conditions générales de vente (ci-après « CGV ») régissent l'ensemble des relations entre Poivre et Sel, organisme de services à la personne, et toute personne physique (ci-après « le client ») bénéficiant d'une prestation de batchcooking à domicile.",
          "Toute réservation d'une session emporte adhésion pleine et entière aux présentes CGV, sans réserve. Le client déclare avoir lu et accepté ces conditions avant de confirmer une session.",
        ],
      },
      {
        n: "02",
        title: "Le prestataire",
        paras: [
          "Poivre et Sel est exploité par [[Nom et prénom du responsable légal]] sous la forme juridique [[forme juridique : micro-entreprise, SASU, autre]] , immatriculé sous le numéro SIRET [[numéro SIRET]] et dont le siège social est situé [[adresse complète du siège social]] .",
          "Contact : julien@poivreetsel.kitchen — site : poivreetsel.kitchen.",
        ],
        bullets: [
          "Zone d'intervention : Combourg, Dinan, Rennes et Saint-Malo.",
          "Poivre et Sel est un organisme de services à la personne déclaré, ouvrant droit à la réduction ou au crédit d'impôt prévu par l'article 199 sexdecies du code général des impôts.",
        ],
      },
      {
        n: "03",
        title: "Les prestations proposées",
        paras: [
          "Poivre et Sel réalise des sessions de batchcooking au domicile du client : élaboration d'un menu, préparation de plusieurs repas, conditionnement et rangement.",
          "Les formules et les tarifs présentés sur le site sont indicatifs et peuvent être ajustés à tout moment ; la session est facturée sur la base du tarif accepté lors de sa confirmation.",
          "[[À préciser : les ingrédients sont-ils compris dans le prix de la session, achetés par le client, ou avancés puis facturés en sus ?]]",
        ],
        bullets: [
          "Formule Découverte — 100 € par session avant réduction d'impôts : 3 repas pour 4 personnes, menu composé par mes soins, rangement cuisine.",
          "Formule Mensuelle — 120 € par session avant réduction d'impôts : 4 sessions programmées en avance, 5 repas pour 2 à 4 personnes, menu au choix, rangement cuisine.",
          "Formule Hebdo — 150 € par session avant réduction d'impôts : 5 repas pour 2 à 4 personnes, menu au choix, rangement cuisine.",
        ],
      },
    ],
  },
  {
    id: "commande",
    kicker: "Votre réservation",
    title: "Commande, tarifs et paiement",
    articles: [
      {
        n: "04",
        title: "Réservation et confirmation",
        paras: [
          "La réservation s'effectue par le formulaire de contact du site, par WhatsApp, ou par la plateforme de réservation indiquée sur le site. La demande est enregistrée à la date de sa réception.",
          "La session n'est définitive qu'après confirmation du créneau par Poivre et Sel, par retour de message. Le client s'engage à être présent ou à donner accès à son domicile (cuisine et espace de rangement) pendant toute la durée de la session.",
        ],
      },
      {
        n: "05",
        title: "Tarifs",
        paras: [
          "Les prix indiqués sont des prix en euros toutes taxes comprises, par session de batchcooking, avant application de la réduction d'impôts.",
          "Les tarifs peuvent être révisés à tout moment. Le tarif appliqué est celui communiqué et accepté lors de la confirmation de la session.",
          "[[À préciser : frais de déplacement éventuels en dehors de la zone d'intervention, ou supplément pour un menu sur mesure.]]",
        ],
      },
      {
        n: "06",
        title: "Paiement",
        paras: [
          "Après chaque session, une demande de paiement est adressée au client selon les modalités convenues. Lorsque l'Avance immédiate est activée, cette demande de paiement est reçue sur l'espace en ligne de l'Urssaf.",
          "Lorsque le client a souscrit à l'Avance immédiate, le crédit d'impôt est déduit immédiatement et seul le reste à charge est prélevé sur son compte bancaire. Dans le cas contraire, le montant de la session est réglé selon les modalités convenues et le crédit d'impôt est restitué l'année suivante, sur la base de la déclaration de revenus.",
        ],
        bullets: [
          "La session est due dès lors qu'elle a été réalisée, y compris en cas d'absence du client n'ayant pas été signalée dans les délais (voir article Annulation et report).",
          "Aucune somme n'est exigée à l'avance avant la confirmation de la session.",
        ],
      },
      {
        n: "07",
        title: "Annulation et report",
        paras: [
          "Le client peut demander le report ou l'annulation d'une session jusqu'à [[délai de prévention, par exemple 48 heures]] avant le début de la session, par message à julien@poivreetsel.kitchen ou par WhatsApp.",
          "Toute annulation ou absence intervenue moins de [[délai de prévention]] avant le début de la session, ou non signalée, entraîne la facturation de la session dans son intégralité.",
          "Lorsque Poivre et Sel doit reporter une session pour une raison indépendante de sa volonté (indisponibilité, cas de force majeure), un nouveau créneau est proposé au client sans frais.",
        ],
      },
    ],
  },
  {
    id: "session",
    kicker: "Le jour J",
    title: "Déroulement de la session",
    articles: [
      {
        n: "08",
        title: "Obligations et bonnes pratiques",
        bullets: [
          "Le client met à disposition une cuisine propre et fonctionnelle (plaques, four, réfrigérateur ou congélateur, plans de travail) ainsi qu'un espace de rangement pour les repas préparés.",
          "Le client signale avant la session toute allergie, intolérance ou régime particulier des personnes concernées. Poivre et Sel en tient compte dans la limite des possibilités techniques et des ingrédients disponibles.",
          "Les repas préparés doivent être conservés au réfrigérateur ou au congélateur. Les durées de conservation indicatives sont communiquées au moment de la session.",
          "Poivre et Sel applique les règles d'hygiène applicables à la préparation alimentaire, mais le client reste responsable de l'entretien de ses équipements et de la conservation des plats après la session.",
        ],
      },
      {
        n: "09",
        title: "Crédit d'impôt et Avance immédiate",
        paras: [
          "Les prestations ouvrent droit, dans les conditions fixées par l'article 199 sexdecies du code général des impôts et dans la limite des plafonds annuels en vigueur, à un crédit d'impôt de 50 % des sommes versées.",
          "L'Avance immédiate de crédit d'impôt est un service optionnel et gratuit proposé par l'Urssaf et la Direction générale des Finances publiques. Son activation ne modifie ni la nature ni le prix de la prestation.",
        ],
      },
    ],
  },
  {
    id: "droits",
    kicker: "En cas de besoin",
    title: "Vos données et vos droits",
    articles: [
      {
        n: "10",
        title: "Données personnelles",
        paras: [
          "Les données recueillies (nom, coordonnées, adresse d'intervention, préférences alimentaires) sont utilisées uniquement pour l'exécution de la prestation et le suivi de la relation client. Elles ne sont ni vendues ni cédées à des tiers.",
          "Conformément à la réglementation applicable à la protection des données, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition. Ces droits s'exercent par message à julien@poivreetsel.kitchen.",
        ],
      },
      {
        n: "11",
        title: "Réclamations et médiation",
        paras: [
          "Toute réclamation doit être adressée dans un premier temps à julien@poivreetsel.kitchen, afin de rechercher une solution amiable.",
          "En qualité de consommateur, vous pouvez saisir gratuitement le médiateur de la consommation dont relève Poivre et Sel : [[coordonnées et site du médiateur de la consommation]] . La saisine du médiateur est préalable à toute action en justice.",
        ],
      },
      {
        n: "12",
        title: "Droit applicable et litiges",
        paras: [
          "Les présentes CGV sont soumises au droit français.",
          "À défaut de solution amiable, les tribunaux de [[ville du tribunal compétent, par exemple Rennes]] seront compétents, sans préjudice des règles relatives à la médiation de la consommation.",
        ],
      },
    ],
  },
];

const RichText = ({ text }: { text: string }) => {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[[") && part.endsWith("]]") ? (
          <span
            key={i}
            className="text-accent font-bold italic underline decoration-dotted underline-offset-4"
          >
            {part.slice(2, -2)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

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
              Les présentes conditions décrivent les prestations de batchcooking à domicile de
              Poivre et Sel, les modalités de réservation, de tarification et de paiement, ainsi
              que les droits de chacun. En réservant une session, vous les acceptez sans réserve.
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
                      <button
                        onClick={() => scrollTo(`article-${a.n}`)}
                        className="w-full flex items-center gap-3 text-left p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors"
                      >
                        <span className="font-display text-lg font-bold text-accent shrink-0">
                          {a.n}
                        </span>
                        <span className="font-body text-sm text-foreground/85">{a.title}</span>
                      </button>
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
                          <RichText text={p} />
                        </p>
                      ))}
                      {a.bullets && (
                        <ul className="mt-4 space-y-3">
                          {a.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex gap-3 font-body text-foreground/80 leading-relaxed"
                            >
                              <span
                                className="font-display text-accent font-bold shrink-0"
                                aria-hidden="true"
                              >
                                —
                              </span>
                              <span>
                                <RichText text={b} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
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
              Entrée en vigueur des présentes conditions
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed text-lg mb-2">
              Les présentes conditions générales de vente sont applicables à compter du{" "}
              <span className="text-accent font-bold italic underline decoration-dotted underline-offset-4">
                date de prise d'effet à indiquer
              </span>
              .
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
