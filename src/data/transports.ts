/**
 * REGISTRE DES TRANSPORTS — les itinéraires qui déposent au club.
 *
 * La règle, et elle est stricte : une ligne n'entre ici que si elle fait
 * avancer quelqu'un de la ville du site jusqu'au 61 route d'Espagne. Une ligne
 * qui dessert le secteur sans mener au club n'a rien à faire sur cette page.
 *
 * On raisonne donc en ITINÉRAIRES, pas en lignes : un itinéraire porte ses
 * étapes dans l'ordre, avec le point de correspondance nommé quand il y en a
 * un. Le visiteur lit le trajet complet, du premier arrêt au dernier.
 *
 * Depuis Cugnaux, la correspondance se fait à Portet Gare SNCF : c'est le
 * terminus de la 85 et de la 321, et le départ de la Linéo 5, qui dessert
 * l'arrêt « Route d'Espagne ».
 *
 * Ce qu'on n'écrit JAMAIS ici : un horaire, une fréquence à la minute, une
 * durée de trajet. Chaque étape porte le lien vers sa page officielle : c'est
 * Tisséo qui dit quand, ce site dit quoi.
 */

export type Mode = 'bus' | 'train';

export type Etape = {
  mode: Mode;
  code: string;
  de: string;
  a: string;
  precision?: string;
  jours: string;
  href: string;
};

export type Itineraire = {
  id: string;
  onglet: string;
  titre: string;
  resume: string;
  mode: Mode;
  etapes: readonly Etape[];
  meilleur?: true;
};

export const RESEAU = {
  nom: 'Tisséo',
  site: 'https://www.tisseo.fr/',
  itineraire: 'https://www.tisseo.fr/se-deplacer/itineraires',
} as const;

export const LIBELLE_MODE: Record<Mode, string> = { bus: 'Bus', train: 'Train' };

export const ARRIVEE = {
  arret: 'Route d’Espagne',
  rue: 'route d’Espagne',
  phrase: 'La Linéo 5 s’arrête route d’Espagne. Le club est au 61.',
} as const;

const L5 = {
  mode: 'bus',
  code: 'L5',
  de: 'Portet Gare SNCF',
  a: 'Route d’Espagne',
  precision: 'le Linéo part du parvis de la gare, sept jours sur sept jusqu’à minuit passé',
  jours: 'sept jours sur sept',
  href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-l5',
} as const satisfies Etape;

/** Le titre de la page, ligne par ligne. La dernière porte l'accent. */
export const TITRE = [
  'La 85 t’emmène à Portet.',
  'La L5 te dépose route d’Espagne.',
  'Le club est au 61.',
] as const;

/** Le chapeau : ce que fait le meilleur trajet, en une phrase. */
export const CHAPEAU =
  'Deux bus, une correspondance sur le parvis de la gare de Portet, et tu es devant la porte. La 85 roule du lundi au samedi — exactement les jours où Boxing Center Portet-sur-Garonne ouvre, de 10h à 21h30.';

export const ITINERAIRES: readonly Itineraire[] = [
  {
    id: 'quatre-vingt-cinq',
    onglet: 'La 85, puis la L5',
    titre: 'La 85 t’emmène à Portet, la L5 te dépose route d’Espagne.',
    resume:
      'La 85 traverse Cugnaux et finit son parcours à Portet Gare SNCF. Sur le parvis, la Linéo 5 repart et dessert l’arrêt « Route d’Espagne » — le club est au 61 de cette rue. La 85 roule du lundi au samedi, exactement les jours où le club ouvre.',
    mode: 'bus',
    meilleur: true,
    etapes: [
      {
        mode: 'bus',
        code: '85',
        de: 'Cugnaux',
        a: 'Portet Gare SNCF',
        precision: 'terminus de la ligne',
        jours: 'du lundi au samedi',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-85',
      },
      L5,
    ],
  },
  {
    id: 'trois-cent-vingt-et-un',
    onglet: 'La 321, puis la L5',
    titre: 'La transversale du secteur, sans passer par Toulouse.',
    resume:
      'La 321 part de Frouzins, dessert Cugnaux à l’arrêt « Mairie Cugnaux » et rejoint Portet Gare SNCF en dix-neuf arrêts. La Linéo 5 prend le relais jusqu’à la route d’Espagne. C’est le trajet le plus court en distance, du lundi au vendredi.',
    mode: 'bus',
    etapes: [
      {
        mode: 'bus',
        code: '321',
        de: 'Mairie Cugnaux',
        a: 'Portet Gare SNCF',
        precision: 'terminus de la ligne',
        jours: 'du lundi au vendredi',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-321',
      },
      L5,
    ],
  },
];

export const itineraire = (id: string) => {
  const i = ITINERAIRES.find((x) => x.id === id);
  if (!i) throw new Error(`Itinéraire inconnu : ${id}`);
  return i;
};

export const MEILLEUR = ITINERAIRES.find((i) => i.meilleur) ?? ITINERAIRES[0];

export const RESUME = 'La 85 jusqu’à Portet, la L5 jusqu’à la route d’Espagne';

export type Depart = { depuis: string; itineraire: string; texte: string };

export const DEPARTS: readonly Depart[] = [
  {
    depuis: 'Cugnaux',
    itineraire: 'quatre-vingt-cinq',
    texte:
      'Monte dans la 85, descends à Portet Gare SNCF, traverse le parvis et prends la L5. Deux bus, du lundi au samedi.',
  },
  {
    depuis: 'Villeneuve-Tolosane',
    itineraire: 'quatre-vingt-cinq',
    texte:
      'La 85 marque l’arrêt « Mairie Villeneuve Tolosane » avant de filer sur Portet. Même correspondance, même arrivée route d’Espagne.',
  },
  {
    depuis: 'Frouzins',
    itineraire: 'trois-cent-vingt-et-un',
    texte:
      'La 321 part de Frouzins Tréville et finit à Portet Gare SNCF. La L5 prend le relais jusqu’au club.',
  },
];

export const AVERTISSEMENT =
  'Tisséo publie les horaires, les fréquences et les arrêts, et les met à jour à chaque saison. Cette page te dit quels bus prendre ; Tisséo te dit à quelle heure ils passent.';
