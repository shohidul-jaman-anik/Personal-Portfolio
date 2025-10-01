import React from 'react';
import Loading from '../Shared/Loading/Loading';

const SingleProject = ({ project, isLoading }) => {

    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div key={project._id}>

            <div className="row mb-5">
                <div className="col-md-4 projectImg">
                    <img src={project.img} alt="" className="img-fluid  my-auto " data-aos="zoom-in"
                        data-aos-duration="500" />
                </div>
                <div className="col-md-8 project-details" data-aos="fade-up"
                    data-aos-duration="500">
                    <h3 className="project-card__title mt-md-0 mt-sm-5">{project.name}</h3>
                    <p>{project.date}</p>
                    <ul className="my-item">{
                        project.des.map((item) => <li>{item}</li>)
                    }</ul>
                    <ul className="tags">{
                        project.Technology.map((item) => <li>{item}</li>)
                    }</ul>
                    <div className="project-link">
                        <a href={project?.website} target="blank"><i className="fas fa-globe"></i> Live Site</a>
                        <a href={project?.frontendGit} target="blank"><i className="fa fa-github"></i> Client Side</a>
                        {
                            project?.backendGit && <a href={project?.backendGit} target="blank"><i className="fa fa-github"></i> Server Side</a>
                        }
                        <a href={project?.linkedin} target="blank"><i className="fa fa-linkedin-square"></i> Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;