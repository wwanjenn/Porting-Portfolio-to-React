import React from "react"
import styles from'./Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.header}>
        <a href = "/" className ={styles.logo}>Wanjin</a>
        <nav className= {styles.navbar}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Skills</a>
            <a href="/">Portfolio</a>
            <a href="/">Contact</a>
        </nav>
    </header>
  )
};

export default Navbar;
