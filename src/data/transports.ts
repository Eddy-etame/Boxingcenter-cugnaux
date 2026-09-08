/**
 * REGISTRE DES TRANSPORTS — comment on y va sans voiture.
 *
 * Pourquoi ce registre existe : « 23 km » est un chiffre qui éloigne. « La
 * ligne 85, direct, du lundi au samedi » est une phrase qui rapproche. Les deux
 * sont vrais ; un seul donne envie de venir. On mesure donc le trajet en
 * lignes, pas en kilomètres.
 *
 * Ce qu'on écrit ici : le numéro de la ligne, ses deux terminus, les communes
 * qu'elle dessert, les jours où elle roule. Ce sont des faits de structure —
 * ils tiennent d'une saison à l'autre.
 *
 * Ce qu'on n'écrit JAMAIS ici : un horaire, une fréquence à la minute, une
 * durée de trajet. Ces chiffres bougent, et un horaire recopié devient faux à
 * la première modification. Chaque ligne porte donc le lien vers sa page
 * officielle : c'est Tisséo qui dit quand, ce site dit quoi.
 */

export type Mode = 'metro' | 'bus' | 'tram' | 'train';

export type Ligne = {
  mode: Mode;
  /** le code tel qu'il s'affiche sur le véhicule */
  code: string;
  /** les deux terminus, dans l'ordre où on les lit sur la girouette */
  parcours: string;
  /** ce que cette ligne fait pour toi, en une phrase */
  role: string;
  /** vrai si elle dépose dans la commune du club, sans correspondance */
  direct: boolean;
  /** les jours publiés par le réseau */
  jours: string;
  /** les communes traversées, dans l'ordre du parcours */
  communes: readonly string[];
  /** la page officielle de la ligne — la seule qui fasse foi sur les horaires */
  href: string;
  /**
   * Les clubs que cette ligne dessert, par identifiant. Absent = le club de
   * destination du site. Utile aux sites qui en visent deux : la ligne dit
   * alors lequel elle atteint.
   */
  clubs?: readonly string[];
};

export type Mouvement = {
  /** d'où l'on part */
  depuis: string;
  /** la ligne à prendre, par son code */
  ligne: string;
  /** la phrase d'itinéraire, sans durée inventée */
  texte: string;
};

export const RESEAU = {
  nom: 'Tisséo',
  site: 'https://www.tisseo.fr/',
  itineraire: 'https://www.tisseo.fr/se-deplacer/itineraires',
} as const;

export const LIBELLE_MODE: Record<Mode, string> = {
  metro: 'Métro',
  bus: 'Bus',
  tram: 'Tram',
  train: 'Train',
};

/**
 * Le mode qui couvre la plus longue partie du trajet, et donc l'onglet ouvert
 * par défaut. Ici c'est le bus : aucune ligne de métro ne franchit la limite
 * entre Cugnaux et Portet-sur-Garonne, c'est la 85 qui fait tout le travail.
 */
export const MODE_PAR_DEFAUT: Mode = 'bus';

