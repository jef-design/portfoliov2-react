import React from 'react'
import { ProjectData } from '../../../data/ProjectData'
import ProjectCard from '../../main/Projects/ProjectCard';
import {Helmet} from "react-helmet";

function Project({ data }) {

    return (
        <section className="project helper__top">
            <Helmet>
                <title>Projects - Jeff Bermejo</title>
            </Helmet>
        <div>
            <h2 className="section__title">Projects I've Built</h2>
        </div>
        <div className="selected__project__wrapper">
            {ProjectData.map((project, index) => {
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
    </section>
    )
}

export default Project
