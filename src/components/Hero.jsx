import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero introduction">
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-start">

            <p className={styles.greeting}>Aspiring Frontend Developer &nbsp;·&nbsp; Lalitpur, Nepal</p>
            <h1 className={styles.name}>Hello,</h1>
            <h2 className={styles.name}>I'm Smita Maharjan</h2>
            <div className={styles.rule}></div>
            <p className={styles.tagline}>
              Computer Engineering student crafting clean, modern web experiences
              with React, JavaScript, and thoughtful CSS.
            </p>
            <div className={styles.buttons}>
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact"  className="btn-secondary">Contact Me</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;