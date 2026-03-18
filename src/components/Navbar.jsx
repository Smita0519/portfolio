import styles from './Navbar.module.css';
import smLogo from '../assets/logo2.webp';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={smLogo} alt="SM Logo" />Smita Maharjan
      </div>
      <ul className={styles.navLinks}>
        <li><a href=" ">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;