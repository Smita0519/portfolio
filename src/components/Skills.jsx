import styles from './Skills.module.css';

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Django", "Python"] },
  { category: "Tools", items: ["GitHub", "VS Code", "Figma", "Vercel", "Postman"] },
  { category: "Others", items: ["REST APIs", "Responsive Design", "CSS Modules"] },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <div className={styles.rule}></div> 
        <div className={styles.grid}>
          {skills.map((group, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.items}>
                {group.items.map((skill, i) => (
                  <span key={i} className={styles.skillBadge}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;