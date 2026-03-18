import styles from './About.module.css';
import profilePic from '../assets/pic1.jpg';

function About() {
  return (
    <section id="about" className={styles.about}>
      
          <div className={styles.imageFrame} data-aos="fade-right" data-aos-delay="100">
              <img src={profilePic} alt="Smita Maharjan" className={styles.image} />
            </div>
          <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.rule}></div>
        <div className={styles.content}>
            <h3 className={styles.heading}>Hello,<br />Let's Chat.</h3>
            <p className={styles.bio}>
              I am a Computer Engineering student in my third year, 
              with a growing interest in frontend development and 
              building modern web applications. I enjoy working on 
              projects that combine problem solving, design, and 
              programming to create interfaces that are both 
              functional and user-friendly.
            </p>

            <p className={styles.bio}>
              My academic background has introduced me to areas such as
              programming, computer systems, networking, and digital
              electronics. Alongside my coursework, I have been developing
              practical skills in web development using React, JavaScript,
              HTML, and CSS.
            </p>

            <p className={styles.bio}>
              I enjoy learning by building projects and experimenting with new
              technologies. Currently, I am focused on improving my knowledge
              of frontend architecture, UI design principles, and modern web
              development tools.
            </p>
            <p className={styles.bio}>
              When I'm not coding, you'll find me in a quiet corner, enjoying the 
              stillness and finding inspiration in the simple things. I believe that 
              the best code, like the best moments in life, is clean, intentional 
              and peaceful.
            </p>
          </div>
        </div>
    </section>
  );
}

export default About;