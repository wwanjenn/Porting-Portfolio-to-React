import React from "react"
import SkillsCard from "./SkillsCard/SkillsCard.jsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import style from './Skills.module.css'


const Skills = () => {
  return (
    <div>
      <section className={style.skillSection} id="skills">
                <h2 className={style.skillTitle}>Skills</h2>
                <div className={style.skillContainerGrid}>          
                    <div>
                      <h2 className={style.skillSubtitle}>Profesional Skills</h2>
                      <p className={style.skillText}>Although not full-time, I have showcased and developed my skills multiple times, through different opportunities like OJTs and extra credits in University</p>
                      <SkillsCard skill = 'HTML5, CSS, JAVASCRIPT' percent = '90%' icon = 'bx bxl-html5'></SkillsCard>
                      <SkillsCard skill = 'C' percent = '75%' icon = 'bx bxl-c-plus-plus'></SkillsCard>
                      <SkillsCard skill = 'PYTHON' percent = '70%' icon = 'bx bxl-python'></SkillsCard>
                      <SkillsCard skill = 'JAVA' percent = '55%' icon = 'bx bxl-java'></SkillsCard>
                      <SkillsCard skill = 'UI/UX' percent = '40%' icon = 'bx bxs-paint'></SkillsCard>
                    
                    </div>
                    <div className={style.SkillsImg}>              
                        <DotLottieReact className = {style.skillImg}  src="https://lottie.host/428d1b6c-2c98-429c-bbbf-c411ceff112b/sGrRXREVZ3.json" background="transparent" speed="1.25" loop autoplay></DotLottieReact>
                    </div>
                </div>
            </section>
    </div>
  )
};

export default Skills;
