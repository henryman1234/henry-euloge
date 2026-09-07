import React from "react";
import "./projectCard.scss";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css"
import "swiper/css/scrollbar"
import type { Project } from "../../utils/types";

const ProjectCard = ({project}: {project: Project}) => {
    
    return (

        <article className="project">

            <Link to={`/projets/${project.id}`}  className="project-image">
                <img src={project?.cover} alt="image du projet" />
            </Link>

            <div className="project-body">
                <div className="project-tags">
                    {project?.technologies?.map(function(item, index:number){
                        return (
                            <div key={item} className="tags-div">
                                {item}
                            </div>
                        )
                    })}
                </div>

                <div className="project-name">{project.name}</div>
                <div className="project-desc">{project.description}</div>

                <Link to={`/projets/${project.id}`}  className="project-action">
                    En savoir plus
                </Link>
                
            </div>

        </article>

    )
}

export default ProjectCard