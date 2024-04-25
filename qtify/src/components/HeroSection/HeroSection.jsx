/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import styles from './HeroSection.module.css'
import heroImage from "../../assets/heroImage.png"


const HeroSection =()=> {
  return (
    <section className={styles.heroSection}>
        <div className={styles.container}>
            <div className={styles.heroText}>
            100 Thousand Songs, ad-free 
            <br/>and Over thousands podcast episodes
            </div>
            <div className={styles.heroImage}>
            <img src={ heroImage } alt="hero-image" height="200" width="200" loading='eager' />
            </div>
        </div>
    </section>
  )
}
export default HeroSection
