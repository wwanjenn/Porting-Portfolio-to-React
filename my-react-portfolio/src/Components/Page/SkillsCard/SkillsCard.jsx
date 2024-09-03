import React from "react"
import style from './SkillsCard.module.css'

const SkillsCard = (props) => {
  const { skill, percent, icon } = props;
  return (
    <div>
      <div className={style.skillData}>
                            <div className={style.skillName}>
                                <i className={`${style.skillIcon} ${icon}`}></i>
                                <span className={style.skillName}>{skill}</span>
                            </div>
                            <div className={style.skillBar} style={{ width: `${percent}` }}>

                            </div>
                            <div>
                                <span className={style.skillPercent}>{percent}</span>
                            </div>
                        </div>
    </div>
  )
};

export default SkillsCard;
