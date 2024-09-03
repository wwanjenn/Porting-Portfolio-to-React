import React from "react";
import style from "./Footer.module.css"

const Footer = () =>{
    return(<>
        <footer className={style.footer}>
            <p className={style.footerTitle}>Wanjin</p>
            <div className={style.footerSocial}>
                <a href="#" className={style.footerIcon}><i className='bx bxl-facebook' ></i></a>
                <a href="#" className={style.footerIcon}><i className='bx bxl-instagram' ></i></a>
                <a href="#" className={style.footerIcon}><i className='bx bxl-twitter' ></i></a>
            </div>
            <p className={style.footerCopy}>&#169; Wanjin Maglangit. All rigths reserved</p>
        </footer>

    </>)
};

export default Footer;