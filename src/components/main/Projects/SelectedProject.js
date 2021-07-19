import React from 'react'
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

function SelectedProject({data}) {
    return (
        <section className="project">
            <div>
                <h2 className="section__title">Some Projects I've Built</h2>
            </div>
            <div className="selected__project__wrapper">
                {data.slice(0,3).map((project, index) => {
                    const {
                        img,
                        alt,
                        description,
                        title,
                    } = project;
                    return (
                        <ProjectCard
                        key={index}
                        img={img}
                        alt={alt}
                        title={title}
                        description={description}
                        />
                    );
                })}
            </div>
            <Link to="/project">
            <div className="more__Works__cta">
            <h2>See all my projects</h2>
            <i className='bx bx-right-arrow-alt'></i>
            </div>
            </Link>
        </section>
    );
}

export default SelectedProject
