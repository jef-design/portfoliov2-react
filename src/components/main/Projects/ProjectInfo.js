import React, { useEffect } from "react";
import { useParams } from "react-router";
import { ProjectData } from "../../../data/ProjectData";
import {Helmet} from 'react-helmet-async'

function ProjectInfo({ data }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { title } = useParams();
    console.log(title);
    return (
        <section className="project">
            <div>
                <h2 className="section__title">Some Projects I've Built</h2>
            </div>
            <div className="project__wrapper">
                {ProjectData.filter(info => info.title === title).map(
                    (project, index) => {
                        const {
                            img,
                            mobile_view,
                            desktop_view,
                            alt,
                            description,
                            title,
                            tech_use,
                            site_link,
                            github_repo,
                        } = project;
                        return (
                            <>
                            <Helmet>
                                <title>{title} - Projects</title>
                            </Helmet>
                                <h2>{title}</h2>
                                <div className="project__container" key={index}>
                                    <div className="project__image">
                                        <img src={img} alt={alt} />
                                    </div>
                                    <div className="project__description">
                                        <div className="project__btn">
                                            <a
                                                className="btn btn_sitelink"
                                                href={site_link}
                                            >
                                                Visit site
                                            </a>
                                            <a
                                                className="btn btn_githubrepo"
                                                href={github_repo}
                                            >
                                                Github Repo
                                            </a>
                                        </div>
                                        <p>{description}</p>
                                        <p>Tech used:</p>
                                        <ul className="project__techuse">
                                            {tech_use.map((tech, i) => {
                                                return (
                                                    <li className="project__techlist">
                                                        {tech.name}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="project__device__type">
                                    <div className="desktop__view">
                                        <h3>Desktop view</h3>
                                        <div className="desktop__view__img">
                                        <img src={desktop_view} alt={alt} />
                                        </div>
                                    </div>
                                    <div className="mobile__view">
                                        <h3>Mobile view</h3>
                                        <div className="desktop__view__img">
                                        <img src={mobile_view} alt={alt} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    }
                )}
            </div>
        </section>
    );
}

export default ProjectInfo;
