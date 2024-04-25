import logoImage from "../../assets/logo.png";
import React from "react";
import styles from './Logo.module.css'
export default function Logo() {
  return (
    <div>
      <img className={styles.logo} src={logoImage} alt="logo" width="70" height="35"/>
    </div>
  );
}


