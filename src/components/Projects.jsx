import { useState } from 'react';
import styles from './Projects.module.css';
import project1 from '../assets/p1.jpg';
import project2 from '../assets/p2.jpg';
import project3 from '../assets/p3.png';
// import project4 from '../assets/p4.png';
// import project5 from '../assets/p5.png';
// import project6 from '../assets/p6.png';
// import project7 from '../assets/p7.png';
//import planMymealVideo from '../assets/v2.mp4'; // After adding videovideo

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
    liveLink: null,
    liveLabel: "Coming Soon",
    videoSrc: null, // After adding video
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
    {
    id: 4,
    title: "Ant Simulation",
    image: null,
    description: "An interactive ant colony simulation developed with Pygame that demonstrates swarm intelligence and emergent behavior. Ants navigate the environment using pheromone-based pathfinding to locate and collect food, showcasing concepts of decentralized systems, simple AI rules, and collective behavior.",
    tags: ["python", "pygame"],
    liveLink: null,
    liveLabel: "Coming Soon",
    videoSrc: null, // After adding video
    githubLink: "https://github.com/Smita0519/Ant-Simulation",
  },
    {
    id: 5,
    title: "Space Invaders Game",
    image: null,
    description: "A classic Space Invaders-style arcade game built using Pygame, where the player controls a spaceship to shoot and eliminate incoming enemies. The game features smooth controls, collision detection, scoring, and increasing difficulty, demonstrating core concepts of 2D game development and real-time interaction in Python.",
    tags: ["python", "pygame"],
    liveLink: null,
    liveLabel: "Coming Soon",
    videoSrc: null, // After adding video
    githubLink: "https://github.com/Smita0519/Space-invaders",
  },
    {
    id: 6,
    title: "Lung Cancer Prediction",
    image: null,
    description: "A machine learning-based prediction system designed to assess the likelihood of lung cancer using patient data. The project involves data preprocessing, model training, and classification, highlighting practical applications of machine learning in healthcare and early risk detection. ONLY FOR ACADEMIC PURPOSES, NOT FOR REAL-WORLD USE.",
    tags: ["Python", "Machine Learning", "scikit-learn"],
    liveLink: null,
    liveLabel: "Coming Soon",
    videoSrc: null, // After adding video
    githubLink: "https://github.com/Smita0519/Lung-cancer-prediction",
  },
    {
    id: 7,
    title: "Sticky Notes App",
    image: null,
    description: "A full-stack, user-friendly note-taking application designed for creating, editing, and organizing notes efficiently. It features a clean interface, dynamic updates, and persistent storage, showcasing frontend development, state management, and interactive UI design.",
    tags: ["React", "Django", "Python", "HTML", "CSS", "SQLite", "JavaScript", "REST APIs"],
    liveLink: null,
    liveLabel: "Coming Soon",
    videoSrc: null, // After adding video
    githubLink: "https://github.com/Smita0519/Sticky-Notes-App",
  },
];

const SHORT_LIMIT = 100;

/* ── Video Modal ── */
//needs fixing
// function VideoModal({ src, title, onClose }) {
//   return (
//     <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={`${title} video demo`}>
//       <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
//         <button className={styles.modalClose} onClick={onClose} aria-label="Close video">✕</button>
//         <video
//           src={src}
//           className={styles.modalVideo}
//           controls
//           autoPlay
//           playsInline
//         >
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// }

/* ── Project Card ── */
function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [showVideo, setShowVideo]   = useState(false);

  const isLong = project.description.length > SHORT_LIMIT;
  const displayedText = expanded
    ? project.description
    : project.description.slice(0, SHORT_LIMIT) + (isLong ? '...' : '');

  return (
    <>
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
          {/* Live Demo or Coming Soon */}
          {project.liveLink ? (
            <a href={project.liveLink} className="btn-primary" target="_blank" rel="noreferrer noopener">Live Demo</a>
          ) : (
            <span className={styles.btnDisabled}>{project.liveLabel || "Coming Soon"}</span>
          )}

          {/* Video Demo button; only shown if videoSrc is provided
          {project.videoSrc && (
            <button className={styles.btnVideo} onClick={() => setShowVideo(true)}>
              ▶ Video Demo
            </button>
          )} */}

          <a href={project.githubLink} className="btn-secondary" target="_blank" rel="noreferrer noopener">GitHub</a>
        </div>
      </article>

      {/* Modal */}
      {showVideo && project.videoSrc && (
        <VideoModal
          src={project.videoSrc}
          title={project.title}
          onClose={() => setShowVideo(false)}
        />
      )}
    </>
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