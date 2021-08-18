import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ index, img, alt, title, description }) {
    const onClickLink = () => {
        window.scrollTo(0, 0);
    };
    return (
       <Link to={`/project/${title.toLowerCase()}`}
       onClick={onClickLink()}>
        <div className="selected__project__container" key={index}>
            <div className="selected__project__img">
                <img src={img} alt={alt} />
            </div>
            <div className="selected__project__desc">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
       </Link>
    );
}

export default ProjectCard;
