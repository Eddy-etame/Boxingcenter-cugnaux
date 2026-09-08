/**
 * REGISTRE DES COMMUNES SATELLITES.
 *
 * Une page par commune, et le contrat qui les rend légitimes : le test du
 * remplacement. Si l'on remplace le nom de la commune par un autre et que la
 * page reste vraie, la page n'a pas le droit d'exister.
 *
 * Chaque entrée porte donc ce qu'aucune autre commune ne peut porter : sa
 * population datée, son gentilé, son code INSEE, son intercommunalité, ses
 * VRAIES communes limitrophes, l'axe réel qui mène au club depuis CHEZ ELLE,
 * ses lignes de bus, et un fait local qui situe.
 *
 * Ce qu'on n'écrit jamais ici : un temps de trajet, une distance au mètre, une
 * adresse dans la commune. La géographie est celle de Wikipédia, relevée le
 * 2026-09-08 ; quand une commune ne touche pas la ville du site, on l'écrit —
 * mentir sur une limite communale se vérifie en dix secondes sur une carte.
 */

import type { MediaSlug } from './medias';

export type CommuneId = 'villeneuve-tolosane' | 'frouzins' | 'seysses';

export type Commune = {
  id: CommuneId;
  nom: string;
  /** au génitif, pour « depuis <nom> » et « les <gentile> » */
  gentile: string;
  codePostal: string;
  insee: string;
  population: string;
  intercommunalite: string;
  /** les vraies communes limitrophes, dans l'ordre de Wikipédia */
  limitrophes: readonly string[];
  /** vrai si la commune touche celle du club de destination */
  toucheLeClub: boolean;
  /** la phrase de géographie qui situe la commune par rapport au club */
  situation: string;
  /** l'axe routier réel, sans temps de trajet */
  route: string;
  /** les transports en commun publiés */
  transport: string;
  /** un fait local honnête, qui sert à situer et jamais à décorer */
  faitLocal: string;
  /** l'info pratique qui suit, en une phrase */
  faitLocalEcho: string;
  photo: MediaSlug;
  /** les quatre cotes du plan de la page */
  cotes: readonly { cle: string; valeur: string }[];
  /** title, description et H1 propres */
  titre: string;
  description: string;
  /** trois questions au minimum, propres à la commune */
  faq: readonly { titre: string; texte: string }[];
  /** un pont sortant vers un autre site de la famille, quand il est vrai */
  pont?: { texte: string; ancre: string; href: string };
};

