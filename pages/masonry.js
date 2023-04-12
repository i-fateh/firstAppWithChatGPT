import React from 'react';
import styles from '../styles/About.module.css'
import Image from 'next/image'

const MasonryComponent = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div class={styles.masonryGrid}>
      <div class={styles.masonryItem}>
        <img src="https://source.unsplash.com/640x480/?coding,developer" alt="Coding developer" />
        <div class={styles.caption}>Developpement</div>
      </div>

      <div class={styles.masonryItem}>
        <img src="https://source.unsplash.com/640x480/?web,design" alt="Web design" />
        <div class={styles.caption}>UX/UI Design</div>
      </div>
  
      <div class={styles.masonryItem}>
        <img src="https://source.unsplash.com/640x480/?software,developer" alt="Software testing" />
        <div class={styles.caption}>Test Logiciel</div>
      </div>
  
      <div class={styles.masonryItem}>
        <img src="https://source.unsplash.com/640x480/?analytics,developer" alt="Analytics graph" />
        <div class={styles.caption}>Analyse de données</div>
      </div>

      <div class={styles.masonryItem}>
        <img src="https://source.unsplash.com/640x480/?analytics,graph" alt="Analytics graph" />
        <div class={styles.caption}>Création de dashboard</div>
      </div>

      <div class={styles.masonryItem}>
        <img src="https://source.unsplash.com/640x480/?design,developer" alt="Analytics graph" />
        <div class={styles.caption}>SEO/Ads</div>
      </div>
    </div>
  );
};
export default MasonryComponent;
