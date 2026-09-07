import React, { useEffect, useState } from "react"
import "./homepage.scss"
import  {motion, useScroll} from "framer-motion"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"
import {Scrollbar, Navigation, Pagination} from "swiper/modules"
import ProjectCard from "../../components/projectCard/ProjectCard"
import type { Project } from "../../utils/types"


const sliderVariant = {
    initial: {
        x:0
    }, 
    animate: {
        x: "-220%",

    }
}

const sliderVariant2 = {
    initial: {
        x:0
    },
    animate: {
        x: "300%",
    }
}

function Homepage () {

    const {scrollX, scrollY, scrollYProgress} = useScroll()
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
        <div className="homepage">

            
            <motion.div 
                className="hero"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
            >

                <motion.div className="slidingTextContainer" variants={sliderVariant} initial="initial" animate="animate" transition={{duration: 10, repeatType: "loop", repeat: Infinity}}>
                    Henry Euloge
                </motion.div>

                <motion.div className="slidingTextContainer2"  variants={sliderVariant2} initial="initial" animate="animate" transition={{duration: 10, repeatType: "loop", repeat: Infinity}} >
                    Developpeur Fullstack JavaScript &  PHP
                </motion.div>

                <motion.div 
                    className="hero-body" 
                    initial={{opacity: 0,  y:90}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, type: "tween"}}
                >
                    <div className="wrapper">  
                        <div className="hero-hello">
                            Salut, je suis
                        </div>
                        <div className="hero-name">Henry Euloge</div>
                        <div className="hero-job">Developpeur web FullStack JavaScript et PHP</div>
                    </div>
                </motion.div>

                
                <div className="hero-image" >
                    <img src="./images/portrait.png" alt="Ma photo" loading="eager" decoding="async"/>
                </div>

            </motion.div>

            <div 
                className="section-first"
            >

               <motion.div  
                    className="section-top-title"
                    initial={{opacity: 0,  y:90}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.9, ease: "easeIn"}}
                >
                    Mes compétences
                </motion.div>

               <motion.div 
                    className="section-title"
                    initial={{opacity: 0,  y:90}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.9, ease: "easeIn"}}
                >
                    Services
                </motion.div>


               <motion.div 
                    className="services" 
                    
                >

                    <motion.div 
                        className="service"
                        initial={{opacity: 0,  y:30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "circInOut"}}
                        viewport={{once: true}}
                    >

                        <div className="service-images">
                            <img src="./images/symfony.png" loading="lazy" alt="Logo Symfony" className="service-image" />
                            <img src="./images/laravel.png" alt="Logo Laravel" className="service-image" />
                        </div>
                        
                        <div className="service-title">Backend Symfony ou Laravel</div>
                        <p>Je maitrise parfaitement PHP et ses différents framewoks les plus populaires. </p>
                    </motion.div>

                    <motion.div 
                        className="service"
                        initial={{opacity: 0,  y:60}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "circInOut"}}
                        viewport={{once: true}}
                    >
                        <div className="service-images">
                            <img src="./images/vue.png" alt="Logo VueJS"  loading="lazy" className="service-image" />
                            <img src="./images/react.png" alt="Logo ReactJS"  loading="lazy" className="service-image" />
                        </div>
                        <div className="service-title">Frontend VuJS ou React</div>
                        <p>Je conçois des applications dynamiques, scalables et responsives avec une expérience uitilisateur immersive.</p>
                    </motion.div>

                    <motion.div 
                        className="service"
                        initial={{opacity: 0,  y: 90}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "circInOut"}}
                        viewport={{once: true}}
                    >
                        <div className="service-images">
                            <img src="./images/wordpress.png" loading="lazy" alt="Logo Symfony" className="service-image" />
                        </div>
                        <div className="service-title">Developpement Wordpress</div>
                        <p> Vous recherchez une personne pour développer un thème ou un plugin sur mesure ?
                        Je maitrise les outils ACF, Bedrock, Timber, Themosis.</p>
                    </motion.div>

               </motion.div>

            </div>



            <div className="section-two">
                
                <motion.div  
                    className="section-top-title"
                    initial={{opacity: 0,  y:90}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.9, ease: "easeIn"}} 
                >
                    Mes clients
                </motion.div>

                <motion.div  
                    className="section-title"
                    initial={{opacity: 0,  y:90}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.9, ease: "easeIn"}}
                >
                    Projets
                </motion.div>

                <motion.div 
                    className="projects"
                    initial={{opacity: 0,  y: 90}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.9, ease: "easeIn"}}
                >

                    <Swiper 
                        className="projects-container" 
                        modules={[Scrollbar, Navigation, Pagination]} 
                        scrollbar={{hide: false}} 
                        spaceBetween={20} 
                        centeredSlides={false}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 1.8
                            },
                            1024: {
                                slidesPerView: 2.3
                            },
                            1400: {
                                slidesPerView: 2.5
                            }
                        }}
                    >
                            
                        {projects?.map((project) => {

                            return (
                                <SwiperSlide key={project.id} >
                                    <ProjectCard 
                                        project={project}
                                        key={project.id}
                                    />
                                </SwiperSlide>

                            )
                        })}


                    </Swiper>

                </motion.div>


            </div>

            <div className="section-three">
                
                <motion.div   
                    className="section-top-title"
                    initial={{opacity: 0,  y: 90}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.9, ease: "easeIn"}}

                >
                    réseaux sociaux
                </motion.div>

                <motion.div  
                    className="section-title"
                    initial={{opacity: 0,  y: 90}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.9, ease: "easeIn"}}
                >
                    Me retrouver
                </motion.div>

                <motion.div 
                    className="social-links" 
                    initial={{opacity: 0,  y: 90}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.9, ease: "easeIn"}}
                >

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

export default Homepage