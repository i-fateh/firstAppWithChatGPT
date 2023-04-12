import Navigation from './navigation'
import Footer from './footer'
import styles from '../styles/About.module.css'
import Image from 'next/image'

function About() {
    return (
    <div>
        <Navigation />
        <div className={styles.container}>
        <div>
          <h1 className={styles.h1}>De l&apos;idée à la solution</h1>
          <p className={styles.paragraphe}>
          Bienvenue chez Fake Project Agency, l&apos;agence de création de site internet et d&apos;application web qui donne vie à vos idées les plus audacieuses! 
          <br/>
          <br/>
          Nous sommes des passionnés du web, déterminés à offrir à nos clients une expérience numérique unique et mémorable. Que vous cherchiez à lancer un site de commerce électronique, une application mobile ou un site vitrine pour votre entreprise, l&apos;agence Fake Project Agency est là pour vous accompagner tout au long de votre projet.
          <br/>
          </p>
        </div>

        <div className={styles.banner}>
          <div className={styles.bannerImages}>
            <Image
              src="/img1.jpeg"
              alt='tech'
              width={500}
              height={500}
            />
            <Image
              src="/img2.jpeg"
              alt='tech'
              width={500}
              height={500}
            />
            <Image
              src="/img3.jpeg"
              alt='tech'
              width={500}
              height={500}
            />
          </div>
        </div>

        <p className={styles.paragraphe}>        
        <br/>
        Nous croyons en une approche centrée sur le client et travaillons en étroite collaboration avec vous pour comprendre vos besoins, vos objectifs et votre vision. 
        Nous utilisons les dernières technologies et tendances du web pour concevoir des sites internet et des applications web innovants et performants, qui répondent aux normes de qualité les plus élevées.
        </p>
        <div className={styles.bannerStack}>
          <div className={styles.bannerStackImages}>

            <Image
              src="/html5.png"
              alt="html5"
              width={100}
              height={100}
            />

            <Image
              src="/css.png"
              alt="CSS3"
              width={100}
              height={100}
            />

            <Image
              src="/js.png"
              alt="javascript"
              width={100}
              height={100}
            />

            <Image
              src="/react.png"
              alt="react js"
              width={100}
              height={100}
            />

            <Image
              src="/next.png"
              alt="next js"
              width={100}
              height={100}
            />
            
            <Image
              src="/node.png"
              alt="node js"
              width={100}
              height={100}
            />
            

            <Image
              src="/express.png"
              alt="express js"
              width={100}
              height={100}
            />            
                        
            <Image
              src="/mongo.png"
              alt="mongo db"
              width={100}
              height={100}
            />
          </div>
        </div>

        <p className={styles.paragraphe}>
        <br/>
        L&apos;agence Fake Project Agency se distingue par son expertise technique, sa créativité et son engagement à fournir des solutions sur mesure adaptées à chaque projet. 
        Nous offrons également des services de référencement et d&apos;hébergement pour vous assurer que votre site ou application fonctionne à la perfection et attire l&apos;attention qu&apos;il mérite.
        </p>

        <div className={styles.banner}>
          <div className={styles.bannerImages}>
            <Image
              src="/img4.jpeg"
              alt='tech'
              width={500}
              height={500}
            />
            <Image
              src="/img5.png"
              alt='tech'
              width={500}
              height={500}
            />
            <Image
              src="/img7.jpeg"
              alt='tech'
              width={500}
              height={500}
            />
          </div>
        </div>


      </div>
      <Footer />
    </div>
    )
}
export default About
  