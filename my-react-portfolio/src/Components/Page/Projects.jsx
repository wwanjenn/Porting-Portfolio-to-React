import React from "react";
import style from "./Project.module.css";
import ProjectCard from "./ProjectCard/ProjectCard.jsx";

const Projects = () =>{
    return(
            <>
            <section class="work section" id="work">
                <h2 class="section-title">Work</h2>
            
                <div class="work__container bd-grid">
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <div class="button__container">
                        <a href="https://github.com/Lemonade-up" class="buttonz">View More <i class='bx bx-right-arrow-alt' ></i></a>
                    </div>
                </div>
            </section>
            </>    
    )
};

export default Projects