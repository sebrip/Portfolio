import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            Copyright &#169; {new Date().getFullYear()} Sébastien Ripert. Tous droits réservés.
        </footer>
    )
}

export default Footer