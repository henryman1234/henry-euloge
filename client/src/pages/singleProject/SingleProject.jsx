import React from "react"
import "./singleproject.scss"
import { Link } from "react-router-dom"
import maq3 from "../../../public/images/maq3.jpg"
import maq4 from "../../../public/images/maq4.jpg"
import maq5 from "../../../public/images/maq5.jpg"
import maq6 from "../../../public/images/maq6.jpg"
import maq7 from "../../../public/images/maq7.jpg"
import { SlideUp, SliderBottom, SliderLeft, SliderRight } from "../../utils/animation"
import github from "../../../public/images/github.png"
import phone from "../../../public/images/phone.png"
import whatsapp from "../../../public/images/whatsapp.png"
import {motion} from "framer-motion"
import code1 from "../../../public/images/code1.jpg"
import code2 from "../../../public/images/code2.jpg"
import code3 from "../../../public/images/code3.jpg"
import code4 from "../../../public/images/code4.jpg"
import code5 from "../../../public/images/code5.jpg"
import code6 from "../../../public/images/code6.jpg"
import code7 from "../../../public/images/code7.jpg"


const SingleProject = function () {
    return(
        <div className="singleProject">

            <div className="page-header">
                <motion.div variants={SlideUp(0.4)} initial="hidden" whileInView="visible" className="page-title">Strackr</motion.div>
                <motion.div variants={SlideUp(0.5)} initial="hidden" whileInView="visible" className="page-subtitle">Création d'une librairie de composants et refonte du dashboard Strackr</motion.div>
            </div>

            <motion.div variants={SlideUp(0.3)} initial="hidden" whileInView="visible" className="section">

                <div className="formatted">

                    <div className="formatted-first-div">
                        <h2 className="big">Création d'une librairie de composants React</h2>
                        <Link  className="btn">voir le site</Link>
                    </div>

                    <div className="formatted-second-div">
                        <p>L'objectif du projet est de travailler sur la nouvelle version de  une application qui permet le suivi d'affiliation dans un dashboard</p>
                    </div>

                    <div className="formatted-third-div">
                        <div className="one"><img src={code1} alt="" /></div>

                        <div className="two">
                            <h2>Création d'un design system</h2>
                            <p>
                                Afin de préparer le redesign la première étape a été de créer une librairie de composants à partir d'un
                                design créé avec Figma. Pour présenter les composant dans un environnement isolé j'ai choisi d'utiliser 
                            </p>

                            <p>
                                Pour organiser la grande quantité de composants, j'ai utilisé le principe sur
                                les composants en 3 grandes catégories: 
                            </p>

                            <ul>
                                <li>- Atomes</li>
                                <li>- Molécules</li>
                                <li>- Organismes</li>
                            </ul>

                            <p>Cette organisation permet de s'y retrouver plus facilement dans la centaine de composants utilisés dans
                            l'application.</p>
                        </div>
                    </div>

                    <div className="formatted-fourth-div">
                        <img className="first-img" src={code2} alt="" />
                        <img className="second-img" src={code3} alt="" />
                        <img className="third-img" src={code4} alt="" />
                    </div>

                    <div className="formatted-fifth-div">
                        <div className="one">
                            <h2>Developpement incrémental</h2>
                            <p>Une fois la librairie de composant créé une nouvelle partie de la mission a consisté à les mettre en place
                            pour créer les différents écrans de l'application. Cela a permis de continuer à développer la librairie de
                            composant avec de nouveaux composants pour gérer le positionnement des éléments (Stack, Row, ...).</p>

                            <p>
                                Afin de maintenir une bonne organisation du projet j'ai mis en place un système de monorepo basé sur Typescript
                            </p>
                        </div>
                        <div className="two">
                            <img src={code5} alt="" />
                        </div>

                    </div>


                    <div className="formatted-sixth-div">
                        <div className="one">
                            <img src={code6} alt="" />
                        </div>
                        <div className="two">
                            <h2>Des outils sur mesure</h2>
                            <p>L'application communique de manière importante avec une API documentée avec OpenAPI. Pour assurer un typage de bout en bout j'ai du développer un outil pour l'occasion pour permettre la traduction des fichiers de définition OpenAPI en type TypeScript. Cet outil, nommé o2ts, a permis d'améliorer la stabilité du code et évite de nombreux bugs lors de l'évolution du format de l'API.</p>

                            <p>
                                Afin de maintenir une bonne organisation du projet j'ai mis en place un système de monorepo basé sur React
                            </p>
                        </div>
                        
                        
                    </div>

                </div>
            </motion.div>

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

export default SingleProject