import React from 'react';
import './intro.scss';
import Photo from '../../assets/photo-sebastien2.webp'
import { FiBriefcase } from 'react-icons/fi'

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Bonjour, </span>
                <h1 className='introText'>Je suis <span className='introName'>Sébastien</span> <br />Développeur — Agents IA</h1>
                <p className='introP'>Fort d'une formation en développement web (JavaScript / React.js / Node.js),<br />je me spécialise dans la conception d'applications propulsées par des agents IA en Python.</p>
                <button className="btn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}>
                    <FiBriefcase aria-hidden="true" className='btnImg'/> Recrutez-moi
                </button>
            </div>
            <img src={Photo} alt="Sébastien Ripert" className="my-photo" />
        </section>
    )
}

export default Intro
