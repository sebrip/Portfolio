import React, { useState } from 'react';
import './navbar.scss';
import logo from '../../assets/logo-portfolio.webp'
import contactImg from '../../assets/image-contact.webp'
import { Link } from 'react-scroll';
import menu from '../../assets/burger-bar.webp'
import cv from '../../assets/CV-Sebastien-Ripert.pdf'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} className='logoLink'>
                <img src={logo} alt="logo" className='logo' />
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
                    <img src={contactImg} alt="" className="desktopMenuImg" /> Contactez-moi
                </button>

                <button
                    type="button"
                    className='mobileMenu'
                    onClick={() => setShowMenu(!showMenu)}
                    aria-expanded={showMenu}
                    aria-label={showMenu ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
                >
                    <img src={menu} alt="" aria-hidden="true" />
                </button>
            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>À propos</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Mes compétences</Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Réalisations</Link>
                <a href={cv} target="_blank" rel="noopener noreferrer" className='listItem' onClick={()=> setShowMenu(false)}>CV</a>
                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar