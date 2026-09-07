import React, { useEffect, useState } from "react"
import "./projets.scss"
import {motion} from "framer-motion"
import { SlideUp, SliderLeft, SliderBottom, SliderRight } from "../../utils/animation"
import { Projects } from "../../utils/dummyData"
import {Link} from "react-router-dom"
import ProjectCard from "../../components/projectCard/ProjectCard"
import type { Project } from "../../utils/types"

function Projets () {

    const [projects, setProjects] = useState<Project[] | null>(null);
    // Etat du chargement
    const [isLoading, setIsLoading] = useState(true)
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {

        let isMounted = true;

        const fetchProjects = async function () {
            
            try {
                const res = await fetch(`${apiUrl}/projects`, {
                    method: "GET",
                    headers: {Accept: "application/json; charset=utf-8"}
                })

                if (res.ok) {
                    const data = await res.json()
                    console.log("Données renvoyées: ", data)
                    setProjects(data)
                    setIsLoading(false)
                }
            } catch (err) {
                console.error("Une érreur lors de la récupération: ", err)
                if (isMounted)  setIsLoading(false);
            }

        }

        fetchProjects();

        return () => {
            isMounted = false;
        }

        
    }, [])


    return (
        <div className="projets">

            <div className="page-header">
                <motion.div  
                    className="page-title"
                    initial={{opacity: 0,  y: 60}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, ease: "easeIn"}}
                >
                    Mes réalisations
                </motion.div>
                <motion.div  
                    className="page-subtitle"
                    initial={{opacity: 0,  y: 60}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, ease: "easeIn"}}
                >Voici un éventail de quelques des projets sur lesquels je suis intervenus.</motion.div>
            </div>
            
            <motion.div 
                className="section"
                initial={{opacity: 0,  y: 60}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, ease: "easeIn"}}
            >
                
                <motion.div className="projects-container" >

                    {projects?.map((project) => {
                        return (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        )
                    })}

                </motion.div>
            </motion.div>



            <div className="section-social">
                
                <motion.div variants={SliderLeft(0.3)} whileInView="visible"  initial="hidden"  className="section-top-title">réseaux sociaux</motion.div>
                <motion.div variants={SliderLeft(0.5)} whileInView="visible"  initial="hidden"    className="section-title">Me retrouver</motion.div>

                <motion.div className="social-links" variants={SliderRight(0.3)} initial="hidden" whileInView="visible">

                    <a href="https://wa.me/237658055913" target="_blank">
                            <strong>Whatsapp</strong>
                            <span>(+237) 658055913</span>
                            <img src="./images/whatsapp.png"  loading="lazy" alt="icone de whatsapp" />
                        </a>

                        <a href="https://github.com/henryman1234" target="_blank">
                            <strong>Github</strong>
                            <span>github.com/henry</span>
                            <img src="./images/github.png" alt="icone de github" loading="lazy"/>
                        </a>

                        <a href="" target="_blank">
                            <strong>Téléphone</strong>
                            <span>(+237) 658055913</span>
                            <img src="./images/phone.png" loading="lazy" alt="icone du telephone" />
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