import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import heroDark from "@/assets/images/heroDark.png"; // Ensure this is the correct path
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src={heroDark} // Use the imported image
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className={styles.backgroundImage}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.welcomeText}>WELCOME TO</h1>
        <h2 className={styles.companyName}>SHIVA CATERERS</h2>
        <p className={styles.tagline}>Taste is the sign of life</p>
        <Link href="/menu" legacyBehavior>
          <a className={styles.heroButton}>Browse Menu</a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;


