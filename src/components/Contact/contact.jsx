import React, { useState } from 'react'
import './contact.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import GitHub from '../../assets/github-mark.png'
import LinkedinIcon from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser'

function Contact() {
    // null | 'success' | 'error' — résultat du dernier envoi, affiché sous le bouton
    const [sendStatus, setSendStatus] = useState(null);

    return (
        <section id="contact" className='reveal'>
            <h1 className='contactPageTitle'>Contactez-moi</h1>
            <span className='contactDesc'>Veuillez remplir le formulaire suivant afin de discuter d'éventuelles opportunités de travail.</span>
            <Formik
                initialValues={{ your_name: '', your_email: '', message: ''}}
                validationSchema={Yup.object({
                    your_name: Yup.string()
                        .max(15, 'Doit contenir 15 caractères ou moins')
                        .required('Champ obligatoire'),
                    your_email: Yup.string()
                        .email('Adresse e-mail invalide')
                        .required('Champ obligatoire'),
                    message: Yup.string()
                        .required('Champ obligatoire'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSendStatus(null);
                    emailjs.send('service_y12kxfj', 'template_kgjy3qp', values, 'OpT0x_9fN-brkvPzK')
                        .then(() => {
                            resetForm();
                            setSendStatus('success');
                        })
                        .catch(() => {
                            setSendStatus('error');
                        })
                        .finally(() => {
                            setSubmitting(false);
                        });
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='contactForm'>
                        <label htmlFor="your_name">Votre Nom</label>
                        <Field id="your_name" type="text" className="name" placeholder="Votre Nom" name="your_name"/>
                        <ErrorMessage name="your_name" component="span" className="fieldError" />

                        <label htmlFor="your_email">Votre Email</label>
                        <Field id="your_email" type="email" className="email" placeholder="Votre Email" name="your_email"/>
                        <ErrorMessage name="your_email" component="span" className="fieldError" />

                        <label htmlFor="message">Votre Message</label>
                        <Field id="message" as="textarea" className="msg" rows="5" placeholder="Votre Message" name="message" aria-label="Votre Message"/>
                        <ErrorMessage name="message" component="span" className="fieldError" />

                        <button type="submit" className='submitBtn' disabled={isSubmitting}>
                            {isSubmitting ? 'Envoi en cours…' : 'Envoyer'}
                        </button>

                        {/* aria-live : le lecteur d'écran annonce le résultat sans déplacer le focus */}
                        <p className={`sendStatus ${sendStatus || ''}`} role="status" aria-live="polite">
                            {sendStatus === 'success' && '✓ Merci ! Votre message a bien été envoyé, je vous répondrai rapidement.'}
                            {sendStatus === 'error' && "✗ L'envoi a échoué. Veuillez réessayer dans un instant."}
                        </p>
                    </Form>
                )}
            </Formik>

            <div className='links'>
                <a href="https://github.com/sebrip" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" className='link' />
                </a>
                <a href="https://www.linkedin.com/in/sebastien-ripert" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinIcon} alt="LinkedIn" className='link' />
                </a>
            </div>
        </section>
    );
};

export default Contact
