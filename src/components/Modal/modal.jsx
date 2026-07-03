import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';
import { FaChevronLeft, FaChevronRight, FaGithub, FaTimes } from 'react-icons/fa'

function MyModal({ isOpen, onRequestClose, work }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  // L'auto-défilement se met en pause au survol et s'arrête définitivement
  // dès que l'utilisateur navigue lui-même dans le carrousel
  const [autoPaused, setAutoPaused] = useState(false);
  const [userNavigated, setUserNavigated] = useState(false);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const images = useMemo(() => (work && work.images) || [], [work]);
  const hasVideo = Boolean(work && work.video);
  const isRich = Boolean(work && work.description);

  const closeModal = () => {
    setCurrentSlide(0);
    setUserNavigated(false);
    onRequestClose();
  };

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setUserNavigated(true);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }

  // Diapositive précédente
  const previousSlide = () => {
    setUserNavigated(true);
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1,
    )
  }

  // Vérifie s'il y a plus d'une image pour afficher les flèches et le numéro du carrousel
  const showArrowsAndNumber = images && images.length > 1

  // Auto-défilement toutes les 7 secondes — sauf pause, navigation manuelle,
  // ou préférence utilisateur pour réduire les animations
  useEffect(() => {
    if (!images || images.length <= 1 || autoPaused || userNavigated) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 7000)

    return () => clearInterval(interval);
  }, [images, autoPaused, userNavigated]);

  // Tant que la modale est ouverte : défilement de la page verrouillé, fermeture
  // avec Échap, focus déplacé sur la croix puis piégé dans la modale (cycle Tab),
  // et rendu à l'élément déclencheur à la fermeture.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    if (closeButtonRef.current) closeButtonRef.current.focus();
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setCurrentSlide(0);
        onRequestClose();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button, a[href], video, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    };
  }, [isOpen, onRequestClose]);

  if (!isOpen || !work) return null;

  return createPortal(
    <>
      <div className="overlay" onClick={closeModal}></div>
      <article
        className={isRich ? "modal open rich" : "modal open"}
        role="dialog"
        aria-modal="true"
        aria-label={work.title}
        ref={modalRef}
      >
        <button type="button" className="close-button" onClick={closeModal} aria-label="Fermer" ref={closeButtonRef}>
          <FaTimes />
        </button>

        {isRich && (
          <header className="modal-header">
            <h3 className="modal-title">{work.title}</h3>
            {work.tagline && <p className="modal-tagline">{work.tagline}</p>}
          </header>
        )}

        {hasVideo && (
          <video className="modal-video" controls preload="metadata" poster={work.cover}>
            <source src={work.video} type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        )}

        <div
          className="slideshow"
          onMouseEnter={() => setAutoPaused(true)}
          onMouseLeave={() => setAutoPaused(false)}
        >
          <div className='slider'>
            {/* Seule l'image active est montée : les autres ne sont pas téléchargées */}
            {images.length > 0 && (
              <img
                key={currentSlide}
                className='slide active'
                src={images[currentSlide]}
                alt={`${work.title} — capture ${currentSlide + 1}`}
              />
            )}
          </div>
          {/* Affichage des flèches de navigation et le numéro du carrousel */}
          {showArrowsAndNumber && (
            <>
              <button type="button" className="left-arrow" onClick={previousSlide} aria-label="Image précédente">
                <FaChevronLeft />
              </button>
              <button type="button" className="right-arrow" onClick={nextSlide} aria-label="Image suivante">
                <FaChevronRight />
              </button>
              <div className="slide-number">
                {currentSlide + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {isRich && (
          <footer className="modal-info">
            <p className="modal-description">{work.description}</p>
            {work.badges && (
              <ul className="modal-badges">
                {work.badges.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {work.repo && (
              <a
                className="modal-repo"
                href={work.repo}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub /> Voir le code sur GitHub
              </a>
            )}
          </footer>
        )}
      </article>
    </>,
    document.body
  );
}

export default MyModal;
