export type Article = { n: string; title: string; paras: string[] };
export type Group = { id: string; kicker: string; title: string; articles: Article[] };

export const cgvRules = {
  cancellationNoticeHours: 48,
  cancellationFeePercent: 30,
  clientResponseHours: 48,
  preparationNoticeHours: 48,
  clientDelayFeePercent: 25,
  taxCreditPercent: 50,
  taxCertificateDeadline: { day: 31, month: 3 },
  mediationNoResponseMonths: 2,
  mediationDeadlineYears: 1,
} as const;

export const cgvVersion = "octobre 2026";
export const cgvProvider = "M. Julien GUERINOT, exerçant sous l'enseigne Poivre & Sel";

export const groups: Group[] = [
  {
    "id": "cadre",
    "kicker": "Avant tout",
    "title": "Cadre général",
    "articles": [
      {
        "n": "01",
        "title": "Objet et champ d'application",
        "paras": [
          "Les présentes CGV régissent les prestations de services de \"Batch Cooking\" à domicile proposées par M. Julien GUERINOT, exerçant sous l'enseigne Poivre & Sel. Toute commande de prestation implique l'adhésion sans réserve du Client aux présentes CGV."
        ]
      },
      {
        "n": "02",
        "title": "Nature des prestations",
        "paras": [
          "Poivre & Sel propose un service de préparation de repas à domicile. La prestation comprend :",
          "L'élaboration de menus personnalisés.",
          "La préparation des repas dans la cuisine du Client.",
          "Le nettoyage du plan de travail et du matériel utilisé."
        ]
      }
    ]
  },
  {
    "id": "commande",
    "kicker": "Votre réservation",
    "title": "Réservation, tarifs et organisation",
    "articles": [
      {
        "n": "03",
        "title": "Modalités de réservation",
        "paras": [
          "La réservation s'effectue par téléphone, e-mail, via le site poivreetsel.kitchen ou via l'application Miamissimo.app. La commande est considérée comme ferme après confirmation écrite de Poivre & Sel et acceptation du devis par le Client."
        ]
      },
      {
        "n": "04",
        "title": "Tarifs et crédit d'impôt",
        "paras": [
          "Tarifs : Les prix sont indiqués en Euros et ne sont pas soumis à la TVA (Art. 293B du CGI).",
          `Services à la Personne (SAP) : En tant qu'entreprise déclarée SAP, le Client bénéficie d'un crédit d'impôt de ${cgvRules.taxCreditPercent} % sur le montant des prestations de main-d'œuvre (sous réserve du plafond légal en vigueur).`,
          `Attestation fiscale : Une attestation fiscale annuelle sera fournie au Client avant le ${cgvRules.taxCertificateDeadline.day} mars de l'année suivante.`
        ]
      },
      {
        "n": "05",
        "title": "Ingrédients et matériel",
        "paras": [
          "Ingrédients : Sauf mention contraire, le coût des denrées alimentaires reste à la charge du Client.",
          "Hygiène : Poivre & Sel s'engage à respecter les normes d'hygiène. Le Client s'engage à mettre à disposition une cuisine propre et des équipements de cuisson en bon état de fonctionnement (four, plaques, réfrigérateur).",
          "Matériel de conservation : Le Client doit fournir les contenants (type boîtes hermétiques) nécessaires au stockage des repas."
        ]
      },
      {
        "n": "06",
        "title": "Annulation et report",
        "paras": [
          `Toute annulation par le Client intervenant moins de ${cgvRules.cancellationNoticeHours} heures avant la prestation pourra faire l'objet d'une facturation forfaitaire de ${cgvRules.cancellationFeePercent} % du montant de la prestation.`,
          "En cas d'impossibilité majeure pour Poivre & Sel (maladie, panne de transport), la prestation sera reportée dans les plus brefs délais ou remboursée intégralement."
        ]
      },
      {
        "n": "07",
        "title": "Délais de réponse et modalités à communiquer par le client",
        "paras": [
          `Délai de réponse : Le Client s'engage à répondre aux sollicitations de Poivre & Sel (messages, e-mails, appels) dans un délai de ${cgvRules.clientResponseHours} heures.`,
          `Modalités à communiquer avant la prestation : Toutes les modalités de la prestation, notamment le choix des plats, la validation de la liste de courses et des options retenues, doivent être communiquées à Poivre & Sel et connues de celui-ci au plus tard ${cgvRules.preparationNoticeHours} heures avant la date de la prestation.`,
          `Retard imputable au Client : Lorsqu'un retard de réponse ou de validation imputable au Client empêche ou décale la tenue de la prestation, des pénalités de gestion équivalentes à ${cgvRules.clientDelayFeePercent}% du montant de la prestation pourront être appliquées.`
        ]
      }
    ]
  },
  {
    "id": "session",
    "kicker": "Le jour J",
    "title": "Responsabilité et paiement",
    "articles": [
      {
        "n": "08",
        "title": "Responsabilité et assurance",
        "paras": [
          "Assurance : Poivre & Sel est titulaire d'une assurance Responsabilité Civile Professionnelle (RC Pro) couvrant les dommages causés au domicile du Client durant la prestation. Ce contrat est souscrit auprès de l'assureur Hiscox et géré par ORUS FRANCE SAS. La garantie s'applique dans le monde entier, à l'exception des États-Unis et du Canada.",
          "Coordonnées de l'assureur : Hiscox SA - Hiscox France, 38 avenue de l'Opéra, 75002 Paris (RCS Paris 833 546 989). Siège social : 35F avenue John F. Kennedy, L-1855 Luxembourg (n° d'enregistrement B217018). Adresse de gestion : 12 quai des Queyries, CS 41177, 33072 Bordeaux. Tél. : 01 53 21 82 82.",
          "Gestionnaire du contrat : ORUS FRANCE SAS, 14 avenue du Général de Gaulle, 94160 Saint-Mandé. E-mail : hello@orus.eu. Immatriculation ORIAS n° 26000343. RCS Créteil, SIREN 993 524 784.",
          "Conservation des repas : Une fois la prestation terminée, la responsabilité de la conservation des plats (respect de la chaîne du froid, dates de péremption) incombe exclusivement au Client."
        ]
      },
      {
        "n": "09",
        "title": "Paiement",
        "paras": [
          "Le paiement s'effectue à l'issue de la prestation par Virement, Chèque, Espèces. En cas d'utilisation de l'Avance immédiate du crédit d'impôt, les modalités de l'Urssaf s'appliquent."
        ]
      }
    ]
  },
  {
    "id": "droits",
    "kicker": "En cas de besoin",
    "title": "Vos données et vos droits",
    "articles": [
      {
        "n": "10",
        "title": "Protection des données (rgpd)",
        "paras": [
          "Les informations collectées lors de la commande sont nécessaires au traitement de la prestation et à l'établissement des attestations fiscales. Le Client dispose d'un droit d'accès et de rectification de ses données."
        ]
      },
      {
        "n": "11",
        "title": "Réclamations et médiation de la consommation",
        "paras": [
          "Réclamation préalable : Toute réclamation doit être adressée à Poivre & Sel par écrit (courrier ou e-mail à julien@poivreetsel.kitchen). Elle doit être datée, rappeler les circonstances qui ont donné lieu au différend et préciser ce que le Client réclame.",
          `Saisine du médiateur : Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, Poivre & Sel a mis en place un dispositif de médiation de la consommation. Le Client consommateur peut recourir gratuitement au médiateur si, après avoir adressé sa réclamation écrite, il a reçu une réponse écrite négative de la part de Poivre & Sel, ou s'il n'a reçu aucune réponse ${cgvRules.mediationNoResponseMonths === 2 ? "deux" : cgvRules.mediationNoResponseMonths} mois après l'envoi de sa réclamation. Le médiateur doit être saisi dans un délai maximal d'${cgvRules.mediationDeadlineYears === 1 ? "un an" : `${cgvRules.mediationDeadlineYears} ans`} à compter de la réclamation écrite.`,
          "Médiateur retenu : MÉDIATION CONSOMMATION DÉVELOPPEMENT (MED CONSO DEV).",
          "Par internet : www.medconsodev.eu",
          "Par courrier : MÉDIATION CONSOMMATION DÉVELOPPEMENT, C/O Centre d'Affaires Stéphanois SAS, Immeuble L'Horizon, Esplanade de France, 3 rue J. Constant Milleret, 42000 Saint-Étienne."
        ]
      },
      {
        "n": "12",
        "title": "Litiges et droit applicable",
        "paras": [
          "Les présentes CGV sont soumises au droit français. En cas de litige, le Client est invité à adresser une réclamation écrite à Poivre & Sel dans les conditions de l'article 11, afin de rechercher une solution amiable, et peut recourir au médiateur de la consommation.",
          "À défaut de résolution amiable, le litige sera porté devant les juridictions compétentes. Le Client consommateur peut saisir, à son choix, l'une des juridictions territorialement compétentes en vertu du Code de procédure civile ou la juridiction du lieu où il demeurait au moment de la conclusion du contrat ou de la survenance du fait dommageable. Pour tout autre Client, les tribunaux de Rennes sont compétents."
        ]
      }
    ]
  }
];
