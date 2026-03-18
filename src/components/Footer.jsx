import styles from './Footer.module.css';
import { FaInstagram, FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Smita Maharjan</h3>
            <p className={styles.tagline}>
              Building clean & modern web experiences.
            </p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><a href=" ">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.socials}>
            <h4 className={styles.linksTitle}>Find Me On</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="https://github.com/Smita0519" target="_blank" rel="noreferrer">
                  <FaGithub size={18} /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/smita-maharjan-9963b8317/" target="_blank" rel="noreferrer">
                  <FaLinkedin size={18} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/maharjan.smita/" target="_blank" rel="noreferrer">
                  <FaInstagram size={18} /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Smita Maharjan. All rights reserved.</p>
          <p className={styles.builtWith}>
            Built with React <FaReact size={18} className={styles.reactIcon} />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;