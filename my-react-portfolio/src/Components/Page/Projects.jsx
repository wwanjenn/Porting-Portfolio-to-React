import React from "react";
import style from "./Project.module.css";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";
import work1 from "../../assets/img/work1.jpg";
import work2 from "../../assets/img/work2.jpg";
import work3 from "../../assets/img/work3.jpg";
import work4 from "../../assets/img/work4.jpg";
import work5 from "../../assets/img/work5.jfif";
import work6 from "../../assets/img/work6.jpg";

const Projects = () =>{
    return(
            <>
            <section className={style.workSection} id="work">
                <h2 className={style.workTitle}>Projects</h2>
            
                <div className={style.workContainerGrid}>
                    <ProjectCard title="Server Room Temperature Sensor, Arduino(C)" img = {work1} link= "#"></ProjectCard>
                    <ProjectCard title="SAKLO, Local Herbal Remedies App, Java" img = {work2} link= "https://github.com/wwanjenn/SAKLO"></ProjectCard>
                    <ProjectCard title="Responsive Portfolio, HTML, CSS, Javascript" img = {work3} link= "https://wwanjenn.github.io/"></ProjectCard>
                    <ProjectCard title="Automatic Face Detector, OpenCV(Python)" img = {work4} link= "https://github.com/wwanjenn/Face-Detector-and-Capture"></ProjectCard>
                    <ProjectCard title="Contact Tracing Application, Java" img = {work5} link= "https://github.com/wwanjenn/Dictionary-Contact-Tracing"></ProjectCard>
                    <ProjectCard title="Recipe App, Kotlin(Java)" img = {work6} link= "https://github.com/YlizaNicole?tab=repositories"></ProjectCard>

                </div>
                <div className={style.buttonContainer}>
                    <button href = 'https://github.com/Lemonade-up' className={style.button}>View More -></button>
                    <button href = 'https://github.com/Lemonade-up' className={style.button}>Resume -></button>
                </div>
            </section>
            </>    
    )
};

export default Projects;