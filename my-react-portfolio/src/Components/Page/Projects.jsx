import React from "react";
import style from "./Project.module.css";
//import ProjectCard from "./ProjectCard/ProjectCard.jsx";

const Projects = () =>{
    return(
            <>
            <section className={style.workSection} id="work">
                <h2 className={style.workTitle}>Projects</h2>
            
                <div className={style.workContainerGrid}>
                    <div className={style.buttonContainer}>
                        <a href="https://github.com/Lemonade-up" className={style.button}>
                        View More <i className={`${style.bx} ${style['bx-right-arrow-alt']}`}></i></a>
                    </div>
                </div>
            </section>
            </>    
    )
};

export default Projects;