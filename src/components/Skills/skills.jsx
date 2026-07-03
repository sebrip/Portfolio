import React from 'react';
import './skills.scss'
import Collapse from '../Collapse/collapse'
import HTML from '../../assets/icons8-html-5-48.png'
import CSS from '../../assets/logo-css.png'
import JsScript from '../../assets/icons8-javascript-48.png'
import ReactLogo from '../../assets/icons8-react-a-javascript-library-for-building-user-interfaces-48.png'
import NodeLogo from '../../assets/icons8-node-js-48.png'
import MongoLogo from '../../assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-48.png'
import { SiPython, SiClaude, SiOpenai } from 'react-icons/si'

const Skills = () => {
    return (
        <section id='skills' className='reveal'>
            <h2 className='skillTitle'>Mes compétences</h2>
            <span className='skillDesc'>Développeur web passionné, j'ai suivi une formation intensive où j'ai acquis des compétences en HTML, CSS, JavaScript, React.js et Node.js, ainsi qu'en gestion de projet Agile et en bases de données NoSQL avec MongoDB.
            Toujours curieux et motivé par l'apprentissage, je cherche de nouvelles opportunités pour appliquer et faire progresser mes compétences. Bonne visite !</span>

            <div className='skills-dropdown'>
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={HTML} alt="HTML" className='skills-dropdown-img' />
                        HTML
                        </div>
                    }
                        text="J'utilise HTML pour créer la structure d'un site web. Je définis la mise en page, les titres, les paragraphes et les liens en utilisant des balises HTML. Cela permet aux navigateurs web de comprendre la structure d'une page et d'afficher le contenu de manière cohérente pour les visiteurs."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={CSS} alt="CSS" className='skills-dropdown-img' />
                        CSS
                        </div>
                    }
                        text="J'utilise le CSS pour styliser un site web, ce qui englobe la définition des couleurs, des polices, des marges, des bordures, et d'autres éléments de mise en page. Le CSS permet de personnaliser l'apparence de votre application, la rendant ainsi attrayante, professionnelle et cohérente, ce qui contribue à créer une expérience utilisateur positive et à mettre en valeur vos réalisations."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={JsScript} alt="Javascript" className='skills-dropdown-img' />
                        Javascript
                        </div>
                    }
                        text="J'utilise JavaScript pour transformer des sites web en expériences interactives et engageantes à travers des fonctionnalités avancées telles que des animations fluides, des formulaires de contact dynamiques et des effets visuels qui améliorent l'expérience utilisateur. Ces compétences démontrent mon engagement à fournir des solutions interactives pour les visiteurs."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={ReactLogo} alt="React" className='skills-dropdown-img' />
                        React
                        </div>
                    }
                        text="J'utilise React, une bibliothèque JavaScript, pour créer des interfaces web interactives et conviviales. Ma maîtrise de React se traduit par la création de composants réutilisables et l'amélioration de la réactivité des applications. Mon objectif est de contribuer à des projets innovants et d'apprendre continuellement pour progresser en tant que développeur."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={NodeLogo} alt="Node.js" className='skills-dropdown-img' />
                        Node.js
                        </div>
                    }
                        text="J'utilise Node.js et Express.js pour construire des applications web robustes et performantes côté serveur.  Je prends plaisir avec Node.js de créer des serveurs web évolutifs et  gérer efficacement les opérations asynchrones. En combinant Node.js avec Express.js, je développe des API RESTful et des applications web interactives, contribuant ainsi à des solutions technologiques avancées. Mon engagement à maîtriser ces technologies montre ma volonté de grandir en tant que développeur back-end et de créer des applications web de haute qualité"
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'> 
                        <img src={MongoLogo} alt="MongoDB" className='skills-dropdown-img' />
                        MongoDB
                        </div>
                    }
                        text="J'intègre MongoDB dans mes projets pour gérer efficacement les bases de données NoSQL. Cela me permet de stocker et de récupérer des données de manière flexible et évolutive, et de créer des applications web robustes avec une gestion efficace des données."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'>
                        <SiPython className='skills-dropdown-img' size={40} color="#FFD43B" />
                        Python
                        </div>
                    }
                        text="Je me perfectionne en Python, le langage de référence de l'intelligence artificielle. Je l'utilise pour concevoir des agents IA, orchestrer des appels aux modèles de langage et automatiser des traitements de données, tout en construisant des back-ends légers et efficaces."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'>
                        <SiClaude className='skills-dropdown-img' size={40} color="#D97757" />
                        Claude (Anthropic)
                        </div>
                    }
                        text="J'utilise Claude, l'IA d'Anthropic, au quotidien comme assistant de développement et pour concevoir des agents intelligents. Je m'appuie sur ses capacités de raisonnement, d'analyse et de génération de code pour accélérer mes projets et automatiser des tâches complexes."
                />
                <Collapse
                    title={
                        <div className='skills-dropdown-header'>
                        <SiOpenai className='skills-dropdown-img' size={40} color="#ffffff" />
                        OpenAI Realtime
                        </div>
                    }
                        text="J'intègre l'API Realtime d'OpenAI dans un projet de conversation en anglais actuellement en développement. Elle permet des échanges vocaux en temps réel, fluides et naturels, pour offrir une expérience d'apprentissage linguistique interactive."
                />
            </div>
        </section>
    );
}

export default Skills;