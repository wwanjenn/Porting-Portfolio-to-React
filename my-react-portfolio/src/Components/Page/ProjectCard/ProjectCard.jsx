import React from "react";
import style from './ProjectCard.module.css'

const ProjectCard = (props) =>{
    const {title, img, link} = props;
    return(<>
        <div className={style.cardContain}>
            <a href={link} className={style.workImg}>
                <img src={img} alt="" className={style.workImg}></img>
                <div className={style.imageText}>
                    <p>{title}</p>
                </div>
            </a>
        </div>
    </>)
};

export default ProjectCard;