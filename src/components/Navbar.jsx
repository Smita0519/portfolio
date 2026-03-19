import styles from './Navbar.module.css';
import smLogo from '../assets/logo2.webp';

function Navbar() {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg fixed-top`} aria-label="Main navigation">
      <div className="container-xl px-4">

        {/*  Logo */}
        <a className={styles.logo} href="/" aria-label="Smita Maharjan - Home">
          <img src={smLogo} alt="SM Logo" width="30" height="30" />
          Smita Maharjan
        </a>

        {/* Bootstrap Hamburger Toggle */}
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={styles.togglerIcon}></span>
          <span className={styles.togglerIcon}></span>
          <span className={styles.togglerIcon}></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul className={`${styles.navLinks} navbar-nav`}>
            <li className="nav-item"><a href="#hero"     className={styles.navLink}>Home</a></li>
            <li className="nav-item"><a href="#about"    className={styles.navLink}>About</a></li>
            <li className="nav-item"><a href="#projects" className={styles.navLink}>Projects</a></li>
            <li className="nav-item"><a href="#skills"   className={styles.navLink}>Skills</a></li>
            <li className="nav-item"><a href="#contact"  className={styles.navLink}>Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;