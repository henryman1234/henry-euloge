import React from "react"
import "./singleproject.scss"
import {motion} from "framer-motion"
import { SlideUp, SliderBottom } from "../../utils/animation"
import { Link } from "react-router-dom"
import maq3 from "../../../public/images/maq3.jpg"
import maq4 from "../../../public/images/maq4.jpg"
import maq5 from "../../../public/images/maq5.jpg"


const SingleProject = function () {
    return(
        <div className="singleProject">

            <div className="page-header">
                <motion.div variants={SlideUp(0.4)} initial="hidden" whileInView="visible" className="page-title">Strackr</motion.div>
                <motion.div variants={SlideUp(0.5)} initial="hidden" whileInView="visible" className="page-subtitle">Création d'une librairie de composants et refonte du dashboard Strackr</motion.div>
            </div>

            <div className="section">

                <div className="formatted">

                    <div className="bloc columns">
                        <h2 className="big">Création d'une librairie de composants React</h2>
                        <a href="#" className="btn">voir le site</a>
                    </div>

                    <div className="bloc">
                        <p>L'objectif du projet est de travailler sur la nouvelle version de  <Link target="_blank">Stackr</Link>, une application qui permet le suivi d'affiliation dans un dashboard</p>
                    </div>

                    <div className="bloc columns">
                        <div><img src={maq3} alt="" /></div>

                        <div>
                            <h2>Création d'un design system</h2>
                            <p>
                                Afin de préparer le redesign la première étape a été de créer une librairie de composants à partir d'un
                                design créé avec Figma. Pour présenter les composant dans un environnement isolé j'ai choisi d'utiliser 
                                <Link target="_blank">Storybook</Link>
                            </p>

                            <p>
                                Pour organiser la grande quantité de composants, j'ai utilisé le principe de l'
                                <Link target="_blank">Atomic Design</Link> en séparant
                                    les composants en 3 grandes catégories: 
                            </p>

                            <ul>
                                <li>Atomes</li>
                                <li>Molécules</li>
                                <li>Organismes</li>
                            </ul>

                            <p>Cette organisation permet de s'y retrouver plus facilement dans la centaine de composants utilisés dans
                            l'application.</p>
                        </div>
                    </div>

                    <div className="bloc mosaic">
                        <img src={maq3} alt="" />
                        <img src={maq4} alt="" />
                        <img src={maq5} alt="" />
                    </div>

                    <div className="bloc columns">
                        <div>
                            <h2>Developpement incrémental</h2>
                            <p>Une fois la librairie de composant créé une nouvelle partie de la mission a consisté à les mettre en place
                            pour créer les différents écrans de l'application. Cela a permis de continuer à développer la librairie de
                            composant avec de nouveaux composants pour gérer le positionnement des éléments (Stack, Row, ...).</p>

                            <p>
                                Afin de maintenir une bonne organisation du projet j'ai mis en place un système de monorepo basé sur 
                                <Link>pnpm</Link> et <Link>turborepo</Link>

                            </p>
                        </div>
                        <div>
                            <img src={maq4} alt="" />
                        </div>

                    </div>


                    <div className="bloc columns">
                        <div>
                            <img src={maq5} alt="" />
                        </div>
                        <div>
                            <h2>Des outils sur mesure</h2>
                            <p>L'application communique de manière importante avec une API documentée avec OpenAPI. Pour assurer un typage de bout en bout j'ai du développer un outil pour l'occasion pour permettre la traduction des fichiers de définition OpenAPI en type TypeScript. Cet outil, nommé o2ts, a permis d'améliorer la stabilité du code et évite de nombreux bugs lors de l'évolution du format de l'API.</p>

                            <p>
                                Afin de maintenir une bonne organisation du projet j'ai mis en place un système de monorepo basé sur 
                                <Link>pnpm</Link> et <Link>turborepo</Link>

                            </p>
                        </div>
                        
                        
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SingleProject