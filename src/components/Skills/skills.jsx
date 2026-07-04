import React from 'react';
import './skills.scss'
import Collapse from '../Collapse/collapse'
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython, SiClaude, SiOpenai } from 'react-icons/si'

const Skills = () => {
    return (
        <section id='skills' className='reveal'>
            <p className='sectionKicker'>01 — Compétences</p>
            <h2 className='skillTitle'>Mes compétences</h2>
            <span className='skillDesc'>Développeur web full-stack (React, Node.js), je conçois aussi des applications propulsées par l'IA — conversation vocale en temps réel, agents intelligents. Chaque compétence ci-dessous est illustrée par mes réalisations, à découvrir plus bas.</span>

            <div className='skills-dropdown'>
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <SiHtml5 className='skills-dropdown-img' size={40} color="#E34F26" aria-hidden="true" />
                        HTML
                        </div>
                    }
                        text="La base de tous mes projets : un HTML sémantique et accessible — hiérarchie de titres, vraies balises interactives, attributs ARIA. Ce portfolio en est l'exemple : navigable au clavier et compatible avec les lecteurs d'écran."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <SiCss className='skills-dropdown-img' size={40} color="#639" aria-hidden="true" />
                        CSS
                        </div>
                    }
                        text="CSS et SASS pour des interfaces soignées et responsive, pensées mobile-first : le thème sombre et les animations au scroll de ce portfolio, les maquettes intégrées au pixel près de Booki et Kasa, l'interface de VillageBook."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <SiJavascript className='skills-dropdown-img' size={40} color="#F7DF1E" aria-hidden="true" />
                        Javascript
                        </div>
                    }
                        text="Mon langage du quotidien, côté navigateur comme côté serveur. Concrètement : la messagerie temps réel de VillageBook (badges, sons Web Audio), et le streaming vocal d'English SpeakApp (capture micro via AudioWorklet, WebSocket)."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <SiReact className='skills-dropdown-img' size={40} color="#61DAFB" aria-hidden="true" />
                        React
                        </div>
                    }
                        text="Ma bibliothèque front de référence : ce portfolio, Kasa et VillageBook sont construits en React — composants réutilisables, hooks, routing, formulaires validés avec Formik/Yup."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <SiNodedotjs className='skills-dropdown-img' size={40} color="#5FA04E" aria-hidden="true" />
                        Node.js
                        </div>
                    }
                        text="Node.js et Express pour des API REST complètes et sécurisées : celle de VillageBook (authentification JWT, helmet, rate-limiting, upload d'images avec miniatures via sharp) et le back-end de Mon Vieux Grimoire."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <SiMongodb className='skills-dropdown-img' size={40} color="#47A248" aria-hidden="true" />
                        MongoDB
                        </div>
                    }
                        text="Base NoSQL du back-end de Mon Vieux Grimoire (Mongoose : modèles, notation moyenne calculée côté serveur). J'utilise aussi le SQL avec Prisma sur VillageBook — je choisis la base adaptée à chaque projet."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'>
                        <SiPython className='skills-dropdown-img' size={40} color="#FFD43B" />
                        Python
                        </div>
                    }
                        text="Mon langage pour l'IA : le back-end d'English SpeakApp est écrit en Python (Starlette/ASGI, WebSocket vers l'API OpenAI Realtime), et c'est aussi la base de JobHunter-AI, mon agent de recherche d'emploi en cours de finalisation."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'>
                        <SiClaude className='skills-dropdown-img' size={40} color="#D97757" />
                        Claude (Anthropic)
                        </div>
                    }
                        text="Claude (Anthropic) est mon partenaire de développement au quotidien via Claude Code, et le moteur de mes agents IA : je conçois des rôles persistants avec mémoire et outils pour automatiser des tâches réelles, comme ma veille d'offres d'emploi."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'>
                        <SiOpenai className='skills-dropdown-img' size={40} color="#ffffff" />
                        OpenAI Realtime
                        </div>
                    }
                        text="Au cœur d'English SpeakApp (à voir dans mes réalisations) : conversations vocales fluides en temps réel avec des profs IA — WebSocket, tokens éphémères, audio bidirectionnel. Une preuve concrète de mon travail sur les applications vocales."
                />
            </div>
        </section>
    );
}

export default Skills;