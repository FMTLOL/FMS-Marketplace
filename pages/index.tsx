import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
             
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                <br />
                <br />
                FMS Marketplace
                </span>
                <br />
                
              </h1>
              <p className={styles.heroSubtitle}>
                
              Trade your NFTs, buy and sell, with 0 fees</p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h4>fms ©2024</h4>
    </div>
  );
};

export default Home;
