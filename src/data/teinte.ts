/**
 * LA TEINTE DU SITE — les mêmes valeurs que `styles/jetons.css`, lisibles
 * depuis un script de build : la vignette OG et le favicon se dessinent avec
 * la couleur du site, pas avec une couleur retapée.
 *
 * Une valeur change ici ET dans jetons.css, jamais dans un seul des deux.
 */
export const TEINTE = {
  papier: '#edf1f1',
  papierCreuse: '#e0e7e7',
  papierVif: '#f7faf9',
  encre: '#11313a',
  graphite: '#4e6870',
  trait: 'rgba(17, 49, 58, 0.16)',
  signal: '#1f8a9c',
  signalTexte: '#0f5c6a',
  signalProfond: '#0a4049',
} as const;
