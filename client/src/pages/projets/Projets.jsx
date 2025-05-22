import React from "react"
import "./projets.scss"
import {motion} from "framer-motion"
import github from "../../../public/images/github.png"
import phone from "../../../public/images/phone.png"
import whatsapp from "../../../public/images/whatsapp.png"
import { SlideUp, SliderLeft, SliderBottom, SliderRight } from "../../utils/animation"
import { Projects } from "../../utils/dummyData"
import {Link} from "react-router-dom"

function Projets () {
    return (
        <div className="projets">

            <div className="page-header">
                <motion.div variants={SlideUp(0.4)} initial="hidden" whileInView="visible" className="page-title">Mes réalisations</motion.div>
                <motion.div variants={SlideUp(0.5)} initial="hidden" whileInView="visible" className="page-subtitle">Voici un éventail de quelques des projets sur lesquels je suis intervenus.</motion.div>
            </div>
            
            <div className="section">
                
                <motion.div className="projects-container" variants={SlideUp(0.6)} initial="hidden" whileInView="visible">

                    {Projects.map(function(projectItem){
                        return (
                            <div className="project" key={projectItem.id}>
                                <Link to={`/projets/${projectItem.id}`} className="project-image">
                                    <img src={projectItem.image} alt="image du projet" />
                                </Link>
                                <div className="project-body">
                                    <div className="project-tags">
                                        {projectItem.stacks.map(function(stack){
                                            return (
                                                <div key={stack} className="tags-div">
                                                    {stack}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="project-name">{projectItem.name}</div>
                                    <div className="project-desc">{projectItem.description}</div>
                                    <Link to={`/projets/${projectItem.id}`} className="project-action">
                                        En savoir plus
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

                </motion.div>
            </div>



            <div className="section-social">
                
                <motion.div variants={SliderLeft(0.3)} whileInView="visible"  initial="hidden"  className="section-top-title">réseaux sociaux</motion.div>
                <motion.div variants={SliderLeft(0.5)} whileInView="visible"  initial="hidden"    className="section-title">Me retrouver</motion.div>

                <motion.div className="social-links" variants={SliderRight(0.3)} initial="hidden" whileInView="visible">

                    <a href="https://wa.me/237658055913" target="_blank">
                        <strong>Whatsapp</strong>
                        <span>(+237) 658055913</span>
                        <img src={whatsapp} alt="icone de github" />
                    </a>

                    <a href="https://github.com/henryman1234" target="_blank">
                        <strong>Github</strong>
                        <span>github.com/henry</span>
                        <img src={github} alt="icone de github" />
                    </a>

                        <a href="" target="_blank">
                        <strong>Téléphone</strong>
                        <span>(+237) 658055913</span>
                        <img src={phone} alt="icone de github" />
                    </a>

                </motion.div>

            </div>

            <div className="section-footer">
                Intégration et developpement par <a href="/">Henry</a>
            </div>

      
        </div>
    )
}

export default Projets