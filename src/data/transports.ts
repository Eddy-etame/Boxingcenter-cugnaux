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
 * l'arrêt « Jean Jaurès », sur la route d'Espagne à Portet — le premier
 *   arrêt après le terminus, et le seul qui dépose devant le club.
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
  arret: 'Jean Jaurès',
  rue: 'route d’Espagne',
  phrase: 'Tu descends à « Jean Jaurès », sur la route d’Espagne. Le club est au 61.',
} as const;

const L5 = {
  mode: 'bus',
  code: 'L5',
  de: 'Portet Gare SNCF',
  a: 'Jean Jaurès',
  precision: 'le Linéo part du parvis de la gare, sept jours sur sept jusqu’à minuit passé',
  jours: 'sept jours sur sept',
  href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-l5',
} as const satisfies Etape;

/** Le titre de la page, ligne par ligne. La dernière porte l'accent. */
export const TITRE = [
  'Y aller en bus,',
  'c’est deux lignes :',
  'la 85, puis la L5.',
] as const;

/** Le chapeau : ce que fait le meilleur trajet, en une phrase. */
export const CHAPEAU =
  'Tu prends la 85 à Cugnaux et tu descends à Portet Gare SNCF. Tu traverses le parvis, tu prends la L5, et tu descends au premier arrêt : « Jean Jaurès », sur la route d’Espagne. Le club est au 61. La 85 roule du lundi au samedi, la L5 tous les jours.';

export const ITINERAIRES: readonly Itineraire[] = [
  {
    id: 'quatre-vingt-cinq',
    onglet: 'La 85, puis la L5',
    titre: 'La 85, puis la L5.',
    resume:
      'La 85 traverse Cugnaux et s’arrête à Portet Gare SNCF. La L5 part du même endroit, sur le parvis, et te dépose au premier arrêt, « Jean Jaurès », sur la route d’Espagne. Le club est au 61. La 85 roule du lundi au samedi ; la L5 tous les jours, jusqu’à minuit passé.',
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
    titre: 'La 321, puis la L5.',
    resume:
      'La 321 s’arrête à « Mairie Cugnaux » et finit à Portet Gare SNCF. Tu y reprends la L5 jusqu’à la route d’Espagne. Elle roule du lundi au vendredi : le samedi, prends la 85.',
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
      'Tu montes dans la 85, tu descends à Portet Gare SNCF, tu prends la L5 sur le parvis. Elle t’arrête route d’Espagne.',
  },
  {
    depuis: 'Villeneuve-Tolosane',
    itineraire: 'quatre-vingt-cinq',
    texte:
      'La 85 passe par « Mairie Villeneuve Tolosane » avant Portet. Tu changes à la gare et tu finis en L5.',
  },
  {
    depuis: 'Frouzins',
    itineraire: 'trois-cent-vingt-et-un',
    texte:
      'La 321 part de Frouzins Tréville et finit à Portet Gare SNCF. Tu y prends la L5 jusqu’au club.',
  },
];

export const AVERTISSEMENT =
  'Les horaires changent d’une saison à l’autre. On te dit quels bus prendre ; pour l’heure exacte, ouvre la fiche Tisséo de la ligne — le lien est juste à côté de chaque étape.';
