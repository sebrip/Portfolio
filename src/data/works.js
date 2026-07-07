// Données locales des réalisations (anciennement sur Firestore/Storage).
// Les images sont importées depuis src/assets/works pour être incluses dans le build.
// Tu peux modifier librement les titres, tags et l'ordre des projets ici.

import bookiCard from '../assets/works/Booki-card.webp'
import bookiMobile from '../assets/works/Booki-mobile.webp'
import bookiTablette from '../assets/works/booki-tablette.webp'
import bookiTablette2 from '../assets/works/booki-tablette2.webp'

import sophieCard from '../assets/works/Sophie-card.webp'
import sophieLogin from '../assets/works/sophie-logIn.webp'
import sophieModal from '../assets/works/sophie-modal.webp'

import kasaCard from '../assets/works/Kasa-Card.webp'
import kasaSlide from '../assets/works/kasa-slide.webp'
import kasaAbout from '../assets/works/Kasa-about.webp'
import kasaMobile from '../assets/works/Kasa-mobile.webp'
import kasaMobileAbout from '../assets/works/Kasa-mobile-about.webp'
import kasaMobileSlide from '../assets/works/Kasa-mobile-slide.webp'

import grimoireCard from '../assets/works/Grimoire-card.webp'
import grimoireCreate from '../assets/works/Grimoire-create.webp'
import grimoireRate from '../assets/works/Grimoire-rate.webp'

import jhConnexion from '../assets/works/jobhunter/01-ecran-connexion.webp'
import jhInscription from '../assets/works/jobhunter/02-inscription-profil-matching.webp'
import jhDashboard from '../assets/works/jobhunter/03-tableau-de-bord-clair.webp'
import jhExpirees from '../assets/works/jobhunter/04-detection-offres-expirees.webp'
import jhDashboardCyber from '../assets/works/jobhunter/05-tableau-de-bord-profil-cyber.webp'
import jhProfil from '../assets/works/jobhunter/06-mon-profil-jauge-force.webp'
import jhCoach from '../assets/works/jobhunter/07-coach-ia-conseils.webp'
import jhMarcheCache from '../assets/works/jobhunter/08-marche-cache-la-bonne-boite.webp'
import jhSombre from '../assets/works/jobhunter/09-theme-sombre.webp'
import jhMobile from '../assets/works/jobhunter/10-mobile-390px.webp'
import jhCarteMatch from '../assets/works/jobhunter/11-carte-match-90.webp'
import jhLettre from '../assets/works/jobhunter/12-lettre-ia-modale.webp'

import englishTitre from '../assets/works/english/01-titre.webp'
import englishConversation from '../assets/works/english/06-conversation.webp'
import englishCours from '../assets/works/english/08-cours.webp'
import englishLecon from '../assets/works/english/10-lecon.webp'
import englishProgression from '../assets/works/english/12-progression.webp'
import englishTestNiveau from '../assets/works/english/13-test-niveau.webp'
import englishJeux from '../assets/works/english/15-jeux.webp'
import englishWordrush from '../assets/works/english/18-wordrush.webp'
import englishPhoneConversation from '../assets/works/english/phone-06-conversation.webp'
import englishPhoneLecon from '../assets/works/english/phone-10-lecon.webp'
import englishPhoneWordrush from '../assets/works/english/phone-18-wordrush.webp'

import vbFeed from '../assets/works/villagebook/vb-01-feed.webp'
import vbProfile from '../assets/works/villagebook/vb-02-profile.webp'
import vbMessages from '../assets/works/villagebook/vb-03-messages.webp'
import vbSearch from '../assets/works/villagebook/vb-04-search.webp'
import vbComments from '../assets/works/villagebook/vb-05-comments.webp'
import vbPhoneFeed from '../assets/works/villagebook/vb-phone-01-feed.webp'
import vbPhoneMessages from '../assets/works/villagebook/vb-phone-02-messages.webp'
import vbPhoneProfile from '../assets/works/villagebook/vb-phone-03-profile.webp'

