import styles from './Footer.module.css';
import { FaInstagram, FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container-xl">

        <div className={`row g-4 ${styles.top}`}>

          <div className="col-12 col-md-6 col-lg-5">
            <h3 className={styles.logo}>Smita Maharjan</h3>
            <p className={styles.tagline}>Building clean & modern web experiences.</p>
          </div>

          {/* Quick Links */}
          <nav className="col-6 col-md-3 col-lg-3" aria-label="Footer navigation">
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {['Home','About','Projects','Skills','Contact'].map(link => (
                <li key={link}>
                  <a href={link === 'Home' ? '#hero' : `#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="col-6 col-md-3 col-lg-4">
            <h4 className={styles.linksTitle}>Find Me On</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="https://github.com/Smita0519" target="_blank" rel="noreferrer noopener" aria-label="GitHub profile">
                  <FaGithub size={18} /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/smita-maharjan-9963b8317/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile">
                  <FaLinkedin size={18} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/maharjan.smita/" target="_blank" rel="noreferrer noopener" aria-label="Instagram profile">
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