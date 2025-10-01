import React from 'react';
import { Link } from 'react-router-dom';
import LoadProjects from '../Hooks/LoadProjects';
import Loading from '../Shared/Loading/Loading';
import Project from './../Project/Project';
import './Projects.css';

// const projectsData = 
const Projects = () => {

  const [projects, isLoading] = LoadProjects()
  if (isLoading) {
    return <Loading></Loading>
  }
  const someProjects = projects?.slice(0, 3)
  return (
    <div id="projects" className='subProject'>
      <h2 className="text-start subProjectTitle">My projects_</h2>
      {
        someProjects?.map(project =>
          <Project key={project.id}
            isLoading={isLoading}
            project={project}>

          </Project>)
      }
      <Link to="/allProjects" className="section_btn site-btn" data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500">All Projects</Link>
    </div>
  );
};

export default Projects;