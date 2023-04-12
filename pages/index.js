import styles from '../styles/Home.module.css'
import Navigation from './navigation'
import Footer from './footer'
import { useEffect, useState } from 'react';
import MasonryComponent from './masonry';
import Image from 'next/image'

const ImageSlider = ({ imageSources, delays }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSource = imageSources[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % imageSources.length;
      setCurrentIndex(nextIndex);
    }, delays[currentIndex]);

    return () => clearInterval(interval);
  }, [currentIndex, delays, imageSources]);

  return (
    <Image
      className={styles.imgBanner} 
      src={currentSource}
      alt='tech'
      width={500}
      height={500}
    />
  );
};

const images1 = ['/img1.jpeg', '/img2.jpeg', '/img3.jpeg', '/img4.jpeg', '/img5.png', '/img7.jpeg', '/img8.png', '/img9.jpeg'];
const delays1 = [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000];

const images2 = ['/img2.jpeg', '/img3.jpeg', '/img4.jpeg', '/img5.png', '/img7.jpeg', '/img8.png', '/img9.jpeg', '/img1.jpeg'];
const delays2 = [9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000];

const images3 = ['/img3.jpeg', '/img4.jpeg', '/img5.png', '/img7.jpeg', '/img8.png', '/img9.jpeg', '/img1.jpeg', '/img2.jpeg'];
const delays3 = [7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000];

const images4 = ['/img4.jpeg', '/img5.png', '/img7.jpeg', '/img8.png', '/img9.jpeg', '/img9.jpeg', '/img2.jpeg', '/img3.jpeg'];
const delays4 = [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000];

const images5 = ['/img5.png', '/img7.jpeg', '/img8.png', '/img9.jpeg', '/img1.jpeg', '/img9.jpeg', '/img3.jpeg', '/img4.jpeg'];
const delays5 = [15000, 15000, 15000, 15000, 15000, 15000, 15000, 15000];

const images6 = ['/img7.jpeg', '/img8.png', '/img9.jpeg', '/img1.jpeg', '/img2.jpeg', '/img9.jpeg', '/img4.jpeg', '/img5.png'];
const delays6 = [8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000];

const images7 = ['/img8.png', '/img9.jpeg', '/img1.jpeg', '/img2.jpeg', '/img3.jpeg', '/img9.jpeg', '/img5.png', '/img7.jpeg'];
const delays7 = [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000];

const images8 = ['/img9.jpeg', '/img1.jpeg', '/img2.jpeg', '/img3.jpeg', '/img4.jpeg', '/img9.jpeg', '/img7.jpeg', '/img8.png'];
const delays8 = [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000];

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.imgBanner} 
            src="/sekigan.png"
            alt='tech'
            width={500}
            height={500}
          />
          <div className={styles.halo}></div>
        </div>
        <h1 className={styles.bigH1}>First app created
        <br />
        with ❤️ and intelligence
        <br/>
        by Me and ChatGPT</h1>
        
        <p className={styles.paragraphe}>
        &quot;J&apos;ai créé ce projet afin de découvrir ChatGPT et d&apos;apprendre à l&apos;utiliser.
        L&apos;objectif était de concevoir une application en NextJS sans coder, juste à l&apos;aide des prompts.
        <br/>
        Après quelques essais j&apos;ai rapidement compris que mieux on sait lui demander, mieux il saura nous répondre.
        <br/>
        <br/>
        J&apos;ai tout de même plusieurs fois été contraint de corriger (au minimum) le code pour que ça fonctionne.
        Et ce malgré les maintes reformulation de mes demandes restées sans résultat probant.
        <br/>
        <br/>
        Tout n&apos;est pas parfait, mais il faut reconnaitre qu&apos;il est puissant 🔥 🚀&quot;
        <br/>
        <br/>
        Fateh
        </p> 

        <br/>
        <br/>
        <div className={styles.banner}>
          <div className={styles.bannerImages}>
          <ImageSlider imageSources={images1} delays={delays1} />
          <ImageSlider imageSources={images2} delays={delays2} />
          <ImageSlider imageSources={images3} delays={delays3} />
          <ImageSlider imageSources={images4} delays={delays4} />
          <ImageSlider imageSources={images5} delays={delays5} />
          <ImageSlider imageSources={images6} delays={delays6} />
          <ImageSlider imageSources={images7} delays={delays7} />
          <ImageSlider imageSources={images8} delays={delays8} />
          </div>
        </div>

    
        <h1 className={styles.h1}>Audit SEO</h1>
        <p className={styles.paragraphe}>
        Nous effectuons une analyse approfondie de votre site web pour identifier les opportunités d&apos;optimisation pour les moteurs de recherche. Nous examinons la structure de votre site, le contenu, les mots-clés, les liens entrants, les erreurs techniques, et plus encore.
        <br/>
        <br />
        Nous mènons une recherche approfondie pour trouver les meilleurs mots-clés pour votre entreprise. Nous identifions les termes de recherche que vos clients utilisent pour trouver des produits ou services similaires aux vôtres, et les intégrons dans votre site web.
        <br/>
        Nous optimisons chaque page de votre site web pour les moteurs de recherche. Nous optimisons les titres de page, les descriptions, les en-têtes, les balises d&apos;images, les méta-données et les URL pour maximiser la visibilité de votre site web dans les résultats de recherche.
        Nous ajustons en permanence la stratégie de référencement pour garantir des résultats optimaux.
        </p>  

        <h1 className={styles.h1}>Domaines d&apos;expertise</h1>
        <MasonryComponent />

        <h1 className={styles.h1}>Stratégie de contenu</h1>
        <p className={styles.paragraphe}>
        Nous créons une stratégie de contenu efficace pour votre site web qui répond aux attentes des utilisateurs et des moteurs de recherche. Nous rédigons du contenu de haute qualité pour votre site, en utilisant les mots-clés identifiés, et en veillant à ce que le contenu soit pertinent et utile pour votre public cible.
        </p>          
      </div>

      <Footer />
    </div>
  )
}