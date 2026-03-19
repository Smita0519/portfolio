import styles from './Skills.module.css';

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Django", "Python"] },
  { category: "Tools",    items: ["GitHub", "VS Code", "Figma", "Vercel", "Postman"] },
  { category: "Others",   items: ["REST APIs", "Responsive Design", "CSS Modules"] },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-title">
      <div className="container-xl">
        <h2 id="skills-title" className="section-title">My Skills</h2>
        <div className="section-rule"></div>
        <div className="row g-4">
          {skills.map((group, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-4">
              <div className={styles.card}>
                <h3 className={styles.category}>{group.category}</h3>
                <div className={styles.items}>
                  {group.items.map((skill, j) => (
                    <span key={j} className={`skill-badge ${styles.skillBadge}`}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;