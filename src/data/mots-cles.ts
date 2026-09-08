/**
 * REGISTRE DES MOTS-CLÉS — le territoire de recherche, page par page.
 *
 * Principe : plus de pertinence PAR page, pas plus de pages. On ne fabrique
 * pas /club-boxe-cugnaux/ à côté de /boxe-anglaise/ — ce serait exactement le
 * schéma de page satellite que Google sanctionne. On garde huit pages de fond,
 * trois pages de commune qui portent chacune une géographie réelle, et on rend
 * chacune beaucoup plus dense.
 *
 * Un motif n'entre dans une page que si la page répond réellement à la
 * question qu'il porte. Le contrôle de build vérifie chaque prioritaire dans le
 * texte visible : chaque motif gardé est une promesse d'écriture.
 *
 * Les neuf motifs imposés (`seo-keywords-satellites.json`) sont déclinés sur
 * Cugnaux ET sur chacune des trois communes, sur leur page respective.
 */

import type { RouteId } from './routes';

export type Cluster = {
  page: RouteId;
  /** vérifiés au build dans le texte visible de la page */
  prioritaires: readonly string[];
  /** ce que la page gagne à porter, sans obligation */
  secondaires: readonly string[];
};

export const CONTEXTE_GEO = {
  ville: 'Cugnaux',
  codePostal: '31270',
  gentile: 'Cugnalais',
  departement: 'Haute-Garonne',
  secteur: 'sud-ouest toulousain',
} as const;

