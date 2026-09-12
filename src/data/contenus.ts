/**
 * CONTENU ÉDITORIAL des pages disciplines.
 *
 * Ton : clair, local, rassurant, sportif. Tutoiement respectueux. Le fait
 * avant l'adjectif. Chaque bloc part d'une question que la personne se pose
 * vraiment, pas d'un argument qu'on veut placer.
 *
 * Aucun fait volatil ici — horaires, prix, âges vivent dans verite.ts et
 * offres.ts, et n'existent qu'à un seul endroit.
 *
 * Les titres de FAQ qui citent une recherche entre guillemets ne sont pas un
 * artifice : ce sont les mots exacts que les gens tapent, et y répondre par un
 * fait vaut mieux que de les ignorer ou de les répéter en boucle dans le
 * texte.
 */

import type { MediaSlug } from './medias';
import type { PageDiscipline } from './offres';

export type Bloc = { titre: string; texte: string };

export type Contenu = {
  id: PageDiscipline;
  h1: string;
  /** la réponse immédiate, avant tout le reste — ce que citent Google et les IA */
  chapeau: string;
  photoHero: MediaSlug;
  photoSecondaire: MediaSlug;
  /** ce que le visiteur gagne concrètement — titre de la bande de conversion */
  promesse: string;
  blocs: readonly Bloc[];
  /** le déroulé d'une séance, dans l'ordre */
  seance: readonly string[];
  faq: readonly Bloc[];
};

