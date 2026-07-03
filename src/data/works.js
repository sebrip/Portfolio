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
    id: 'english',
    title: 'English SpeakApp',
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
