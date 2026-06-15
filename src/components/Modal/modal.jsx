import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';
import { FaChevronLeft, FaChevronRight, FaGithub, FaTimes } from 'react-icons/fa'

function MyModal({ isOpen, onRequestClose, work }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = useMemo(() => (work && work.images) || [], [work]);
  const hasVideo = Boolean(work && work.video);
  const isRich = Boolean(work && work.description);

  const closeModal = () => {
    setCurrentSlide(0);
    onRequestClose();
  };

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }

  // Diapositive précédente
  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1,
    )
  }

  // Vérifie s'il y a plus d'une image pour afficher les flèches et le numéro du carrousel
  const showArrowsAndNumber = images && images.length > 1

  // Utilise un effet pour définir un intervalle de défilement automatique toutes les 7 secondes
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 7000)

    return () => clearInterval(interval);
  }, [images]);

  // Tant que la modale est ouverte : on verrouille le défilement de la page
  // (sinon on peut naviguer dans le site derrière) et on ferme avec Échap.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setCurrentSlide(0);
        onRequestClose();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onRequestClose]);

  if (!isOpen || !work) return null;

  return createPortal(
    <>
      <div className="overlay" onClick={closeModal}></div>
      <article className={isRich ? "modal open rich" : "modal open"}>
        <button type="button" className="close-button" onClick={closeModal} aria-label="Fermer">
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

        <div className="slideshow">
          <div className='slider'>
            {images.map((image, index) => (
              <img
                key={index}
                className={index === currentSlide ? 'Slide active' : 'slide'}
                src={image}
                alt={`slide-${index + 1}`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              />
            ))}
          </div>
          {/* Affichage des flèches de navigation et le numéro du carrousel */}
          {showArrowsAndNumber && (
            <>
              <span className="left-arrow" onClick={previousSlide}>
                <FaChevronLeft />
              </span>
              <span className="right-arrow" onClick={nextSlide}>
                <FaChevronRight />
              </span>
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
