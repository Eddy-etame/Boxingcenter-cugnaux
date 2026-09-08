/**
 * MANIFESTE MÉDIA — la seule porte d'entrée des images.
 *
 * Nom de fichier : `<sujet>-cugnaux` — le sujet est ce qu'on voit, la ville est
 * celle du site. Pas de « boxing-center » dans le nom, pas de numéro d'origine.
 *
 * `alt` décrit la scène, jamais un lieu. `legende` dit ce qu'on voit puis le
 * club de destination du site — toujours, quelle que soit la salle où la photo
 * a été prise.
 *
 * Le lot mélange deux qualités : quatre prises pleine résolution (6 720 px) et
 * quatre relevés de salle au téléphone (768 px). `vignette: true` marque les
 * secondes : elles ne servent jamais de hero ni de pleine largeur, et le
 * pipeline ne fabrique pour elles que les deux petites tailles.
 */

export type Media = {
  /** nom de fichier SEO, sans extension */
  slug: string;
  /** fichier source dans le lot WeTransfer */
  source: string;
  /** ce qu'on voit — pour les lecteurs d'écran et pour Google Images */
  alt: string;
  /** visible sous la photo quand elle est présentée comme document */
  legende?: string;
  /** point d'intérêt, pour les recadrages mobiles */
  focus?: string;
  /** source basse définition : jamais en grand format */
  vignette?: true;
};

const LOT = 'wetransfer_photos-site-bc-cugnaux_2026-09-08_1002';

export const MEDIAS = [
  {
    slug: 'club-boxe-cugnaux',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_014.jpg',
    alt: 'Une forêt de sacs de cuir brun et de sacs noirs suspendus au portique, au-dessus d’un sol turquoise, sous les néons.',
    legende: 'La salle des sacs — Boxing Center Portet-sur-Garonne',
    focus: '48% 45%',
  },
  {
    slug: 'cage-mma-cugnaux',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_019.jpg',
    alt: 'Un groupe de pratiquants à la corde à sauter sur les tapis rouges et bleus, devant le grillage de la cage.',
    legende: 'Échauffement devant la cage — Boxing Center Portet-sur-Garonne',
    focus: '55% 40%',
  },
  {
    slug: 'preparation-physique-cugnaux',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_021.jpg',
    alt: 'Deux rameurs et des vélos alignés sur le gazon synthétique de l’espace cardio, devant un mur noir et rouge.',
    legende: 'L’espace cardio — Boxing Center Portet-sur-Garonne',
    focus: '50% 55%',
  },
  {
    slug: 'pattes-d-ours-cugnaux',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_037.jpg',
    alt: 'Une pratiquante en survêtement rose fixe la patte d’ours orange que le coach lui présente à hauteur de visage.',
    legende: 'Aux pattes d’ours — Boxing Center Portet-sur-Garonne',
    focus: '55% 35%',
  },
  {
    slug: 'boxe-anglaise-cugnaux',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_016.jpg',
    alt: 'Une boxeuse en débardeur frappe les pattes d’ours orange que le coach avance vers elle, au bord du ring.',
    legende: 'Le travail aux pattes — Boxing Center Portet-sur-Garonne',
    focus: '50% 40%',
  },
  {
    slug: 'boxe-enfant-cugnaux',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_046.jpg',
    alt: 'Un jeune pratiquant en garde haute au bord du ring, sous les drapeaux suspendus au plafond.',
    legende: 'En garde, au bord du ring — Boxing Center Portet-sur-Garonne',
    focus: '55% 35%',
  },
  {
    slug: 'sac-de-frappe-cugnaux',
    source: 'PHOTOS PUB BOXING CENTER JEUDI PORTET_038.jpg',
    alt: 'Un pratiquant en sweat du club frappe un sac de cuir brun, dans la rangée alignée sous le plafond de tôle.',
    legende: 'Travail au sac — Boxing Center Portet-sur-Garonne',
    focus: '45% 45%',
  },
  {
    slug: 'ring-de-boxe-cugnaux',
    source: 'WhatsApp Image 2023-12-20 at 14.50.21 (1).jpeg',
    alt: 'Le tapis gris du ring et ses cordes blanches au premier plan, la rangée de sacs et le rideau rouge derrière.',
    legende: 'Le ring — Boxing Center Portet-sur-Garonne',
    focus: '50% 60%',
    vignette: true,
  },
  {
    slug: 'salle-de-boxe-cugnaux',
    source: 'WhatsApp Image 2023-12-20 at 14.50.21 (2).jpeg',
    alt: 'La salle vue en longueur : les drapeaux au plafond, le mot « Boxing » peint au mur, le ring à gauche et le portique de sacs au centre.',
    legende: 'La salle en entier — Boxing Center Portet-sur-Garonne',
    focus: '55% 45%',
    vignette: true,
  },
  {
    slug: 'sac-de-frappe-cugnaux-2',
    source: 'WhatsApp Image 2023-12-20 at 14.50.21 (3).jpeg',
    alt: 'Deux poires de vitesse tendues au premier plan, devant un mur de sacs de frappe noirs et bruns suspendus aux chaînes.',
    legende: 'Poires et sacs — Boxing Center Portet-sur-Garonne',
    focus: '50% 50%',
    vignette: true,
  },
  {
    slug: 'poires-de-vitesse-cugnaux',
    source: 'WhatsApp Image 2023-12-20 at 16.01.30.jpeg',
    alt: 'Les poires de vitesse au premier plan, les sacs alignés au fond et le ring sous les drapeaux du plafond.',
    legende: 'Les poires de vitesse — Boxing Center Portet-sur-Garonne',
    focus: '50% 50%',
    vignette: true,
  },
] as const satisfies readonly Media[];

export type MediaSlug = (typeof MEDIAS)[number]['slug'];

const INDEX = new Map(MEDIAS.map((m) => [m.slug, m as Media]));

export function media(slug: MediaSlug): Media {
  const m = INDEX.get(slug);
  if (!m) throw new Error(`Média inconnu : ${slug}`);
  return m;
}

export const DOSSIER_SOURCE = LOT;

/**
 * Les photos par RÔLE, pas par nom de fichier.
 *
 * Les pages partagées de la famille (contact, première séance, ta séance…)
 * demandent « la photo de hero » ou « la photo de la première séance » ; c'est
 * ce manifeste qui dit laquelle. Un site dont le lot n'a pas la même scène
 * change une ligne ici, et aucune page.
 */
export const ROLES = {
  hero: 'club-boxe-cugnaux',
  signature: 'cage-mma-cugnaux',
  premiereSeance: 'pattes-d-ours-cugnaux',
  effort: 'sac-de-frappe-cugnaux',
  calme: 'ring-de-boxe-cugnaux',
  salle: 'salle-de-boxe-cugnaux',
} as const satisfies Record<string, MediaSlug>;
