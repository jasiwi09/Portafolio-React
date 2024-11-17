import './Projects.css';
import Project from './Project.js';
import projects from '../data/projects.json';


export default function Projects() {
    return (
        <div className="container-projects" id="projects">
            <h2>mis proyectos</h2>
            <div className="projects-box">
                {projects.map((project, index) => {
                    return <Project key={index} path={project.path} title={project.title} />
                } )}
            </div>
        </div>
    );
}