export const LIGNES: readonly Ligne[] = [
  {
    mode: 'bus',
    code: '85',
    parcours: 'Basso Cambo ↔ Portet Gare SNCF',
    role: 'La ligne du club. Elle part de Cugnaux et s’arrête à Portet-sur-Garonne, sans correspondance et sans changement de réseau.',
    direct: true,
    jours: 'du lundi au samedi',
    communes: ['Toulouse', 'Cugnaux', 'Villeneuve-Tolosane', 'Portet-sur-Garonne'],
    href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-85',
  },
  {
    mode: 'bus',
    code: '321',
    parcours: 'Portet Gare SNCF ↔ Frouzins Tréville',
    role: 'La transversale du secteur : elle relie Frouzins, Villeneuve-Tolosane et Cugnaux à Portet sans passer par Toulouse.',
    direct: true,
    jours: 'du lundi au vendredi',
    communes: ['Frouzins', 'Villeneuve-Tolosane', 'Cugnaux', 'Portet-sur-Garonne'],
    href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-321',
  },
  {
    mode: 'bus',
    code: 'L11',
    parcours: 'Basso Cambo ↔ Frouzins Complexe Sportif',
    role: 'Le Linéo qui traverse Cugnaux de part en part, sept jours sur sept, avec une amplitude calée sur celle du métro. C’est lui qui t’amène à la correspondance.',
    direct: false,
    jours: 'sept jours sur sept, toute l’année',
    communes: ['Toulouse', 'Cugnaux', 'Villeneuve-Tolosane', 'Frouzins'],
    href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-l11',
  },
  {
    mode: 'bus',
    code: '58',
    parcours: 'Basso Cambo ↔ Seysses / Muret',
    role: 'La ligne du sud du secteur : c’est celle des Seyssois, qui rejoignent le réseau par Basso Cambo.',
    direct: false,
    jours: 'du lundi au samedi',
    communes: ['Toulouse', 'Frouzins', 'Seysses', 'Muret'],
    href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-58',
  },
  {
    mode: 'metro',
    code: 'A',
    parcours: 'Basso Cambo ↔ Balma-Gramont',
    role: 'Le terminus de Basso Cambo est la plaque tournante de tout le sud-ouest toulousain : c’est là que la 85, la 321, la L11 et la 58 se retrouvent. Si tu viens de Toulouse, c’est par là que tu arrives.',
    direct: false,
    jours: 'sept jours sur sept',
    communes: ['Toulouse'],
    href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-a',
  },
  {
    mode: 'train',
    code: 'TER liO',
    parcours: 'Toulouse-Matabiau ↔ Portet-Saint-Simon ↔ Muret / Ariège',
    role: 'La gare de Portet-Saint-Simon est dans la commune du club. Si tu viens de plus loin dans la vallée, c’est le trajet le plus court en distance de rail.',
    direct: true,
    jours: 'toute la semaine',
    communes: ['Toulouse', 'Portet-sur-Garonne', 'Muret'],
    href: 'https://www.lio-occitanie.fr/',
  },
];

/** Les modes réellement utiles ici, dans l'ordre des onglets. */
export const MODES: readonly Mode[] = [...new Set(LIGNES.map((l) => l.mode))];

export const lignesDe = (m: Mode) => LIGNES.filter((l) => l.mode === m);

export const ligne = (code: string) => {
  const l = LIGNES.find((x) => x.code === code);
  if (!l) throw new Error(`Ligne inconnue : ${code}`);
  return l;
};

/** Un itinéraire par commune du site. */
export const MOUVEMENTS: readonly Mouvement[] = [
  {
    depuis: 'Cugnaux',
    ligne: '85',
    texte:
      'Tu montes dans la 85 à Cugnaux et tu descends à Portet. Une seule ligne, aucun changement, du lundi au samedi — exactement les jours où le club est ouvert.',
  },
  {
    depuis: 'Villeneuve-Tolosane',
    ligne: '85',
    texte:
      'La 85 et la 321 desservent toutes les deux Villeneuve-Tolosane et Portet-sur-Garonne. Deux lignes directes pour une commune qui touche déjà celle du club.',
  },
  {
    depuis: 'Frouzins',
    ligne: '321',
    texte:
      'La 321 part de Frouzins Tréville et finit à Portet Gare SNCF. C’est la ligne à connaître : elle fait le trajet en entier, sans passer par Toulouse.',
  },
  {
    depuis: 'Seysses',
    ligne: '58',
    texte:
      'La 58 remonte vers Basso Cambo, où la 85 repart vers Portet. Une correspondance, deux bus, et le métro A au même endroit si tu veux filer sur Toulouse ensuite.',
  },
];

/**
 * La phrase qui remplace « X km ». Elle est affichée partout où l'ancienne
 * distance apparaissait : hero, pages disciplines, pages communes.
 */
export const RESUME = 'Une ligne de bus directe, du lundi au samedi';

/** Le rappel honnête : les horaires appartiennent au réseau, pas à ce site. */
export const AVERTISSEMENT =
  'Les horaires, les fréquences et les arrêts exacts sont publiés par Tisséo et changent au fil des saisons. Ce site te dit quelle ligne prendre ; Tisséo te dit à quelle heure elle passe.';
