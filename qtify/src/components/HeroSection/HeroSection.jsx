/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import styles from './HeroSection.module.css'
import heroImage from "../../assets/heroImage.png"


const HeroSection =()=> {
  return (
    <section className={styles.heroSection}>
        <div className={styles.container}>
            <div className={styles.heroText}>
            <h1>100 Thousand Songs, ad-free</h1> 
            <h1>and Over thousands podcast episodes</h1>
            </div>
            <div className={styles.heroImage}>
            <img src={ heroImage } alt="hero-image" height="200" width="200" loading='eager' />
            </div>
        </div>
    </section>
  )
}
export default HeroSection
