import React, { useState, useRef, useEffect, useId } from 'react'
import './collapse.scss'
import { FiChevronDown } from 'react-icons/fi'

function Collapse({ title, text }) {
  // État pour contrôler l'ouverture/fermeture du Collapse
  const [open, setOpen] = useState(false)

  // Hauteur du contenu déroulé
  const [height, setHeight] = useState(0)

  const contentRef = useRef(null)
  const contentId = useId()

  // Fonction pour basculer l'ouverture/fermeture du Collapse
  const toggleCollapse = () => {
    setOpen((current) => !current)
  }

  // Mettre à jour la hauteur en fonction de l'état "open"
  useEffect(() => {
    setHeight(open ? contentRef.current.scrollHeight : 0)
  }, [open])

  return (
    <div className={`container ${open ? 'open' : ''}`}>
      <h3 className="collapse-heading">
        <button
          type="button"
          className="collapse-header"
          onClick={toggleCollapse}
          aria-expanded={open}
          aria-controls={contentId}
        >
          {title}
          <FiChevronDown aria-hidden="true" className="arrow-icon" />
        </button>
      </h3>
      <div
        id={contentId}
        className="collapse-text-container"
        style={{ height: `${height}px` }}
        ref={contentRef}
      >
        {/* Afficher le texte du Collapse */}
        {typeof text === 'string' ? (
          <p className="collapse-text">{text}</p>
        ) : (
          <div className="collapse-text">{text}</div>
        )}
      </div>
    </div>
  )
}

export default Collapse
