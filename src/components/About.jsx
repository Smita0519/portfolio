import styles from './About.module.css';
import profilePic from '../assets/pic1.jpg';

function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className="container-xl">
        <div className="row align-items-center g-5">

          {/* Image */}
          <div className="col-12 col-lg-5" data-aos="fade-right" data-aos-delay="100">
            <div className={styles.imageFrame}>
              <img
                src={profilePic}
                alt="Smita Maharjan"
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="col-12 col-lg-7" data-aos="fade-left" data-aos-delay="200">
            <h2 id="about-title" className="section-title text-start">About Me</h2>
            <div className={styles.rule}></div>
            <h3 className={styles.heading}>Hello,<br />Let's Chat.</h3>
            <p className={styles.bio}>
              I'm a third-year Computer Engineering student with a growing passion
              for building modern web applications. I enjoy crafting interfaces that
              are both functional and beautifully user-friendly.
            </p>
            <p className={styles.bio}>
              My academic background spans programming fundamentals, networking, and
              digital electronics. Alongside coursework, I've been deepening my
              frontend skills in React, JavaScript, HTML, and CSS.
            </p>
            <p className={styles.bio}>
              When I'm not coding, you'll find me in a quiet corner, enjoying the
              stillness. I believe the best code — like the best moments in life —
              is clean and intentional.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;