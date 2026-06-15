// Données locales des réalisations (anciennement sur Firestore/Storage).
// Les images sont importées depuis src/assets/works pour être incluses dans le build.
// Tu peux modifier librement les titres, tags et l'ordre des projets ici.

import bookiCard from '../assets/works/Booki-card.jpg'
import bookiMobile from '../assets/works/Booki-mobile.jpg'
import bookiTablette from '../assets/works/booki-tablette.jpg'
import bookiTablette2 from '../assets/works/booki-tablette2.jpg'

import sophieCard from '../assets/works/Sophie-card.jpg'
import sophieLogin from '../assets/works/sophie-logIn.jpg'
import sophieModal from '../assets/works/sophie-modal.jpg'

import kasaCard from '../assets/works/Kasa-Card.jpg'
import kasaSlide from '../assets/works/kasa-slide.jpg'
import kasaAbout from '../assets/works/Kasa-about.jpg'
import kasaMobile from '../assets/works/Kasa-mobile.jpg'
import kasaMobileAbout from '../assets/works/Kasa-mobile-about.jpg'
import kasaMobileSlide from '../assets/works/Kasa-mobile-slide.jpg'

import grimoireCard from '../assets/works/Grimoire-card.jpg'
import grimoireCreate from '../assets/works/Grimoire-create.jpg'
import grimoireRate from '../assets/works/Grimoire-rate.jpg'

import englishTitre from '../assets/works/english/01-titre.png'
import englishConversation from '../assets/works/english/06-conversation.png'
import englishCours from '../assets/works/english/08-cours.png'
import englishLecon from '../assets/works/english/10-lecon.png'
import englishProgression from '../assets/works/english/12-progression.png'
import englishTestNiveau from '../assets/works/english/13-test-niveau.png'
import englishJeux from '../assets/works/english/15-jeux.png'
import englishWordrush from '../assets/works/english/18-wordrush.png'
import englishPhoneConversation from '../assets/works/english/phone-06-conversation.png'
import englishPhoneLecon from '../assets/works/english/phone-10-lecon.png'
import englishPhoneWordrush from '../assets/works/english/phone-18-wordrush.png'

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
