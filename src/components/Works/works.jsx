import React, { useState } from 'react'
import './works.scss'
import works from '../../data/works'
import MyModal from '../Modal/modal';

function Works() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedWork, setSelectedWork] = useState(null);

    // Fermeture de la modale
    const closeModal = () => {
        setModalIsOpen(false);
    }

    // Ouverture de la modale avec le projet sélectionné
    const openModal = (work) => {
        setSelectedWork(work);
        setModalIsOpen(true);
    };

    return (
        <section id='works' className='reveal'>
            <h2 className='worksTitle'>Réalisations</h2>
            <span className='worksDesc'>Ici, vous découvrirez une sélection de mes réalisations les plus marquantes en tant que développeur.
             Chaque projet est le reflet de ma passion pour le codage et mon engagement à créer des solutions efficaces et innovantes. Bonne exploration !</span>
             <div className='work-list-container'>
                {works.map((work) => (
                <div
                    className='work-card'
                    key={work.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => openModal(work)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal(work); }}
                >
                    <img className='work-cover' src={work.cover} alt={work.title} loading="lazy" />
                    <div className='work-card-description'>
                        <div className='work-card-head'>
                            <h3 className='img-title'>{work.title}</h3>
                            <p className='work-languages'>#{work.languages}</p>
                        </div>
                        {work.tagline && <p className='work-tagline'>{work.tagline}</p>}
                        {work.badges && (
                            <ul className='work-badges'>
                                {work.badges.slice(0, 3).map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                ))}
            </div>
            <MyModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                work={selectedWork}
            />
        </section>
    );
}

export default Works