const works = [
  {
    id: 'jobhunter',
    title: 'JobHunter-AI',
    featured: true,
    languages: 'Python · React · Claude',
    tagline:
      "Agent de veille d'emploi multi-utilisateur : 4 agents IA analysent les offres et rédigent les candidatures — utilisé en conditions réelles pour ma propre recherche.",
    description:
      "L'application collecte les offres de 4 sources publiques (France Travail, Adzuna, Remotive, Jooble), les déduplique à 2 niveaux, " +
      'puis 4 agents IA Claude prennent le relais : Sourcing enrichit les offres incomplètes, Matching note chaque offre sur 100 contre ' +
      "le profil du candidat (stack, métiers, zone, salaire, télétravail), Rédacteur écrit dès 70/100 une lettre de motivation personnalisée " +
      "(éditable, régénérable FR/EN, exports PDF et Word), et Coach donne des conseils de carrière face au vivier réel de 400+ offres. " +
      "L'app surveille aussi l'après : les offres disparues de leur source sont marquées expirées, et un module « marché caché » liste " +
      'les entreprises voisines susceptibles de recruter sans annonce (API La Bonne Boîte). ' +
      'Sécurité faite main selon les normes OWASP : PBKDF2 600 000 itérations, sessions à jeton 256 bits hashé en base, cookie HttpOnly ' +
      'SameSite=Strict, anti-CSRF double, anti-bruteforce et isolation stricte entre comptes. Les visuels montrent des comptes de démonstration.',
    badges: [
      '4 agents IA Claude',
      'React 19 + Vite',
      'FastAPI + SQLite (Python stdlib)',
      'Sécurité OWASP faite main',
      '4 sources d’offres + dédup 2 niveaux',
      'Éco-conception mesurée',
    ],
    eco: {
      title: 'Éco-conception mesurée',
      intro:
        'La frugalité est une contrainte de conception depuis le premier jour — chaque appel IA coûte. Chiffres mesurés sur le build de production :',
      points: [
        'Appels IA conditionnels et plafonnés : enrichissement seulement si une donnée manque, 50 offres notées max par run, cooldowns sur tous les endpoints IA.',
        'Rien n’est analysé deux fois : déduplication à 2 niveaux, offres périmées jamais re-notées, rejets mémorisés (une offre écartée ne coûte plus jamais un appel).',
        'Front sobre : 552 → 183 Ko transférés au 1er chargement (−67 %), bundle JS 206 → 77 Ko gzip (−62 %), jsPDF chargé uniquement au clic « Exporter en PDF ».',
        'Fonte Inter auto-hébergée et sous-ensemble latin/français : 344 → 101 Ko (−71 %), sans CDN. Aucune librairie UI, icônes SVG inline.',
        'Back en Python stdlib (urllib, sqlite3 — zéro dépendance HTTP), base SQLite locale, caches mémoire sur les appels géo.',
        'Lighthouse : Accessibilité 96 · Bonnes pratiques 96 · SEO 91.',
      ],
    },
    // Servie depuis public/ ; PUBLIC_URL gère le sous-chemin GitHub Pages (/Portfolio).
    video: `${process.env.PUBLIC_URL}/jobhunter_ai_visite_guidee.mp4`,
    cover: jhDashboard,
    images: [
      jhDashboard,
      jhCarteMatch,
      jhLettre,
      jhCoach,
      jhExpirees,
      jhMarcheCache,
      jhDashboardCyber,
      jhProfil,
      jhInscription,
      jhConnexion,
      jhSombre,
      // Vue mobile (responsive)
      jhMobile,
    ],
  },
  {
    id: 'english',
    title: 'English SpeakApp',
    featured: true,
    languages: 'Python · OpenAI Realtime',
    tagline: 'Apprends l\'anglais en parlant pour de vrai — conversations vocales en temps réel.',
    description:
      "Application web de pratique de l'anglais à l'oral, propulsée par l'API OpenAI Realtime : " +
      'conversations vocales en temps réel, cours particuliers avec des profs qui se souviennent de toi, ' +
      'et mini-jeux de vocabulaire — le tout dans une PWA installable.',
    badges: [
      'Python / Starlette (ASGI)',
      'OpenAI Realtime API',
      'WebSocket + token éphémère',
      'Web Audio / AudioWorklet',
      'PWA installable',
      'Gamification',
    ],
    repo: 'https://github.com/sebrip/english_app',
    // Servie depuis public/ ; PUBLIC_URL gère le sous-chemin GitHub Pages (/Portfolio).
    video: `${process.env.PUBLIC_URL}/english_speakapp_visite_guidee.mp4`,
    cover: englishConversation,
    images: [
      englishTitre,
      englishConversation,
      englishCours,
      englishLecon,
      englishProgression,
      englishTestNiveau,
      englishJeux,
      englishWordrush,
      // Vues mobiles (responsive)
      englishPhoneConversation,
      englishPhoneLecon,
      englishPhoneWordrush,
    ],
  },
  {
    id: 'villagebook',
    title: 'VillageBook',
    featured: true,
    languages: 'React · Express · Prisma',
    tagline:
      "Réseau social de village façon Facebook — fil d'actualité, profils, abonnements, messagerie temps réel, recherche.",
    description:
      "Réseau social complet pour les habitants d'un village : fil d'actualité, profils et abonnements (follow/unfollow), " +
      'messagerie en temps réel (messages non lus, badge et sons Web Audio), recherche live de villageois, commentaires ' +
      "et édition/suppression de publications. Côté serveur : API REST Express/Prisma sécurisée (JWT, helmet, rate-limit), " +
      "upload d'images avec miniatures (sharp, support HEIC), réinitialisation de mot de passe et confirmation d'email via Brevo. " +
      'Le tout responsive, pensé mobile-first.',
    badges: [
      'React 18 (CRA)',
      'Express 5 / Prisma 5 / SQLite',
      'JWT + bcrypt',
      'Messagerie temps réel',
      'multer + sharp (miniatures, HEIC)',
      'helmet + rate-limit · Brevo',
    ],
    repo: 'https://github.com/sebrip/Villagebook',
    // Servie depuis public/ ; PUBLIC_URL gère le sous-chemin GitHub Pages (/Portfolio).
    video: `${process.env.PUBLIC_URL}/villagebook_visite_guidee.mp4`,
    cover: vbFeed,
    images: [
      vbFeed,
      vbProfile,
      vbMessages,
      vbSearch,
      vbComments,
      // Vues mobiles (responsive)
      vbPhoneFeed,
      vbPhoneMessages,
      vbPhoneProfile,
    ],
  },
  {
    id: 'booki',
    title: 'Booki',
    languages: 'HTML/CSS',
    tagline: "Page d'accueil d'une agence de voyages, intégrée en HTML/CSS responsive.",
    cover: bookiCard,
    images: [bookiCard, bookiMobile, bookiTablette, bookiTablette2],
  },
  {
    id: 'sophie',
    title: 'Sophie Bluel',
    languages: 'HTML/CSS/JavaScript',
    tagline: "Portfolio d'architecte avec galerie dynamique et espace d'administration en JavaScript.",
    cover: sophieCard,
    images: [sophieCard, sophieLogin, sophieModal],
  },
  {
    id: 'kasa',
    title: 'Kasa',
    languages: 'React.js/SASS',
    tagline: 'Plateforme de location immobilière en React : composants réutilisables et routing.',
    cover: kasaCard,
    images: [kasaCard, kasaSlide, kasaAbout, kasaMobile, kasaMobileAbout, kasaMobileSlide],
  },
  {
    id: 'grimoire',
    title: 'Mon vieux grimoire',
    languages: 'Express.js/MongoDB',
    tagline: 'Back-end de notation de livres (Express/MongoDB) : API REST, upload et authentification JWT.',
    cover: grimoireCard,
    images: [grimoireCard, grimoireCreate, grimoireRate],
  },
]

export default works
