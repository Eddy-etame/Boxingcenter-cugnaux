import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Statique par défaut. Seul /api/contact tourne à la demande : il relaie le
// formulaire vers Inlet (JSON + preuve de travail), ce qu'un <form> natif ne
// peut pas faire seul. Tout le reste est pré-rendu.
export default defineConfig({
  site: 'https://www.boxingcenter-cugnaux.fr',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  compressHTML: true,
  redirects: {
    // Les formes d'URL à mots-clés fonctionnent, mais ne sont pas des pages :
    // fabriquer /club-boxe-cugnaux/ à côté de / serait le schéma de page
    // satellite que Google sanctionne.
    '/club-boxe-cugnaux': '/',
    '/boxe-cugnaux': '/',
    '/sport-combat-cugnaux': '/',
    '/salle-de-boxe-cugnaux': '/',
    '/boxe-anglaise-cugnaux': '/boxe-anglaise/',
    '/club-mma-cugnaux': '/mma/',
    '/salle-mma-cugnaux': '/mma/',
    '/mma-cugnaux': '/mma/',
    '/grappling-cugnaux': '/mma/',
    '/club-boxe-thai-cugnaux': '/kick-boxing/',
    '/boxe-thai-cugnaux': '/kick-boxing/',
    '/club-kick-boxing-cugnaux': '/kick-boxing/',
    '/kick-boxing-cugnaux': '/kick-boxing/',
    '/boxe-pieds-poings-cugnaux': '/kick-boxing/',
    '/boxe-enfant-cugnaux': '/boxe-enfants/',
    '/boxe-femme-cugnaux': '/boxing-fitness/',
    // Les communes satellites : les mêmes motifs, sur leurs pages à elles.
    '/club-boxe-villeneuve-tolosane': '/villeneuve-tolosane/',
    '/salle-mma-villeneuve-tolosane': '/villeneuve-tolosane/',
    '/club-boxe-frouzins': '/frouzins/',
    '/salle-mma-frouzins': '/frouzins/',
    '/club-boxe-seysses': '/seysses/',
    '/salle-mma-seysses': '/seysses/',
    // L'objection « c'est loin » a son adresse.
    '/bus-cugnaux-portet': '/transports/',
    '/acces': '/transports/',
    '/plannings': '/ta-seance/',
    '/tarifs': '/ta-seance/',
  },
});
