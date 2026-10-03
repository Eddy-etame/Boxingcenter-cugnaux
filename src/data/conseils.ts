/**
 * LES CONSEILS — le texte des articles sur le matériel (/conseils/).
 *
 * Écrit pour ce site, et pour lui seul : aucune phrase d'ici n'existe sur un
 * autre site du réseau. Chaque conseil part de ce que les clubs publient
 * (src/data/offres.ts) et renvoie, depuis son texte, vers la boutique de
 * matériel du groupe, vers les pages du site et vers le club. Le titre et la
 * description de chaque page vivent dans le registre des routes.
 *
 * Les prix cités portent leur date ; « maj » est la date de la dernière
 * relecture du conseil, affichée sur la page.
 */

export type ConseilId = 'equipement-kick-boxing' | 'choisir-protege-dents';

export type Conseil = {
  id: ConseilId;
  /** l'étiquette de la carte, sur l'index */
  carte: string;
  h1: string;
  /** la réponse, en deux phrases qui se lisent seules */
  chapeau: string;
  resume: string;
  photo: string;
  /** la ligne de la vignette de partage */
  sujet: string;
  publie: string;
  maj: string;
  sections: readonly { sur: string; h2: string; paras: readonly string[] }[];
  tableau?: { sur: string; h2: string; entetes: readonly string[]; lignes: readonly (readonly string[])[]; note: string };
  faq: readonly { titre: string; texte: string }[];
};

export const INDEX_CONSEILS = {
  h1: 'S’équiper pour Portet, sans rien acheter d’inutile.',
  chapeau: 'Depuis Cugnaux, le club est à Portet-sur-Garonne. Deux conseils pour remplir ton sac : l’équipement du kick-boxing, pièce par pièce, et le protège-dents — lequel prendre, et comment le mouler.',
  photo: 'club-boxe-cugnaux',
  sujet: 'Conseils matériel · depuis',
  finH2: 'D’abord le cours, ensuite le matériel.',
  finTexte: 'Une séance à Portet-sur-Garonne suffit pour savoir quoi acheter : tu viens en tenue de sport, et tu repars avec ta liste.',
} as const;

export const LIBELLES = {
  sommaire: 'Dans ce conseil',
  maj: 'Mis à jour le',
  questionsSur: 'Questions',
  questionsH2: 'Ce qu’on nous demande depuis Cugnaux.',
  autresSur: 'À lire aussi',
  autresH2: 'Le conseil suivant, pour finir ton sac.',
  lire: 'Lire le conseil',
  tous: 'Voir tous les conseils',
  finH2: 'Le coach de Portet te dira le reste.',
  finTexte: 'Viens essayer en tenue de sport : après une séance, tu sais ce que ton cours demande, et dans quel ordre l’acheter.',
  finBouton: { texte: 'Trouver ma séance', route: 'ta-seance' },
  finContact: 'Poser ma question',
} as const;

