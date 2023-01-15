import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.png';
import project6 from '../assets/project-6.png';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        <li className="project">
          <div className="project__content">
            <img src={project1} alt="Project" />
            <h3>design portfolio</h3>
            <p>
              <span>HTML</span>
              <span>CSS</span>
            </p>
          </div>
        </li>
        <li className="project">
          <div className="project__content">
            <img src={project2} alt="Project" />
            <h3>e-learning landing page</h3>
            <p>
              <span>HTML</span>
              <span>CSS</span>
            </p>
          </div>
        </li>
        <li className="project">
          <div className="project__content">
            <img src={project3} alt="Project" />
            <h3>todo web app</h3>
            <p>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </p>
          </div>
        </li>
        <li className="project">
          <div className="project__content">
            <img src={project4} alt="Project" />
            <h3>entertainment web app</h3>
            <p>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </p>
          </div>
        </li>
        <li className="project">
          <div className="project__content">
            <img src={project5} alt="Project" />
            <h3>memory game</h3>
            <p>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </p>
          </div>
        </li>
        <li className="project">
          <div className="project__content">
            <img src={project6} alt="Project" />
            <h3>art gallery showcase</h3>
            <p>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