export const CONTENUS: readonly Contenu[] = [
  {
    id: 'boxe-anglaise',
    h1: 'Cours de boxe anglaise à proximité de Cugnaux',
    chapeau:
      "Deux mains gantées et un coach : c'est tout ce qu'il faut pour commencer la boxe anglaise, quel que soit ton niveau. Depuis Cugnaux, elle se pratique à Boxing Center Portet-sur-Garonne — la commune limitrophe, de l'autre côté de la route d'Espagne — six jours sur sept, de 10h à 21h30.",
    photoHero: 'boxe-anglaise-cugnaux',
    photoSecondaire: 'ring-de-boxe-cugnaux',
    promesse: 'Une boxe apprise geste par geste, dans la commune qui touche Cugnaux.',
    blocs: [
      {
        titre: 'Quatre frappes, et tout le reste dans les jambes',
        texte:
          "Direct, crochet, uppercut, et le jab qui ouvre la voie : la boxe anglaise s'arrête là. Avec si peu de coups, la différence se fait sur les appuis, la distance, la garde et la lecture de l'adversaire. On y gagne par le placement plus que par la force, et c'est ce qui permet à un débutant sans passé sportif de progresser vite.",
      },
      {
        titre: 'Le sac d’abord, le partenaire plus tard',
        texte:
          "Au début, on frappe le sac, on saute à la corde, on travaille aux pattes d'ours avec le coach et on se déplace à vide. L'opposition vient ensuite, et seulement pour qui la demande. Des pratiquants passent des saisons entières sans elle, et progressent quand même.",
      },
      {
        titre: 'Ce que deux séances par semaine changent',
        texte:
          "À ce rythme, les premiers effets arrivent vite : le souffle en premier, puis la posture. Pendant un round au sac, le geste prend toute la place, et la journée de travail s'efface. Beaucoup s'inscrivent pour la forme et restent pour ce moment-là.",
      },
      {
        titre: 'De Cugnaux à la route d’Espagne',
        texte:
          "C'est l'avantage que peu de communes du secteur peuvent revendiquer : Cugnaux et Portet-sur-Garonne se touchent. On descend par la route de Toulouse et la D63, ou on prend la rocade, et le club est au 61 route d'Espagne. Ce qui fait tenir une saison, c'est l'habitude plus que le trajet : avec la salle dans la commune d'à côté, on y va aussi les soirs sans envie, et on est encore là en novembre.",
      },
    ],
    seance: [
      'Échauffement : corde, mobilité, déplacements à vide',
      'Technique : un coup, montré au ralenti puis enchaîné',
      'Sac ou pattes d’ours : l’application, avec correction du coach',
      'Renforcement : gainage et abdominaux au sol',
      'Retour au calme et étirements',
    ],
    faq: [
      {
        titre: 'Où ça se passe exactement ?',
        texte:
          "Au 61 route d'Espagne, à Portet-sur-Garonne : la commune qui touche Cugnaux. C'est la salle de 600 m² du réseau Boxing Center, avec un ring, une cage et un mur de sacs. Les Cugnalais y arrivent sans quitter le secteur.",
      },
      {
        titre: 'Commencer la boxe à 40 ans passés, c’est raisonnable ?',
        texte:
          "Tout à fait. La boxe se règle sur celui qui la pratique : la même séance existe à trois intensités, et c'est le coach qui décide de la tienne. Ce qui compte n'est pas ton point de départ, c'est le nombre de fois où tu reviens.",
      },
      {
        titre: 'Faut-il acheter du matériel avant la première séance ?',
        texte:
          "Une tenue de sport, une bouteille d'eau, une serviette : c'est tout. Pour découvrir, tu trouves les gants et le matériel collectif sur place. Si tu continues, tu prendras tes propres gants et tes bandes — le club te dira lesquels, et ce n'est pas un investissement lourd.",
      },
      {
        titre: 'Quelle différence avec le kick-boxing ?',
        texte:
          "La boxe anglaise n'utilise que les poings ; le kick-boxing ajoute les jambes. Beaucoup commencent par l'anglaise parce que le nombre de choses à apprendre est plus réduit — quatre coups, une garde — puis ajoutent les jambes une fois les appuis en place. Les deux sont publiés par le club, tu peux changer d'avis.",
      },
    ],
  },
  {
    id: 'mma',
    h1: 'Club MMA et grappling à proximité de Cugnaux',
    chapeau:
      "Frappe debout, corps à corps, combat au sol : le MMA passe de l'un à l'autre. Depuis Cugnaux, il se pratique à Boxing Center Portet-sur-Garonne, la commune limitrophe : c'est le seul club du réseau équipé d'une cage, et l'entraînement s'y fait dedans. Le grappling et le jiu-jitsu brésilien y sont publiés séparément, sans aucune frappe.",
    photoHero: 'cage-mma-cugnaux',
    photoSecondaire: 'sac-de-frappe-cugnaux-2',
    promesse: 'Entrer dans une vraie cage, avec des gens dont le métier est de t’y apprendre à te tenir.',
    blocs: [
      {
        titre: 'Frapper, saisir, contrôler',
        texte:
          "Trois terrains se succèdent en MMA : la frappe à distance, la saisie et la projection au contact, puis le contrôle et la soumission au sol. Tout le travail consiste à passer de l'un à l'autre, et la plupart des débutants se découvrent à l'aise sur l'un des trois dès les premières semaines. C'est ce qui rend la discipline si rapide à accrocher.",
      },
      {
        titre: 'La cage, et ce qu’on y travaille',
        texte:
          "La cage n'est pas un décor : sa paroi fait partie du jeu. On y travaille les appuis contre le grillage, les relevés, les sorties de contrôle — des situations qui n'existent tout simplement pas sur un tatami ouvert. Boxing Center Portet-sur-Garonne est le seul club du réseau à en avoir une, ce qui fait de la commune voisine de Cugnaux l'adresse la plus proche pour s'y entraîner.",
      },
      {
        titre: 'Le grappling, sans les coups',
        texte:
          "Le grappling et le jiu-jitsu brésilien, publiés ensemble par le club, sont du MMA sans la frappe : contrôle, projections, soumissions. Aucun coup n'est porté, jamais. C'est la porte d'entrée que choisissent beaucoup de gens qui veulent le combat sans l'impact — et c'est aussi, techniquement, ce qui décide la majorité des combats de MMA.",
      },
      {
        titre: 'Depuis Cugnaux, la limite communale et rien d’autre',
        texte:
          "Cugnaux touche Portet-sur-Garonne. Depuis la mairie ou depuis le Vieux Cugnaux, on rejoint la route d'Espagne par la route de Toulouse et la D63, ou par la rocade. En transports, les lignes Tisséo qui desservent Cugnaux — L11, 48, 53, 58, 85, 87, 321 — rejoignent le métro à Basso Cambo ; les horaires appartiennent à Tisséo, pas à ce site.",
      },
    ],
    seance: [
      'Échauffement spécifique : nuque, hanches, déplacements au sol',
      'Debout, en gants : une séquence de frappe dosée par le coach',
      'Au contact : saisir, amener au sol, se dégager',
      'Au sol : tenir une position, puis finir par une soumission',
      'Un passage dans la cage, puis le retour au calme',
    ],
    faq: [
      {
        titre: 'La cage est où ?',
        texte:
          "À Portet-sur-Garonne, au 61 route d'Espagne — la commune qui touche Cugnaux. C'est la seule cage du réseau Boxing Center, et l'entraînement de MMA s'y déroule dedans, pas à côté.",
      },
      {
        titre: 'Jamais fait de MMA : on peut s’y mettre ?',
        texte:
          "Oui. Les premières séances apprennent à chuter, à se relever et à tenir une position, sans combat. Le contact arrive par étapes, et l'intensité se règle. Les gens qui se blessent en sports de combat sont presque toujours ceux qui ont brûlé les étapes, et c'est précisément le rôle d'un coach de ne pas te laisser faire.",
      },
      {
        titre: 'Grappling ou MMA : par lequel commencer ?',
        texte:
          "Si recevoir un coup t'inquiète, le grappling et le jiu-jitsu brésilien sont faits pour toi : le club publie les deux, et aucun ne comporte de frappe. Si c'est la frappe qui te plaît, va directement au MMA en cage. Beaucoup finissent par faire les deux dans la même semaine.",
      },
      {
        titre: 'Le MMA, c’est dangereux ?',
        texte:
          "En compétition, c'est un sport de contact. À l'entraînement, c'est un sport de répétition : on travaille des séquences, en contrôlant. La règle qui protège tout le monde est la même partout — on s'arrête quand le partenaire tape, et on s'arrête quand le coach le dit.",
      },
    ],
  },
  {
    id: 'kick-boxing',
    h1: 'Kick-boxing et boxe pieds-poings à proximité de Cugnaux',
    chapeau:
      "Poings et jambes à la fois : le kick-boxing est une boxe pieds-poings. Depuis Cugnaux, elle se pratique à Boxing Center Portet-sur-Garonne, la commune limitrophe, pour les adultes comme pour les enfants et les ados. Le club publie le kick-boxing ; il ne publie pas de créneau de Muay Thaï, et on ne va pas te dire le contraire.",
    photoHero: 'sac-de-frappe-cugnaux',
    photoSecondaire: 'poires-de-vitesse-cugnaux',
    promesse: 'Les jambes en renfort des poings, et une garde qui reste en place.',
    blocs: [
      {
        titre: 'Poings et jambes : ce qui change',
        texte:
          "Ajouter les jambes ne double pas la difficulté : ça la multiplie. La distance n'est plus la même, la garde doit descendre sans s'ouvrir, l'appui devient un problème permanent puisqu'on frappe sur une jambe. C'est pour ça que le kick-boxing est le meilleur révélateur de niveau technique d'une salle — et pourquoi il fatigue autant la première fois.",
      },
      {
        titre: 'Ce que le club propose',
        texte:
          "Boxing Center Portet-sur-Garonne publie « Kick-boxing » pour les adultes et « Kick-boxing enfants/ados » pour les plus jeunes. Il ne publie pas de créneau de Muay Thaï : la boxe thaïlandaise autorise les coudes, les genoux et le corps à corps, ce qui en fait une autre discipline avec d'autres règles. Si c'est précisément le Muay Thaï que tu cherches, dis-le dans ton message — on te répondra avec ce qui existe réellement dans le réseau.",
      },
      {
        titre: 'K1, full contact : quelle différence',
        texte:
          "Sous le mot « kick-boxing » vivent plusieurs règlements : le full contact interdit les coups sous la ceinture, le K1 autorise le low kick et le corps à corps bref. À l'entraînement, seules quelques consignes changent ; l'échauffement, la technique et le sac restent identiques. Le nom du règlement ne compte que le jour où on monte sur un ring.",
      },
      {
        titre: 'Quel créneau choisir',
        texte:
          "Le club accueille de 10h à 21h30, du lundi au samedi. Comme Portet touche Cugnaux, le soir reste jouable même en sortant tard du travail, et le midi est le moment le plus calme de la salle. Les horaires exacts de chaque cours sont sur le planning du club : on ne les recopie pas ici, parce qu'une grille recopiée devient fausse à la première modification.",
      },
    ],
    seance: [
      'Échauffement : corde, mobilité de hanche, déliement des chevilles',
      'Technique pieds-poings : une combinaison, décomposée puis enchaînée',
      'Sac et paos : puissance et placement, avec correction',
      'Renforcement du bas du corps et du gainage',
      'Étirements longs des hanches et des jambes',
    ],
    faq: [
      {
        titre: 'Un club de boxe thaï près de Cugnaux ?',
        texte:
          "Du kick-boxing, pas du Muay Thaï. Les deux sont des boxes pieds-poings, mais la thaï ajoute les coudes, les genoux et le corps à corps. Le club de Portet-sur-Garonne publie le kick-boxing pour adultes et pour enfants/ados ; c'est la réponse honnête à cette recherche, et elle couvre la très grande majorité de ce que les gens attendent quand ils la tapent.",
      },
      {
        titre: 'Il faut être souple ?',
        texte:
          "La souplesse est un résultat, et elle vient avec les séances. Les premières semaines, les coups de pied restent bas — et le low kick, qui est bas par définition, est de toute façon l'arme la plus utilisée du kick-boxing. La hauteur vient toute seule avec les étirements de fin de séance.",
      },
      {
        titre: 'C’est réservé aux jeunes ?',
        texte:
          "Le club publie un créneau adulte et un créneau enfants/ados, distincts. Beaucoup d'adultes arrivent au kick-boxing après quelques mois de boxe anglaise, parce qu'ils veulent élargir ; d'autres commencent directement par là. Les deux fonctionnent.",
      },
      {
        titre: 'Mon fils fait déjà du foot : les deux sont compatibles ?',
        texte:
          "Le kick-boxing travaille exactement ce qui manque au foot en salle : le gainage, la garde des appuis, la coordination haut-bas. Une séance par semaine suffit à en tirer le bénéfice sans surcharger. Pose la question au club pour le créneau, il te dira lequel s'insère le mieux.",
      },
    ],
  },
  {
    id: 'boxe-enfants',
    h1: 'Boxe enfant et ado à proximité de Cugnaux',
    chapeau:
      "Le club publie trois créneaux pour les plus jeunes : Baby boxe, boxe éducative et kick-boxing enfants/ados. Tout s'y fait en touché contrôlé, sans mise en danger. Depuis Cugnaux, cela se passe à Boxing Center Portet-sur-Garonne, la commune limitrophe — un trajet court, ce qui compte quand c'est à faire deux fois par semaine.",
    photoHero: 'boxe-enfant-cugnaux',
    photoSecondaire: 'salle-de-boxe-cugnaux',
    promesse: 'Un cadre, une règle, et un enfant qui apprend à se contenir avant d’apprendre à frapper.',
    blocs: [
      {
        titre: 'Ce qu’un enfant apprend d’abord',
        texte:
          "Il apprend à se tenir, à regarder, à attendre son tour, à s'arrêter net quand on le lui demande. La frappe arrive après, et toujours contrôlée. Beaucoup de parents amènent leur enfant pour qu'il se dépense, et découvrent que la boxe éducative commence par poser un cadre. C'est ce cadre, plus que la dépense, qui calme les enfants qu'on lui confie pour ça.",
      },
      {
        titre: 'Trois cours selon l’âge',
        texte:
          "La Baby boxe fait découvrir, par le jeu, l'équilibre et la distance. Vient ensuite la boxe éducative, avec le geste, la règle et le respect de celui d'en face. Le kick-boxing enfants/ados est la suite, pour ceux qui veulent aussi travailler les jambes. Les âges exacts de chaque créneau sont publiés par le club — on ne les invente pas ici.",
      },
      {
        titre: 'Un contact toujours contrôlé',
        texte:
          "Chaque touche est contrôlée : l'enfant vise, effleure et retient son geste. Il porte des protections à sa taille, et ces créneaux excluent toute opposition libre. Un enfant qui se fait mal en boxe éducative, c'est un incident, pas une étape du programme.",
      },
      {
        titre: 'Le trajet, pour un parent',
        texte:
          "C'est là que la géographie compte vraiment : Cugnaux touche Portet-sur-Garonne. On descend par la route de Toulouse et la D63, ou par la rocade, et le club est au 61 route d'Espagne. Deux allers-retours par semaine dans la commune d'à côté, c'est tenable une année entière — ce qui n'est pas toujours vrai à l'autre bout de l'agglomération.",
      },
    ],
    seance: [
      'Échauffement en jeu : déplacements, réactions, coordination',
      'La règle redite : garde haute, bonne distance, arrêt au signal',
      'Un geste simple, que le coach corrige chez chacun',
      'Le même geste au sac, en touchant sans frapper',
      'Retour au calme, et un mot du coach pour finir',
    ],
    faq: [
      {
        titre: 'À partir de quel âge à Portet ?',
        texte:
          "Le club publie un créneau Baby boxe pour les plus petits, puis la boxe éducative, puis le kick-boxing enfants/ados. Les tranches d'âge exactes figurent sur le planning du club, et elles peuvent bouger d'une saison à l'autre : c'est la seule source à jour, et c'est pour ça qu'on t'y envoie plutôt que de recopier un chiffre.",
      },
      {
        titre: 'Mon enfant est très timide. Ça peut aller ?',
        texte:
          "Souvent, c'est même lui qui en profite le plus. Un cours de boxe éducative n'oblige personne à s'exposer : le travail se fait en binôme, sur une consigne claire, pendant que le coach passe de l'un à l'autre. Beaucoup d'enfants réservés y trouvent leur premier sport où l'on n'est pas jugé sur la performance devant tout le monde.",
      },
      {
        titre: 'Et si c’est justement pour canaliser trop d’énergie ?',
        texte:
          "C'est le cas de figure le plus courant, et il fonctionne — à une condition : que l'enfant accepte la règle. La boxe donne beaucoup à ceux qui ont trop d'énergie, mais elle commence par leur demander de s'arrêter au signal. C'est ce contrat-là qui produit l'effet que les parents cherchent.",
      },
      {
        titre: 'Faut-il acheter des gants dès le début ?',
        texte:
          "Une tenue de sport et une bouteille d'eau suffisent pour les premières séances. Si ton enfant continue, le club te dira quel matériel prendre et à quelle taille — inutile d'anticiper, les mains grandissent vite.",
      },
    ],
  },
  {
    id: 'boxing-fitness',
    h1: 'Boxing fitness et préparation physique à proximité de Cugnaux',
    chapeau:
      "Le geste de boxe et le cardio, sans opposition et sans coup reçu. Le club publie deux créneaux pour ça : Lady Boxing, entre femmes, et Préparation physique, ouverte à tous. Depuis Cugnaux, c'est à Boxing Center Portet-sur-Garonne, la commune limitrophe, six jours sur sept de 10h à 21h30.",
    photoHero: 'pattes-d-ours-cugnaux',
    photoSecondaire: 'preparation-physique-cugnaux',
    promesse: 'Le défoulement et la forme, sans jamais monter sur un ring si tu n’en as pas envie.',
    blocs: [
      {
        titre: 'De la boxe, sans adversaire',
        texte:
          "On fait tout ce que fait un boxeur — la corde, les déplacements, le sac, les combinaisons, le gainage — sauf la partie où quelqu'un te rend les coups. La dépense est réelle : un round de sac correctement mené sollicite plus qu'une machine, parce qu'il fait travailler la coordination en même temps que le souffle. C'est aussi pour ça que ça ne devient jamais ennuyeux.",
      },
      {
        titre: 'Lady Boxing, entre femmes',
        texte:
          "Parce qu'il lève l'obstacle qui empêche le plus de femmes de pousser la porte d'une salle de sports de combat la première fois. Le contenu n'est pas allégé : c'est le même travail technique, dans un groupe où personne n'est le seul de son genre. Beaucoup rejoignent ensuite les créneaux mixtes, et beaucoup restent — les deux choix sont valables.",
      },
      {
        titre: 'La préparation physique',
        texte:
          "C'est le créneau que prennent les pratiquants qui veulent tenir les trois derniers rounds : gainage, force, souffle. Il se suffit à lui-même si tu cherches d'abord la condition physique, et il double n'importe quelle autre discipline si tu veux progresser plus vite. L'espace cardio du club — vélos, rameurs, gazon — sert exactement à ça.",
      },
      {
        titre: 'Reprendre après une longue pause',
        texte:
          "Le premier obstacle n'est jamais physique, il est logistique : trouver un créneau qu'on peut tenir. Depuis Cugnaux, la salle est dans la commune d'à côté — c'est peu de choses un soir de motivation, et c'est décisif un soir de fatigue. Prends le créneau que ton mois de novembre supportera, pas celui que ta semaine de septembre te fait envie.",
      },
    ],
    seance: [
      'Échauffement cardio : corde, vélo ou rameur',
      'Technique : une combinaison de boxe, apprise puis enchaînée',
      'Circuit au sac : séries chronométrées, intensité choisie',
      'Renforcement : gainage, poids du corps, charges légères',
      'Étirements et retour au calme',
    ],
    faq: [
      {
        titre: 'Je vais devoir combattre ?',
        texte:
          "Le boxing fitness et la préparation physique se pratiquent sans opposition, du début à la fin. Tu peux pratiquer des années sans jamais faire face à quelqu'un — et beaucoup de gens font exactement ça.",
      },
      {
        titre: 'Le Lady Boxing est réservé aux femmes ?',
        texte:
          "C'est un créneau publié par le club sous ce nom, pensé pour un groupe de femmes. Les autres créneaux du club sont mixtes. Si tu préfères commencer entre femmes puis basculer, c'est possible : le club te dira ce que sa formule permet.",
      },
      {
        titre: 'Je veux perdre du poids : est-ce que ça marche ?',
        texte:
          "Une séance de boxe dépense beaucoup, mais ce n'est pas là que se joue l'essentiel — c'est dans la régularité et dans ce qui se passe le reste de la semaine. Ce que la boxe apporte de plus qu'une machine, c'est qu'on y revient : on progresse sur un geste, pas seulement sur un chiffre.",
      },
      {
        titre: 'J’ai un genou fragile, je peux venir ?',
        texte:
          "Dis-le au coach dès la première séance : c'est une information utile, pas un aveu. Beaucoup d'exercices se substituent — le sac remplace le saut, le rameur remplace la course. En cas de blessure ou de suivi médical en cours, l'avis de ton médecin passe avant le nôtre.",
      },
    ],
  },
] as const;

export const contenu = (id: PageDiscipline): Contenu => {
  const c = CONTENUS.find((x) => x.id === id);
  if (!c) throw new Error(`Contenu inconnu : ${id}`);
  return c;
};
