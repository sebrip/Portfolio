import React, { useState } from 'react'
import './works.scss'
import works from '../../data/works'
import MyModal from '../Modal/modal';

function Works() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedWorkImages, setSelectedWorkImages] = useState([]);

    // Fermeture de la modale
    const closeModal = () => {
        setModalIsOpen(false);
    }

    // Ouverture de la modale avec les images du projet sélectionné
    const openModal = (images) => {
        setSelectedWorkImages(images);
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
                    onClick={() => openModal(work.images)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal(work.images); }}
                >
                    <img className='work-cover' src={work.cover} alt={work.title} />
                    <div className='work-card-description'>
                        <h3 className='img-title'>{work.title}</h3>
                        <p className='work-languages'>#{work.languages}</p>
                    </div>
                </div>
                ))}
            </div>
            <MyModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                images={selectedWorkImages}
            />
        </section>
    );
}

export default Works
