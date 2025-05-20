import React from "react"
import "./projets.scss"
import maq3 from "../../../public/images/maq3.jpg"
import maq4 from "../../../public/images/maq4.jpg"
import maq5 from "../../../public/images/maq5.jpg"
import maq6 from "../../../public/images/maq6.jpg"
import maq7 from "../../../public/images/maq7.jpg"
import {motion} from "framer-motion"
import github from "../../../public/images/github.png"
import phone from "../../../public/images/phone.png"
import whatsapp from "../../../public/images/whatsapp.png"
import { SlideUp, SliderLeft, SliderBottom, SliderRight } from "../../utils/animation"

function Projets () {
    return (
        <div className="projets">

            <div className="page-header">
                <motion.div variants={SlideUp(0.4)} initial="hidden" whileInView="visible" className="page-title">Mes réalisations</motion.div>
                <motion.div variants={SlideUp(0.5)} initial="hidden" whileInView="visible" className="page-subtitle">Voici un éventail de quelques des projets sur lesquels je suis intervenus.</motion.div>
            </div>
            
            <div className="section">
                
                <motion.div className="projects-container" variants={SlideUp(0.6)} initial="hidden" whileInView="visible">

                    <div className="project">
                        <a href="#" className="project-image">
                            <img src={maq6} alt="image du projet" />
                        </a>
                        <div className="project-body">
                            <div className="project-tags">React, CSS</div>
                            <div className="project-name">Stackr</div>
                            <div className="project-desc">Création d'une librairie de composants et refonte du dashboard Strackr</div>
                            <a href="#" className="project-action">
                                En savoir plus
                            </a>
                        </div>
                    </div>

                     <div className="project">
                        <a href="#" className="project-image">
                            <img src={maq7} alt="image du projet" />
                        </a>
                        <div className="project-body">
                            <div className="project-tags">React, CSS</div>
                            <div className="project-name">Stackr</div>
                            <div className="project-desc">Création d'une librairie de composants et refonte du dashboard Strackr</div>
                            <a href="#" className="project-action">
                                En savoir plus
                            </a>
                        </div>
                    </div>

                     <div className="project">
                        <a href="#" className="project-image">
                            <img src={maq4} alt="image du projet" />
                        </a>
                        <div className="project-body">
                            <div className="project-tags">React, CSS</div>
                            <div className="project-name">Stackr</div>
                            <div className="project-desc">Création d'une librairie de composants et refonte du dashboard Strackr</div>
                            <a href="#" className="project-action">
                                En savoir plus
                            </a>
                        </div>
                    </div>

                     <div className="project">
                        <a href="#" className="project-image">
                            <img src={maq4} alt="image du projet" />
                        </a>
                        <div className="project-body">
                            <div className="project-tags">React, CSS</div>
                            <div className="project-name">Stackr</div>
                            <div className="project-desc">Création d'une librairie de composants et refonte du dashboard Strackr</div>
                            <a href="#" className="project-action">
                                En savoir plus
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <a href="#" className="project-image">
                            <img src={maq3} alt="image du projet" />
                        </a>
                        <div className="project-body">
                            <div className="project-tags">React, CSS</div>
                            <div className="project-name">Stackr</div>
                            <div className="project-desc">Création d'une librairie de composants et refonte du dashboard Strackr</div>
                            <a href="#" className="project-action">
                                En savoir plus
                            </a>
                        </div>
                        
                    </div>

                     <div className="project">
                        <a href="#" className="project-image">
                            <img src={maq5} alt="image du projet" />
                        </a>
                        <div className="project-body">
                            <div className="project-tags">React, CSS</div>
                            <div className="project-name">Stackr</div>
                            <div className="project-desc">Création d'une librairie de composants et refonte du dashboard Strackr</div>
                            <a href="#" className="project-action">
                                En savoir plus
                            </a>
                        </div>
                    </div>

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