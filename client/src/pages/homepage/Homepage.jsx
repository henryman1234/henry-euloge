import React from "react"
import "./homepage.scss"
import image from "../../../public/images/HG1.png"
import  {motion} from "framer-motion"
import react from "../../../public/images/react.png"
import vue from "../../../public/images/vue.png"
import laravel from "../../../public/images/laravel.png"
import symfony from "../../../public/images/symfony.png"
import wordpress from "../../../public/images/wordpress.png"
import { SlideUp, SliderBottom, SliderLeft, SliderRight } from "../../utils/animation"
import maq3 from "../../../public/images/maq3.jpg"
import maq4 from "../../../public/images/maq4.jpg"
import maq5 from "../../../public/images/maq5.jpg"
import github from "../../../public/images/github.png"
import phone from "../../../public/images/phone.png"
import whatsapp from "../../../public/images/whatsapp.png"

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"
import {Scrollbar} from "swiper/modules"

const sliderVariant = {
    initial: {
        x:0
    }, 
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20
        }
    }
}

const sliderVariant2 = {
    initial: {
        x:0
    },
    animate: {
        x: "300%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration:20
        }
    }
}

function Homepage () {
    return (
        <div className="homepage">

            <div className="hero">

                <motion.div className="slidingTextContainer" variants={sliderVariant} initial="initial" animate="animate">
                    Henry Euloge
                </motion.div>

                <motion.div className="slidingTextContainer2" variants={sliderVariant2} initial="initial" animate="animate">
                    Developpeur JavaScript
                </motion.div>

                <motion.div className="hero-body" variants={SliderBottom(0.2)} initial="hidden" whileInView="visible">
                    <div className="wrapper">  
                        <div className="hero-hello">
                            Bonjour,je suis
                        </div>
                        <div className="hero-name">Henry Euloge</div>
                        <div className="hero-job">Developpeur web FullStack JavaScript</div>
                        </div>
                </motion.div>
                <motion.div className="hero-image" variants={SliderBottom(0.3)} initial="hidden" whileInView="visible">
                    <img src={image} alt="Ma photo" />
                </motion.div>

            </div>

            <div className="section-first">

               <motion.div variants={SliderLeft(0.1)}  initial="hidden"  whileInView="visible" className="section-top-title">Mes compétences</motion.div>

               <motion.div variants={SliderLeft(0.3)} initial="hidden" whileInView="visible" className="section-title">Services</motion.div>

               <motion.div className="services" variants={SliderBottom(0.002)} initial="hidden" whileInView="visible">

                <div className="service">

                    <div className="service-images">
                        <img src={symfony} alt="Logo Symfony" className="service-image" />
                        <img src={laravel} alt="Logo Symfony" className="service-image" />
                    </div>
                    
                    <div className="service-title">Backend Symfony ou Laravel</div>
                    <p>Je maitrise parfaitement PHP et ses différents framewoks les plus populaires. </p>
                </div>

                <div className="service">
                <div className="service-images">
                        <img src={vue} alt="Logo Symfony" className="service-image" />
                        <img src={react} alt="Logo Symfony" className="service-image" />
                    </div>
                    <div className="service-title">Frontend VuJS ou React</div>
                    <p>Je conçois des applications dynamiques, scalables et responsives avec une expérience uitilisateur immersive.</p>
                </div>

                <div className="service">
                <div className="service-images">
                        <img src={wordpress} alt="Logo Symfony" className="service-image" />
                    </div>
                    <div className="service-title">Developpement Wordpress</div>
                    <p> Vous recherchez une personne pour développer un thème ou un plugin sur mesure ?
                    Je maitrise les outils ACF, Bedrock, Timber, Themosis.</p>
                </div>

               </motion.div>

            </div>

            <div className="section-two">
                
                <motion.div variants={SliderLeft(0.1)}  initial="hidden"  className="section-top-title" whileInView="visible">Mes clients</motion.div>

                <motion.div variants={SliderLeft(0.3)} whileInView="visible" initial="hidden"  className="section-title">Projets</motion.div>

                <div className="projects">

                    <Swiper className="projects-container mySwiper" modules={[Scrollbar]} scrollbar={{hide: false}} spaceBetween={40} slidesPerView={1}>

                        <SwiperSlide className="project" initial>

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
                        </SwiperSlide>

                        <SwiperSlide className="project">

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
                        </SwiperSlide>

                        <SwiperSlide className="project">

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
                        </SwiperSlide>

                        <SwiperSlide className="project">

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
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="section-three">
                
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

export default Homepage