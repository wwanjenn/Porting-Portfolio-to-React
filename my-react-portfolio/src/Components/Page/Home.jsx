import React from "react"
import styles from './Home.module.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Home = () => {
  return (
    <>
    <section className={styles.home} id="home">
      <div className={styles.homeData}>
        <h1 className={styles.homeTitle}>
          Hi,<br />I&apos;m <span className={styles.homeTitleColor}>Wanjin</span>,<br /> a Software<br />Developer
        </h1>
        <div className={styles.homeSocial}>
          <a href="#" className={styles.homeSocialIcon}>
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="#" className={styles.homeSocialIcon}>
            <i className='bx bxl-gmail'></i>
          </a>
          <a href="#" className={styles.homeSocialIcon}>
            <i className='bx bxl-github'></i>
          </a>
        </div>
        <button className ={styles.button} style={{ marginRight: '1rem' }}>Contact Me</button>
        <button className ={styles.button}>Get Resume</button>
      </div>

      <div className={styles.homeImg}>
        <DotLottieReact
          src="https://lottie.host/07680be9-e926-4830-aafe-9f488da66ec5/KGguAui1Z2.json" 
          speed="1.2" 
          loop 
          autoplay>
        </DotLottieReact>
      </div>
    </section>
  </>
);
}

export default Home;
