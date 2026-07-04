import React, { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-scroll';
import { FiSend, FiMenu, FiX } from 'react-icons/fi'
import cv from '../../assets/CV-Sebastien-Ripert.pdf'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="navInner">
            <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} className='logoLink' aria-label="Retour à l'accueil">
                <span className='logo'>SR<span className='logoCursor' aria-hidden='true'>_</span></span>
            </Link>
            <div className="desktopMenu">
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>À propos</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Mes compétences</Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Réalisations</Link>
                <a href={cv} target="_blank" rel="noopener noreferrer" className='desktopMenuListItem cvLink'>CV</a>
            </div>
                <button className="desktopMenuBtn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}>
                    <FiSend aria-hidden="true" className="desktopMenuImg" /> Contactez-moi
                </button>

                <button
                    type="button"
                    className='mobileMenu'
                    onClick={() => setShowMenu(!showMenu)}
                    aria-expanded={showMenu}
                    aria-label={showMenu ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
                >
                    {showMenu ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </button>
            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>À propos</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Mes compétences</Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Réalisations</Link>
                <a href={cv} target="_blank" rel="noopener noreferrer" className='listItem' onClick={()=> setShowMenu(false)}>CV</a>
                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Contact</Link>
            </div>
            </div>
        </nav>
    )
}

export default Navbar