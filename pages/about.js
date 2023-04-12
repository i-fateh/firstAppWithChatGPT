import Navigation from './navigation'
import Footer from './footer'
import styles from '../styles/About.module.css'

function About() {
    return (
    <div>
        <Navigation />
        <div className={styles.container}>
        <div>
          <h1 className={styles.h1}>De l'idée à la solution</h1>
          <p className={styles.paragraphe}>
          Bienvenue chez Fake Project Agency, l'agence de création de site internet et d'application web qui donne vie à vos idées les plus audacieuses! 
          <br/>
          <br/>
          Nous sommes des passionnés du web, déterminés à offrir à nos clients une expérience numérique unique et mémorable. Que vous cherchiez à lancer un site de commerce électronique, une application mobile ou un site vitrine pour votre entreprise, l'agence Fake Project Agency est là pour vous accompagner tout au long de votre projet.
          <br/>
          </p>
        </div>

        <div className={styles.banner}>
          <div className={styles.bannerImages}>
            <img src="./img1.jpeg" alt="" />
            <img src="./img2.jpeg" alt="" />
            <img src="./img3.jpeg" alt="" />
          </div>
        </div>

        <p className={styles.paragraphe}>        
        <br/>
        Nous croyons en une approche centrée sur le client et travaillons en étroite collaboration avec vous pour comprendre vos besoins, vos objectifs et votre vision. 
        Nous utilisons les dernières technologies et tendances du web pour concevoir des sites internet et des applications web innovants et performants, qui répondent aux normes de qualité les plus élevées.
        </p>
        <div className={styles.bannerStack}>
          <div className={styles.bannerStackImages}>
            <img src="./html5.png" alt="" />
            <img src="./css.png" alt="" />
            <img src="./js.png" alt="" />
            <img src="./react.png" alt="" />
            <img src="./next.png" alt="" />
            <img src="./node.png" alt="" />
            <img src="./express.png" alt="" />
            <img src="./mongo.png" alt="" />
          </div>
        </div>

        <p className={styles.paragraphe}>
        <br/>
        L'agence Fake Project Agency se distingue par son expertise technique, sa créativité et son engagement à fournir des solutions sur mesure adaptées à chaque projet. 
        Nous offrons également des services de référencement et d'hébergement pour vous assurer que votre site ou application fonctionne à la perfection et attire l'attention qu'il mérite.
        </p>

        <div className={styles.banner}>
          <div className={styles.bannerImages}>
            <img src="./img3.jpeg" alt="" />
            <img src="./img4.jpeg" alt="" />
            <img src="./img1.jpeg" alt="" />
          </div>
        </div>


      </div>
      <Footer />
    </div>
    )
}
export default About
  