import React, { useState, useEffect, useDebugValue} from "react"
import "./singleproject.scss"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { SlideUp, SliderBottom, SliderLeft, SliderRight } from "../../utils/animation"
import {motion} from "framer-motion"
import OptimizedImage from "../../utils/OptimizedImage"
import type { Project } from "../../utils/types"
import {ArrowLeft, ArrowRightLeft, User} from "lucide-react"

const SingleProject = function () {


    useEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        })

    }, [])

    const {id} = useParams()
    const [project, setProject] = useState<Project | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const apiUrl = import.meta.env.VITE_API_URL;
    const prev = Number(id)  - 1
    const next = Number(id)  +  1;
    const navigate = useNavigate();
    
    useEffect(() => {

        let isMounted = true;

        const  fetchSingleProject = async function () {

            try {
                const  res = await fetch(`${apiUrl}/projects/${id}`, {
                    method: "GET",
                    headers: {Accept: "application/json; charset=utf-8"}
                })

                if (res.ok) {
                    const data = await res.json()
                    setProject(data);
                }

            } catch (err) {
                console.log(`Failed to fetch this project ${err}`)
                if (!isMounted) setIsLoading(false);
            }
        }

        fetchSingleProject()

        return () => {
            isMounted = false
        }

    }, [])


    return(
            
        <main className="singleProject">

            <div className="page-header">

                {/* Bouton retour */}
                <motion.div 
                    className="back"
                    onClick={() => navigate(-1)}
                    initial={{opacity: 0,  y: 60}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, ease: "easeIn"}}
                    >
                        <ArrowLeft  className="icon"/>
                        <span>Retour</span>
                </motion.div> 


                <motion.div 
                    className="page-title"
                    initial={{opacity: 0,  y: 60}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, ease: "easeIn"}}
                >
                    {project?.name}
                </motion.div>

                <motion.div  
                    className="page-subtitle"
                    initial={{opacity: 0,  y: 60}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, ease: "easeIn"}}
                >
                    {project?.description}
                </motion.div>
            </div>




            <motion.div  
                className="section"
                initial={{opacity: 0,  y: 60}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, ease: "easeIn"}}
            >

                <div className="formatted">

                    <div className="formatted-first-div">
                        <h2 className="big">{project?.name}</h2>

                        <a href={project?.url} className="btn">voir le site</a>
                    </div>



                    <div className="formatted-second-div">
                        <p>{project?.goal}</p>
                    </div>



                    <div className="formatted-third-div">

                        <div className="one">
                            {/* <OptimizedImage  url="/images/code1.jpg" loading="lazy" /> */}
                            {/* <OptimizedImage  url={project?.block_one.img} loading="eager" /> */}
                            <img 
                                src={project?.block_one.img}
                                loading="lazy"
                                fetchPriority="high"
                                decoding="async"
                            />
                            {/* <Image
                                urlEndpoint="https://ik.imagekit.io/6lfozi2av"
                                src={project?.block_one.img}
                                width={500}
                                height={500}
                                alt="Description ot the image"
                            /> */}
                        </div>

                        <div className="two">
                            <h2>{project?.block_one?.title}</h2>

                            <p>{project?.block_one?.para_one}</p>

                            <p>{project?.block_one?.para_two}</p>

                            <p>{project?.block_one?.para_three}</p>

                            <p>{project?.block_one?.para_four}</p>

                        </div>
                    </div>



                    <div className="formatted-fourth-div">

                        <div className="first-div">
                            <img 
                                src={project?.block_two[0]}
                                className="first-img"
                                loading="lazy"
                                fetchPriority="high"
                            />

                        </div>

                        <div className="second-div">
                            <img 
                                src={project?.block_two[1]}
                                className="second-img"
                                loading="lazy"
                                fetchPriority="high"

                            />
                        
                        </div>

                        <div className="third-div">
                            <img 
                                src={project?.block_two[2]}
                                className="third-img"
                                loading="lazy"
                                fetchPriority="high"

                            />
                        </div>

                    </div>

                    <div className="formatted-fifth-div">

                        <div className="one">

                            <h2>{project?.block_three?.title}</h2>

                            <p>{project?.block_three?.para_one}</p>

                            <p>{project?.block_three?.para_two}</p>

                        </div>

                        <div className="two">
                            {/* <OptimizedImage  url={project?.block_three?.img}
                             loading="lazy" /> */}
                            <img 
                                src={project?.block_three?.img}
                                loading="lazy"
                                fetchPriority="high"
                                decoding="async"
                            />
                        </div>

                    </div>


                    <div className="formatted-sixth-div">

                        <div className="one">
                            {/* <OptimizedImage  url={project?.block_four?.img} loading="lazy" /> */}

                            <img 
                                loading="lazy"
                                fetchPriority="high"
                                src={project?.block_four?.img}
                                decoding="async"
                            />
                        </div>

                        <div className="two">

                            <h2>{project?.block_four?.title}</h2>

                            <p>{project?.block_four?.para_one}</p>

                            <p>{project?.block_four?.para_two}</p>

                        </div>

                        
                    </div>

                </div>
            </motion.div>




            {/* Footer */}

            <div className="section-social">
                
                <motion.div   className="section-top-title">réseaux sociaux</motion.div>
                <motion.div     className="section-title">Me retrouver</motion.div>

                <motion.div 
                    className="social-links" 
                    initial={{opacity: 0,  y: 90}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, ease: "easeIn"}}
                >

                    <a href="https://wa.me/237658055913" target="_blank">
                        <strong>Whatsapp</strong>
                        <span>(+237) 658055913</span>
                        <img src="/images/whatsapp.png" alt="icone de Whatsapp" />
                    </a>

                    <a href="https://github.com/henryman1234" target="_blank">
                        <strong>Github</strong>
                        <span>github.com/henry</span>
                        <img src="/images/github.png" alt="icone de github" />
                    </a>

                    <a href="" target="_blank">
                        <strong>Téléphone</strong>
                        <span>(+237) 658055913</span>
                        <img src="/images/phone.png" alt="icone de phone" />
                    </a>

                </motion.div>

            </div>

            {/* Pagination */}
            <motion.div 
                className="section-pagination"
                initial={{opacity: 0,  y: 60}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, ease: "easeIn"}}
            >

                <div className="paginer">
                {project?.prev && <a href={`/projets/${prev}`} className="first-link">
                    {project?.prev && <span>projet précédent</span>}
                        <h3>{project?.prev}</h3>
                    </a>}

                    {project?.next && <a href = {`/projets/${next}`} className="second-link">
                    {project?.next && <span>projet suivant</span>}
                        <h3>{project?.next}</h3>
                    </a>}
                    
                </div>


            </motion.div>

            <footer className="section-footer">
                Intégration et developpement par <a href="/">Henry</a>
            </footer>


            

        </main>
    )
}

export default SingleProject