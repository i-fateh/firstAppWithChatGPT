import Link from 'next/link';
import styles from '../styles/Navigation.module.css';
import Head from 'next/head'
import { useMediaQuery } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faImage, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <div>
      <Head>
        <title>Agence Web Fake Project Agency</title>
        <meta name="keywords" content="création de site web sur mesure, webdesign haut de gamme, développement web personnalisé, création de site web professionnel, stratégie de référencement local, optimisation de la vitesse de chargement du site web, intégration de fonctionnalités avancées sur le site web, conception de site web responsive pour une expérience utilisateur optimale, sécurisation et maintenance du site web, analyse des performances du site web, création de site web multilingue pour toucher une audience internationale, Mantes-la-Jolie, Yvelines" />        
        <meta name="description" content="Nous sommes une agence de création de sites web professionnels. Nous offrons des services de conception et de développement de sites web sur mesure pour les entreprises de toutes tailles. Nous nous efforçons de créer des sites web de qualité supérieure qui répondent aux besoins de nos clients et qui reflètent leur image de marque. Contactez-nous dès maintenant pour discuter de votre projet de site web." />
      </Head>

      <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
              {isSmallScreen ? (
                <a style={{fontWeight:500}}>
                  
                  </a>
              ) : (
                <a style={{fontWeight:500}}>
                Fake Project Agency</a>
              )}
          </Link>
        </li>
        <li>
        <Link href="/" legacyBehavior>
              {isSmallScreen ? (
                <a style={{fontWeight:500}}>
                  <FontAwesomeIcon icon={faHouse} />
                </a>
              ) : (
                <a style={{fontWeight:500}}>
                Accueil</a>
              )}
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
          {isSmallScreen ? (
                <a style={{fontWeight:500}}>
                  <FontAwesomeIcon icon={faUserAstronaut} />
                  </a>
              ) : (
                <a style={{fontWeight:500}}>
                A propos</a>
              )}
          </Link>
        </li>
        <li>
          <Link href="/gallery" legacyBehavior>
          {isSmallScreen ? (
                <a style={{fontWeight:500}}>
                  <FontAwesomeIcon icon={faImage} />
                  </a>
              ) : (
                <a style={{fontWeight:500}}>
                Portfolio</a>
              )}
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
          {isSmallScreen ? (
                <a style={{fontWeight:500}}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
              ) : (
                <a style={{fontWeight:500}}>
                Contact</a>
              )}
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}
export default Navigation;
