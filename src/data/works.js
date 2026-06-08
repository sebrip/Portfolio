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

const works = [
  {
    id: 'booki',
    title: 'Booki',
    languages: 'HTML/CSS',
    cover: bookiCard,
    images: [bookiCard, bookiMobile, bookiTablette, bookiTablette2],
  },
  {
    id: 'sophie',
    title: 'Sophie Bluel',
    languages: 'HTML/CSS/JavaScript',
    cover: sophieCard,
    images: [sophieCard, sophieLogin, sophieModal],
  },
  {
    id: 'kasa',
    title: 'Kasa',
    languages: 'React.js/SASS',
    cover: kasaCard,
    images: [kasaCard, kasaSlide, kasaAbout, kasaMobile, kasaMobileAbout, kasaMobileSlide],
  },
  {
    id: 'grimoire',
    title: 'Mon vieux grimoire',
    languages: 'Express.js/MongoDB',
    cover: grimoireCard,
    images: [grimoireCard, grimoireCreate, grimoireRate],
  },
]

export default works