export const CLUSTERS: readonly Cluster[] = [
  {
    page: 'accueil',
    prioritaires: [
      'club de boxe Cugnaux',
      'sport de combat Cugnaux',
      'MMA',
      'Portet-sur-Garonne',
      'commune limitrophe',
    ],
    secondaires: [
      'boxe Cugnaux',
      'club de boxe près de Cugnaux',
      'salle de boxe près de Cugnaux',
      'club MMA Cugnaux',
      'sports de combat Cugnaux',
      'cours de boxe Cugnaux',
      'boxe anglaise Cugnaux',
      'kick boxing Cugnaux',
      'boxe thaï Cugnaux',
      'boxe enfant Cugnaux',
      'boxe débutant Cugnaux',
      '31270',
      'Cugnalais',
      'Toulouse Métropole',
      'sud-ouest toulousain',
      'Haute-Garonne',
      'Basso Cambo',
      'Francazal',
    ],
  },
  {
    page: 'boxe-anglaise',
    prioritaires: ['boxe anglaise Cugnaux', 'débutant'],
    secondaires: [
      'cours de boxe Cugnaux',
      'club de boxe Cugnaux',
      'boxe loisir',
      'apprendre à boxer',
      'cours de boxe adulte',
      'boxe débutant Cugnaux',
      'noble art',
      'sparring',
      'pattes d’ours',
    ],
  },
  {
    page: 'mma',
    prioritaires: ['club MMA Cugnaux', 'salle MMA Cugnaux', 'grappling', 'cage'],
    secondaires: [
      'cours MMA Cugnaux',
      'MMA débutant Cugnaux',
      'club MMA près de Cugnaux',
      'grappling Cugnaux',
      'jiu-jitsu brésilien',
      'JJB Cugnaux',
      'arts martiaux mixtes',
      'combat au sol',
      'cage MMA',
    ],
  },
  {
    page: 'kick-boxing',
    prioritaires: [
      'club kick boxing Cugnaux',
      'boxe pieds poings Cugnaux',
      'club boxe thaï Cugnaux',
    ],
    secondaires: [
      'kick-boxing Cugnaux',
      'kickboxing Cugnaux',
      'boxe thaïlandaise',
      'Muay Thaï',
      'K1',
      'striking',
      'full contact',
    ],
  },
  {
    page: 'boxe-enfants',
    prioritaires: ['boxe enfant Cugnaux', 'boxe éducative', 'Baby boxe'],
    secondaires: [
      'cours de boxe enfant Cugnaux',
      'Baby boxe Cugnaux',
      'boxe ado Cugnaux',
      'sport de combat enfant',
      'kick-boxing enfants',
      'boxe adolescent',
    ],
  },
  {
    page: 'boxing-fitness',
    prioritaires: ['boxing fitness Cugnaux', 'femme'],
    secondaires: [
      'boxe femme Cugnaux',
      'Lady Boxing',
      'cardio boxing Cugnaux',
      'boxe sans opposition',
      'préparation physique',
      'remise en forme',
      'reprendre le sport',
    ],
  },
  {
    page: 'premiere-seance',
    prioritaires: ['première séance', 'Cugnaux', 'débutant', 'essai'],
    secondaires: [
      'première séance boxe Cugnaux',
      'cours d’essai boxe Cugnaux',
      'boxe débutant Cugnaux',
      'commencer la boxe',
      'essayer le MMA',
      'jamais fait de boxe',
      'que faut-il apporter',
    ],
  },
  {
    page: 'ta-seance',
    prioritaires: ['Cugnaux', 'créneau', 'Portet-sur-Garonne'],
    secondaires: [
      'planning boxe Cugnaux',
      'horaires boxe Cugnaux',
      'quel cours de boxe Cugnaux',
      'boxe le soir Cugnaux',
      'boxe le midi',
      'boxe le samedi',
      'cours de boxe après le travail',
    ],
  },
  {
    page: 'villeneuve-tolosane',
    prioritaires: [
      'club de boxe Villeneuve-Tolosane',
      'boxe anglaise Villeneuve-Tolosane',
      'club MMA Villeneuve-Tolosane',
      'salle MMA Villeneuve-Tolosane',
      'sport de combat Villeneuve-Tolosane',
      'club boxe thaï Villeneuve-Tolosane',
      'club kick boxing Villeneuve-Tolosane',
      'boxe pieds poings Villeneuve-Tolosane',
    ],
    secondaires: [
      'boxe Villeneuve-Tolosane',
      'salle de boxe Villeneuve-Tolosane',
      'boxe enfant Villeneuve-Tolosane',
      'Villeneuvois',
      '31270',
      'RN 264',
      'Basso Cambo',
    ],
  },
  {
    page: 'frouzins',
    prioritaires: [
      'club de boxe Frouzins',
      'boxe anglaise Frouzins',
      'club MMA Frouzins',
      'salle MMA Frouzins',
      'sport de combat Frouzins',
      'club boxe thaï Frouzins',
      'club kick boxing Frouzins',
      'boxe pieds poings Frouzins',
    ],
    secondaires: [
      'boxe Frouzins',
      'salle de boxe Frouzins',
      'boxe enfant Frouzins',
      'Frouzinois',
      '31270',
      'Linéo L11',
      'Le Muretain Agglo',
    ],
  },
  {
    page: 'seysses',
    prioritaires: [
      'club de boxe Seysses',
      'boxe anglaise Seysses',
      'club MMA Seysses',
      'salle MMA Seysses',
      'sport de combat Seysses',
      'club boxe thaï Seysses',
      'club kick boxing Seysses',
      'boxe pieds poings Seysses',
    ],
    secondaires: [
      'boxe Seysses',
      'salle de boxe Seysses',
      'boxe enfant Seysses',
      'Seyssois',
      '31600',
      'A64',
      'gare de Muret',
    ],
  },
  {
    page: 'contact',
    prioritaires: ['Cugnaux', 'contact'],
    secondaires: [
      'club de boxe près de Cugnaux',
      'inscription boxe Cugnaux',
      'cours d’essai boxe Cugnaux',
      'essayer la boxe',
    ],
  },
] as const;

export const cluster = (page: RouteId) => CLUSTERS.find((c) => c.page === page);

/**
 * Les neuf motifs imposés, instanciés sur un lieu.
 *
 * Ils servent la « légende » des pages communes : la colonne de gauche cite la
 * recherche telle qu'elle se tape, la colonne de droite y répond par un fait.
 * C'est la légende d'un plan — la liste de ce que les symboles veulent dire —
 * et c'est la seule forme sous laquelle une liste de requêtes a le droit
 * d'exister sur une page.
 */
export const motifs = (lieu: string) =>
  [
    `club de boxe ${lieu}`,
    `boxe anglaise ${lieu}`,
    `club MMA ${lieu}`,
    `salle MMA ${lieu}`,
    `sport de combat ${lieu}`,
    `club kick boxing ${lieu}`,
    `boxe pieds poings ${lieu}`,
    `club boxe thaï ${lieu}`,
  ] as const;
