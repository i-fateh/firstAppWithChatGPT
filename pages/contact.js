import Navigation from './navigation'
import Footer from './footer'
import styles from '../styles/Contact.module.css'

function Contact() {
    return (
    <div>
        <Navigation />
        <div className={styles.container}>

        <div className={styles.card__avatar}>
          <img src="./sekigan.png" alt="Ma super image" />
          <div className={styles.border}></div>
          <div className={styles.border2}></div>
        </div>

        <h1 className={styles.h1}>Nous contacter</h1>
        <p className={styles.paragraphe}>
          En choisissant Fake Project Agency, vous optez pour une agence de création de site internet et d'application web de confiance, qui vous aidera à atteindre vos objectifs en ligne et à vous démarquer de la concurrence. 
          <br/>
          <br/>
          Nous sommes impatients de travailler avec vous et de vous aider à réaliser votre vision numérique!
         </p>

      </div>
      <Footer />
    </div>
    )
}
export default Contact
  