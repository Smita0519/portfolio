import { useState } from 'react';
import styles from './Projects.module.css';
import project1 from '../assets/p1.jpg';
import project2 from '../assets/p2.jpg';
import project3 from '../assets/p3.png';

const projects = [
  {
    id: 1,
    title: "SGS University Website",
    image: project1,
    description: "A beginner-level project showcasing a university website. The project demonstrates a responsive layout, navigation menu, and basic styling for university information such as courses, departments, and contact details.",
    tags: ["HTML", "CSS"],
    liveLink: "https://university-website-project-two.vercel.app/",
    githubLink: "https://github.com/Smita0519/university-website-project",
  },
  {
    id: 2,
    title: "Plan My Meal",
    image: project2,
    description: "A meal planning application that allows users to scan available ingredients and suggests recipe ideas based on what they already have. It's a smart way to reduce waste, save time, and make everyday meal planning easier and more efficient.",
    tags: ["Django", "Python", "HTML", "CSS"],
    liveLink: "#",
    githubLink: "https://github.com/Smita0519/food_app",
  },
  {
    id: 3,
    title: "LMS",
    image: project3,
    description: "A web application built with Django to manage courses, students, and instructors. The LMS allows users to view course content, track progress, and manage assignments efficiently. It demonstrates backend integration, user authentication, and dynamic content management.",
    tags: ["Django", "Python", "HTML", "CSS", "SQLite"],
    liveLink: "https://django-project-lms-roeh.onrender.com/",
    githubLink: "https://github.com/Smita0519/django-project-lms",
  },
];

const SHORT_LIMIT = 100;

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > SHORT_LIMIT;
  const displayedText = expanded
    ? project.description
    : project.description.slice(0, SHORT_LIMIT) + (isLong ? '...' : '');

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className={styles.cardImage}
          loading="lazy"
        />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>
          {displayedText}
          {isLong && (
            <button
              className={styles.viewMore}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? ' View Less' : ' View More'}
            </button>
          )}
        </p>
        <div className={styles.tags}>
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.cardFooter}>
        <a href={project.liveLink} className="btn-primary" target="_blank" rel="noreferrer noopener">Live Demo</a>
        <a href={project.githubLink} className="btn-secondary" target="_blank" rel="noreferrer noopener">GitHub</a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <div className="container-xl">
        <h2 id="projects-title" className="section-title">My Projects</h2>
        <div className="section-rule"></div>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;