import AboutMe from "../Page/About.jsx";
import Home from "../Page/Home.jsx";
import Skills from "../Page/Skills.jsx";
import styles from "./Pagecontainer.module.css"

function Pagecontainer(){
    return(<>
    <main class="l-main"></main>
        <div className={styles.container}> 
            <Home/>
            <AboutMe/>
            <Skills/>
        </div>
        </>
    );
        
}

export default Pagecontainer;