export const CONSEILS: readonly Conseil[] = [
  {
    id: 'equipement-kick-boxing',
    carte: 'Kick-boxing',
    h1: 'Kick-boxing : ce qu’il faut acheter, et quand.',
    chapeau: 'Le kick-boxing ajoute les jambes aux poings : il faut des gants, des protège-tibias avec protège-pied, un protège-dents et une coquille. À Portet-sur-Garonne, tu commences sans rien de tout cela, en tenue de sport.',
    resume: 'Du premier mois à l’opposition : les gants, puis les tibias, la bouche et le bas-ventre.',
    photo: 'sac-de-frappe-cugnaux',
    sujet: 'Conseil · Kick-boxing',
    publie: '2026-10-02',
    maj: '2026-10-03',
    sections: [
      {
        sur: 'Le cours',
        h2: 'Poings et jambes, garde haute.',
        paras: [
          'À Portet-sur-Garonne, le <a class="lien" href="/kick-boxing/">kick-boxing</a> se travaille poings et jambes, en garde haute et sur appuis. Le club a aussi un créneau kick-boxing enfants et ados, pour les jeunes qui veulent ajouter les jambes après la boxe éducative.',
          'Pour la première séance, tu n’achètes rien. La liste qui suit se remplit au fil des semaines.',
        ],
      },
      {
        sur: 'Les gants',
        h2: 'Les mêmes gants qu’en boxe anglaise.',
        paras: [
          'Le kick-boxing se pratique en gants fermés. Une paire de 12 oz couvre le sac et les exercices techniques ; pour l’opposition, on passe en général à 14 ou 16 oz selon le gabarit.',
          'Tu ne sais pas quel poids prendre ? <a class="lien" href="https://www.boutique-de-boxe.com/guides/quelle-taille-gants-de-boxe/" rel="noopener">Le guide « Quelle taille de gants de boxe choisir ? »</a> de Boutique de Boxe, la boutique de matériel du groupe, part de la séance, puis du gabarit.',
        ],
      },
      {
        sur: 'Les jambes',
        h2: 'Des protège-tibias qui couvrent le pied.',
        paras: [
          'Un low-kick bloqué tibia contre tibia, sans protection, met fin à la séance. Les <a class="lien" href="https://www.boutique-de-boxe.com/protege-tibias/" rel="noopener">protège-tibias de kick-boxing</a> couvrent le tibia et le dessus du pied, et se ferment par des scratchs derrière le mollet.',
          'Essaie-les debout, puis en levant le genou : ils ne doivent ni tourner, ni descendre sur la cheville.',
        ],
      },
      {
        sur: 'La bouche, le bas-ventre',
        h2: 'Protège-dents et coquille : les deux qui ne se discutent pas.',
        paras: [
          'Dès le premier exercice avec partenaire, le protège-dents est dans la bouche — <a class="lien" href="/conseils/choisir-protege-dents/">notre conseil pour le choisir et le mouler</a> se lit en cinq minutes. La <a class="lien" href="https://www.boutique-de-boxe.com/coquilles/" rel="noopener">coquille</a>, elle, se porte sous le short dès que les coups de pied visent les jambes.',
        ],
      },
      {
        sur: 'Plus tard',
        h2: 'Casque et chevillères : pas tout de suite.',
        paras: [
          'Le <a class="lien" href="https://www.boutique-de-boxe.com/casques-de-boxe/" rel="noopener">casque</a> ne s’achète qu’au moment du sparring : son tour de tête et sa couverture se choisissent selon la pratique. Les chevillères sont un confort — utiles si tes chevilles sont fragiles, pas indispensables. Boutique de Boxe a réuni <a class="lien" href="https://www.boutique-de-boxe.com/materiel-kick-boxing/" rel="noopener">le matériel de kick-boxing</a> sur une seule page, avec le nombre de modèles de chaque rayon.',
          'Pour quitter le club déjà équipé, <a class="lien" href="https://boutique.boxingcenter.fr/materiel" rel="noopener">la boutique Boxing Center</a> vend gants et protège-tibias en ligne, à récupérer en salle. Le club de Portet a aussi écrit <a class="lien" href="https://boxing-center-portet.fr/conseils/equipement-boxe-debutant/" rel="noopener">son guide du débutant</a>, discipline par discipline.',
        ],
      },
    ],
    tableau: {
      sur: 'À l’essayage',
      h2: 'Chaque pièce, et ce qu’il faut vérifier.',
      entetes: ['Pièce', 'Quand', 'À vérifier en l’essayant'],
      lignes: [
        ['Gants de 12 oz', 'Premier mois', 'Le poing se ferme sans forcer, bandes posées'],
        ['Protège-tibias avec pied', 'Travail à deux', 'Ils ne tournent pas quand tu lèves le genou'],
        ['Protège-dents', 'Travail à deux', 'Il tient sans que tu serres les dents'],
        ['Coquille', 'Coups de pied aux jambes', 'Elle reste en place quand tu sautes'],
        ['Casque', 'Sparring', 'Le tour de tête, mesuré au-dessus des sourcils'],
      ],
      note: 'Avant de commander, parle-en au coach : il connaît ton cours et ton gabarit.',
    },
    faq: [
      {
        titre: 'Quel équipement pour débuter le kick-boxing ?',
        texte: 'Des gants de 12 oz et des bandes le premier mois, puis des protège-tibias avec protège-pied, un protège-dents et une coquille dès le travail à deux. Le casque attend le sparring.',
      },
      {
        titre: 'Faut-il des chaussures pour le kick-boxing ?',
        texte: 'Non : le kick-boxing se pratique pieds nus sur le tapis. Les chaussures de boxe servent à la boxe anglaise, sur le ring.',
      },
      {
        titre: 'Le protège-tibias est-il obligatoire en kick-boxing ?',
        texte: 'Oui, dès que les coups de pied se travaillent avec un partenaire. Il protège celui qui frappe autant que celui qui bloque.',
      },
      {
        titre: 'Où faire du kick-boxing près de Cugnaux ?',
        texte: 'À Boxing Center Portet-sur-Garonne, qui publie un cours de kick-boxing pour les adultes et un créneau kick-boxing enfants et ados.',
      },
    ],
  },
  {
    id: 'choisir-protege-dents',
    carte: 'Protège-dents',
    h1: 'Protège-dents : le choisir, puis le mouler.',
    chapeau: 'Un protège-dents à mouler suffit à la plupart des pratiquants : il prend l’empreinte de tes dents dans l’eau chaude en moins d’une minute. Le modèle simple couvre l’arcade du haut ; le double tient les deux mâchoires, au prix d’une respiration moins libre.',
    resume: 'Simple ou double, avec ou sans appareil dentaire : le bon modèle, et le moulage pas à pas.',
    photo: 'pattes-d-ours-cugnaux',
    sujet: 'Conseil · Protège-dents',
    publie: '2026-10-02',
    maj: '2026-10-02',
    sections: [
      {
        sur: 'Le moment',
        h2: 'La première protection à acheter.',
        paras: [
          'Devant un sac, tes dents ne risquent rien. Le jour où le cours passe au travail à deux — en <a class="lien" href="/boxe-anglaise/">boxe anglaise</a>, en kick-boxing ou en <a class="lien" href="/mma/">MMA</a> —, un coup mal contrôlé suffit. C’est pour cela qu’il passe avant le casque et avant la coquille.',
          'Boutique de Boxe, la boutique en ligne du groupe, passe toutes les protections en revue dans <a class="lien" href="https://www.boutique-de-boxe.com/guides/choisir-protections/" rel="noopener">son guide pour choisir ses protections</a>.',
        ],
      },
      {
        sur: 'Le modèle',
        h2: 'Simple, double, ou pour appareil dentaire.',
        paras: [
          'Le simple se pose sur les dents du haut : on respire et on parle presque normalement. C’est le modèle le plus courant.',
          'Le double emboîte les deux arcades et verrouille la mâchoire : plus protecteur sur un choc au menton, plus gênant pour respirer. Si tu portes des bagues, prends un modèle prévu pour un appareil dentaire. <a class="lien" href="https://www.boutique-de-boxe.com/protege-dents/" rel="noopener">Les protège-dents de Boutique de Boxe</a> précisent le type sur chaque fiche.',
        ],
      },
      {
        sur: 'Le moulage',
        h2: 'Une casserole, une minute, un miroir.',
        paras: [
          'Fais chauffer de l’eau et coupe le feu aux premiers frémissements. Plonge le protège-dents le temps indiqué sur sa notice, sors-le avec une cuillère, passe-le une seconde sous l’eau froide, puis pose-le sur les dents du haut.',
          'Mords sans forcer, aspire l’air, et appuie avec les doigts le long de la gencive. Trempe-le ensuite dans l’eau froide pour le figer. S’il bouge quand tu ouvres la bouche, recommence : la plupart des modèles se remoulent.',
        ],
      },
      {
        sur: 'La taille',
        h2: 'Adulte ou junior : c’est la mâchoire qui décide.',
        paras: [
          'La taille junior convient aux enfants et aux mâchoires étroites. Pour un enfant en boxe éducative, il faut le remplacer quand la dentition change : <a class="lien" href="/boxe-enfants/">la page boxe enfants</a> présente les cours du club, de la baby boxe aux ados.',
        ],
      },
      {
        sur: 'L’entretien',
        h2: 'Rincé, séché, dans sa boîte.',
        paras: [
          'Rince-le à l’eau froide après chaque séance, laisse-le sécher à l’air et range-le dans une boîte percée — jamais au fond d’un gant. Change-le quand il se déforme, se fend ou ne tient plus seul.',
          'Le club vend un protège-dents adulte à <a class="lien" href="https://boutique.boxingcenter.fr/materiel" rel="noopener">la boutique Boxing Center</a>, en retrait à la salle.',
        ],
      },
    ],
    tableau: {
      sur: 'Comparatif',
      h2: 'Simple ou double : ce que chacun change.',
      entetes: ['Critère', 'Simple', 'Double'],
      lignes: [
        ['Ce qu’il couvre', 'L’arcade du haut', 'Les deux arcades'],
        ['Respiration', 'Libre', 'Par les ouvertures, plus courte'],
        ['Parler au coach', 'Possible', 'Difficile'],
        ['Pour qui', 'La plupart des pratiquants', 'Sur avis du coach, pour l’opposition appuyée'],
      ],
      note: 'Avec un appareil dentaire, demande l’avis de ton orthodontiste avant de choisir.',
    },
    faq: [
      {
        titre: 'À partir de quand faut-il un protège-dents ?',
        texte: 'Dès le premier exercice avec un partenaire, quelle que soit la discipline. Au sac et aux pattes d’ours, il n’est pas nécessaire.',
      },
      {
        titre: 'Protège-dents simple ou double ?',
        texte: 'Simple pour la grande majorité : il protège l’arcade du haut et laisse respirer. Le double verrouille la mâchoire, mais gêne la respiration.',
      },
      {
        titre: 'Peut-on boxer avec un appareil dentaire ?',
        texte: 'Oui, avec un protège-dents prévu pour les bagues. Demande l’avis de l’orthodontiste avant de reprendre l’opposition.',
      },
      {
        titre: 'Combien coûte un protège-dents ?',
        texte: 'À la boutique Boxing Center, au 1er octobre 2026, le modèle adulte à mouler est à 5,90 €.',
      },
    ],
  },
];

export function conseil(id: ConseilId): Conseil {
  const c = CONSEILS.find((x) => x.id === id);
  if (!c) throw new Error(`Conseil inconnu : ${id}`);
  return c;
}

/** Le sujet et la photo de la vignette d'une page de conseils — jamais ceux d'une autre page. */
export function vignetteDuConseil(id: string): { sujet: string; photo: string } | undefined {
  if (id === 'conseils') return { sujet: INDEX_CONSEILS.sujet, photo: INDEX_CONSEILS.photo };
  const c = CONSEILS.find((x) => x.id === id);
  return c && { sujet: c.sujet, photo: c.photo };
}

/** « 2 octobre 2026 », depuis une date ISO. */
export function dateFr(iso: string): string {
  const d = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T12:00:00Z`));
  return d.replace(/^1 /, '1er ');
}
