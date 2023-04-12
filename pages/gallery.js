import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/Gallery.module.css'
import Navigation from './navigation'
import Footer from './footer'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: '0',
    borderRadius: '8px',
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflow: 'hidden',
    transition: 'opacity 0.3s ease-in-out',
  },
};

Modal.setAppElement('#__next');
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
    <Navigation />
    <div className={styles.container}>
      <h1 className={styles.h1}>Portfolio</h1>
      <p className={styles.paragraphe}>
      Nous utilisons les dernières technologies pour la conception de nos solutions numériques, notamment HTML, CSS, JavaScript, React, React Native, Node.js et MongoDB
      </p>
      <div className="gallery">
        <div className="gallery-row">
          <div className="gallery-img-container" onClick={() => handleImageClick('https://source.unsplash.com/480x480/?web,code-programming')}>
            <img src="https://source.unsplash.com/480x480/?web,code-programming" className={styles.aspectImage} alt="Tech image" />

          </div>
          <div className="gallery-img-container" onClick={() => handleImageClick('https://source.unsplash.com/480x480/?web,tech')} >
            <img src="https://source.unsplash.com/480x480/?web,tech" className={styles.aspectImage} alt="Tech image" />
          </div>
          <div className="gallery-img-container" onClick={() => handleImageClick('https://source.unsplash.com/480x480/?web,data-analytics')}>
            <img src="https://source.unsplash.com/480x480/?web,data-analytics" className={styles.aspectImage} alt="Tech image" />
          </div>
        </div>

        <div className="gallery-row">
          <div className="gallery-img-container" onClick={() => handleImageClick('https://source.unsplash.com/480x480/?web,cybersecurity')}>
            <img src="https://source.unsplash.com/480x480/?web,cybersecurity" className={styles.aspectImage} alt="Tech image" />
          </div>
          <div className="gallery-img-container" onClick={() => handleImageClick('https://source.unsplash.com/480x480/?web,virtual-reality-augmented-reality')}>
          <img src="https://source.unsplash.com/480x480/?web,virtual-reality-augmented-reality" className={styles.aspectImage} alt="Tech image" />
          </div>
          <div className="gallery-img-container" onClick={() => handleImageClick('https://source.unsplash.com/480x480/?web,social-media-communication')}>
          <img src="https://source.unsplash.com/480x480/?web,social-media-communication" className={styles.aspectImage} alt="Tech image" />
          </div>
        </div>

        <div className="gallery-row">
          <div className="gallery-img-container" onClick={() => handleImageClick('https://source.unsplash.com/480x480/?web,artificial-intelligence-ai')}>
          <img src="https://source.unsplash.com/480x480/?web,artificial-intelligence-ai" className={styles.aspectImage} alt="Tech image" />
          </div>
          <div className="gallery-img-container" onClick={() => handleImageClick('https://source.unsplash.com/480x480/?web,computer-infrastructure')}>
          <img src="https://source.unsplash.com/480x480/?web,computer-infrastructure" className={styles.aspectImage} alt="Tech image" />
          </div>
          <div className="gallery-img-container" onClick={() => handleImageClick('https://source.unsplash.com/480x480/?web,electronics-gadgets')}>
          <img src="https://source.unsplash.com/480x480/?web,electronics-gadgets" className={styles.aspectImage} alt="Tech image" />
          </div>
        </div>
        
      </div>
      
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={handleCloseLightbox}
        style={customStyles}
        closeTimeoutMS={300}
      >
        {selectedImage && (
          <img src={selectedImage} width={800} height={800} alt="Lightbox Image" />
        )}
      </Modal>

    </div>

    <Footer />
    <style jsx>{`
        .gallery {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px 0px;
        }
        .gallery-row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        img {
          width:330px;
          border-radius:10px
        }
        .gallery-img-container {
          cursor: pointer;
          margin:10px;
        }
        .modal-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%; 
        }
        .modal-image-container img {
          width: 100%;
          height: 100%;
        }

        @media screen and (max-width: 768px) {
          img {
            width:100%;
            border-radius:5px
          }
        }
      `}
    </style>
  </div>
  );
}
