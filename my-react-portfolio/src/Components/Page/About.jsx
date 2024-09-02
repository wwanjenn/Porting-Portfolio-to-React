
import React from "react"
import styles from'./About.module.css'
import profilepic from '../../assets/profilepic.jpg'

const AboutMe = () => {
    return (<>
        <section className={styles.aboutSection} id="about">
        <h2 className={styles.aboutTitle}>Who am I?</h2>

        <div className={styles.aboutContainerGrid}>
            <div className={styles.aboutImg}>
                <img src={profilepic} alt=""></img>
            </div>
            
            <div>
                <h2 className={styles.aboutSubtitle}>I'am Wanjin</h2>
                <p className={styles.aboutText}>A 4th Year Computer Engineering Student in the Polytechnic University of the Philippines. I am always on the move to improve my Developer and Programming Skills. Nowadays, my main weakness is creativity and design, which is why I took the chance on the Creative Web Design course. I love to learn and explore new technologies and am passionate about problem-solving. I love learning new programming languages and tech stacks.  My core skill is based on Python, Java or C and I love to do most of the things using C. I am available for any kind of opportunity to develop my skills, not only in programming, but all aspects of being a professional in the Tech Industry.</p>           
            </div>                                   
        </div>
    </section>
    </>
    )
  };
  
  export default AboutMe;
  

