import AboutMe from "../Page/About.jsx";
import Home from "../Page/Home.jsx";
import Projects from "../Page/Projects.jsx";
import Skills from "../Page/Skills.jsx";
import styles from "./Pagecontainer.module.css"

function Pagecontainer(){
    return(<>
        <div className={styles.container}> 
            <Home/>
            <AboutMe/>
            <Skills/>
            <Projects></Projects>
        </div>
        </>
    );
        
}

export default Pagecontainer;