export const COMMUNES: readonly Commune[] = [
  {
    id: 'villeneuve-tolosane',
    nom: 'Villeneuve-Tolosane',
    gentile: 'Villeneuvois',
    codePostal: '31270',
    insee: '31588',
    population: '11 044 habitants (2023)',
    intercommunalite: 'Toulouse Métropole',
    limitrophes: ['Cugnaux', 'Frouzins', 'Plaisance-du-Touch', 'Portet-sur-Garonne', 'Roques'],
    toucheLeClub: true,
    situation:
      'Villeneuve-Tolosane touche Portet-sur-Garonne, exactement comme Cugnaux. C’est la deuxième commune du secteur à partager une limite avec celle du club : le trajet ne franchit qu’une seule frontière communale.',
    route:
      'Par la RN 264, ou par l’A64 à la sortie n° 37, puis la route d’Espagne — le club est au 61.',
    transport:
      'Les lignes Tisséo 47, 57 et 58 desservent la commune et rejoignent le métro à Basso Cambo.',
    faitLocal:
      'Villeneuve-Tolosane est la commune la mieux desservie du secteur pour aller au club : la 85 et la 321 s’y arrêtent toutes les deux, et toutes les deux finissent à Portet Gare SNCF.',
    faitLocalEcho:
      'À la gare, tu prends la L5 et tu descends route d’Espagne. Le club est au 61.',
    photo: 'boxe-anglaise-cugnaux',
    cotes: [
      { cle: 'Limite', valeur: 'commune limitrophe du club' },
      { cle: 'Route', valeur: 'RN 264 · A64 sortie 37' },
      { cle: 'Bus', valeur: 'Tisséo 47 · 57 · 58' },
      { cle: 'Accueil', valeur: '10h → 21h30, 6 j/7' },
    ],
    titre: 'Club de boxe et MMA près de Villeneuve-Tolosane | Boxing Center',
    description:
      'Boxe, MMA et kick-boxing près de Villeneuve-Tolosane : Boxing Center accueille les Villeneuvois à Portet-sur-Garonne, la commune limitrophe. Ouvert 6 j/7.',
    faq: [
      {
        titre: 'Depuis Villeneuve-Tolosane, par où on passe ?',
        texte:
          'Par la RN 264 en direction de Portet, ou par l’A64 à la sortie n° 37, puis la route d’Espagne. Villeneuve-Tolosane et Portet-sur-Garonne sont deux communes limitrophes : le trajet ne traverse aucune autre commune. En transports, les lignes Tisséo 47, 57 et 58 rejoignent Basso Cambo.',
      },
      {
        titre: 'Villeneuve-Tolosane ou Cugnaux : c’est le même club ?',
        texte:
          'Oui, et c’est logique — les deux communes touchent Portet-sur-Garonne, chacune de son côté. Villeneuvois et Cugnalais s’entraînent dans la même salle, sur le même planning, avec les mêmes coachs, au 61 route d’Espagne.',
      },
      {
        titre: 'Mon enfant de Villeneuve-Tolosane peut s’inscrire ?',
        texte:
          'Le club publie trois créneaux pour les plus jeunes : Baby boxe, boxe éducative et kick-boxing enfants/ados. Le travail y est en touché contrôlé, jamais en opposition dure. Les âges exacts et les jours sont sur le planning du club — c’est lui qui fait foi, pas ce site.',
      },
      {
        titre: 'Est-ce qu’il faut être en forme pour commencer ?',
        texte:
          'Non. Une première séance se passe au sac, à la corde et aux pattes d’ours, avec un coach qui règle l’intensité sur toi. La condition physique est ce que la boxe fabrique, pas ce qu’elle exige à l’entrée.',
      },
    ],
  },
  {
    id: 'frouzins',
    nom: 'Frouzins',
    gentile: 'Frouzinois',
    codePostal: '31270',
    insee: '31203',
    population: '9 805 habitants (2023)',
    intercommunalite: 'Le Muretain Agglo',
    limitrophes: ['Fonsorbes', 'Plaisance-du-Touch', 'Roques', 'Seysses', 'Villeneuve-Tolosane'],
    toucheLeClub: false,
    situation:
      'Frouzins ne touche pas Portet-sur-Garonne, mais elle touche Roques et Villeneuve-Tolosane, qui la touchent toutes les deux. Depuis Frouzins, le club est à une commune d’écart — la route file droit vers l’est sans détour.',
    route:
      'Par la D68 vers Villeneuve-Tolosane puis la RN 264, ou par Roques et la route d’Espagne. Une seule commune à traverser dans les deux cas.',
    transport:
      'Le Linéo L11 relie le complexe sportif à Basso Cambo ; les lignes 58, 87 et 321 desservent le reste de la commune.',
    faitLocal:
      'La 321 part de Frouzins Tréville et finit à Portet Gare SNCF : c’est la seule ligne du secteur qui fait le trajet sans passer par Toulouse.',
    faitLocalEcho:
      'Elle roule du lundi au vendredi. Le samedi, passe par Villeneuve-Tolosane et prends la 85.',
    photo: 'boxe-enfant-cugnaux',
    cotes: [
      { cle: 'Limite', valeur: 'une commune d’écart' },
      { cle: 'Route', valeur: 'D68 · RN 264 · Roques' },
      { cle: 'Bus', valeur: 'Linéo L11 · 58 · 87 · 321' },
      { cle: 'Accueil', valeur: '10h → 21h30, 6 j/7' },
    ],
    titre: 'Club de boxe et MMA près de Frouzins | Boxing Center',
    description:
      'Boxe anglaise, MMA et kick-boxing accessibles depuis Frouzins : Boxing Center entraîne les Frouzinois à Portet-sur-Garonne, une commune plus loin. Ouvert 6 j/7.',
    faq: [
      {
        titre: 'Depuis Frouzins, quel est le chemin le plus simple ?',
        texte:
          'Deux itinéraires, aussi directs l’un que l’autre : par la D68 et Villeneuve-Tolosane, puis la RN 264 ; ou par Roques et la route d’Espagne. Frouzins ne touche pas Portet-sur-Garonne, mais elle touche les deux communes qui la touchent — il n’y a donc qu’un seul passage à faire.',
      },
      {
        titre: 'Frouzins ou Cugnaux : même club, même planning ?',
        texte:
          'Le même. Boxing Center Portet-sur-Garonne est le club de destination des deux communes, avec un seul planning et un seul tarif publiés sur le site du club. Frouzins relève du Muretain Agglo et Cugnaux de Toulouse Métropole : ça change l’intercommunalité, pas la salle.',
      },
      {
        titre: 'Je viens de Frouzins en bus, c’est jouable ?',
        texte:
          'Le Linéo L11 et les lignes 58, 87 et 321 relient Frouzins au réseau toulousain, dont Basso Cambo. Les horaires et les correspondances sont du ressort de Tisséo, pas de ce site : vérifie-les chez eux avant de caler ton créneau, puis choisis l’horaire sur le planning du club.',
      },
      {
        titre: 'Il y a des créneaux pour les enfants de Frouzins ?',
        texte:
          'Oui : Baby boxe, boxe éducative et kick-boxing enfants/ados figurent parmi les neuf disciplines publiées par le club. Le principe est constant — le geste, la règle, le respect du partenaire, et le touché contrôlé.',
      },
    ],
  },
  {
    id: 'seysses',
    nom: 'Seysses',
    gentile: 'Seyssois',
    codePostal: '31600',
    insee: '31547',
    population: '10 539 habitants (2023)',
    intercommunalite: 'Le Muretain Agglo',
    limitrophes: ['Fonsorbes', 'Frouzins', 'Lamasquère', 'Muret', 'Roques', 'Saint-Lys'],
    toucheLeClub: false,
    situation:
      'Seysses est la charnière du secteur : elle touche Muret au sud et Frouzins au nord, et l’A64 la traverse. C’est la commune d’où l’on rejoint le club aussi bien en descendant vers Muret qu’en remontant vers Portet.',
    route:
      'Par l’A64 à la sortie n° 35, puis la direction de Toulouse jusqu’à la sortie de Portet et la route d’Espagne.',
    transport:
      'La ligne Tisséo 58 rejoint le métro à Basso Cambo ; la ligne 315 dessert la gare de Muret, sur la ligne TER Toulouse–Bayonne.',
    faitLocal:
      'Seysses est sur l’A64 à la sortie 35, et touche Muret. En voiture, tu remontes vers Portet ; en bus, la 58 t’emmène à Basso Cambo, où la 85 repart vers la gare de Portet.',
    faitLocalEcho:
      'À la gare de Portet, la L5 te dépose route d’Espagne, devant le club.',
    photo: 'sac-de-frappe-cugnaux',
    cotes: [
      { cle: 'Limite', valeur: 'touche Muret et Frouzins' },
      { cle: 'Route', valeur: 'A64 sortie 35' },
      { cle: 'Bus', valeur: 'Tisséo 58 · 315 · gare de Muret' },
      { cle: 'Accueil', valeur: '10h → 21h30, 6 j/7' },
    ],
    titre: 'Club de boxe et MMA près de Seysses (31600) | Boxing Center',
    description:
      'Boxe, MMA et sports de combat accessibles depuis Seysses : Boxing Center accueille les Seyssois à Portet-sur-Garonne par l’A64, sortie 35. Ouvert 6 j/7.',
    faq: [
      {
        titre: 'Depuis Seysses, on prend l’autoroute ?',
        texte:
          'C’est le plus simple : l’A64 dessert Seysses à la sortie n° 35. On remonte vers Toulouse jusqu’à la sortie de Portet, puis on suit la route d’Espagne. En transports, la ligne Tisséo 58 rejoint Basso Cambo et la 315 dessert la gare de Muret.',
      },
      {
        titre: 'Seysses est plus près de Muret que de Cugnaux, ça change quoi ?',
        texte:
          'Rien sur la salle : Boxing Center Portet-sur-Garonne est le club de destination dans les deux cas, et c’est la même A64 qui y mène. Seysses touche effectivement Muret, ce qui en fait la commune la mieux placée du secteur pour choisir son sens de circulation selon l’heure.',
      },
      {
        titre: 'Je travaille à Toulouse et j’habite Seysses : quel créneau ?',
        texte:
          'Le club accueille de 10h à 21h30, du lundi au samedi. Si tu remontes déjà l’A64 le matin, le midi ou la fin de journée s’enchaînent sans détour. Les horaires exacts de chaque cours sont publiés sur le planning du club — c’est la seule source à jour.',
      },
      {
        titre: 'Et pour les enfants de Seysses ?',
        texte:
          'Trois créneaux existent : Baby boxe, boxe éducative et kick-boxing enfants/ados. Ils partagent la même règle — on apprend à toucher sans faire mal, et à s’arrêter quand le coach le dit.',
      },
    ],
    pont: {
      texte:
        'Seysses touche Muret. Si tu pars du sud de la commune, le site de Muret décrit le même club vu depuis l’autre côté de l’A64.',
      ancre: 'Club de boxe et MMA près de Muret',
      href: 'https://www.boxingcenter-muret.fr/',
    },
  },
] as const;

export const commune = (id: CommuneId): Commune => {
  const c = COMMUNES.find((x) => x.id === id);
  if (!c) throw new Error(`Commune inconnue : ${id}`);
  return c;
};

/** Les communes servies, pour `areaServed` de l'Organization. */
export const AIRE_SERVIE: readonly string[] = COMMUNES.map((c) => c.nom);
