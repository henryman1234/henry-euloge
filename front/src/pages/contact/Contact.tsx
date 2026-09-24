import React, { useRef, useState } from "react";
import "./contact.scss"
import {motion} from "framer-motion"
import { SlideUp, SliderLeft, SliderRight } from "../../utils/animation";
import { toast } from "sonner";

function Contact () {

    const [isSending, setIsSending] = useState(false)
    const apiUrl = import.meta.env.VITE_API_URL
    const formRef = useRef<HTMLFormElement |  null> (null);


    const  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const name = String(formData.get("name")).trim();
        const email = String(formData.get("email")).trim();
        const content = String(formData.get("content")).trim();

        try {
            const res = await fetch(`${apiUrl}/emails`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({name, email, content})
            })

            if (res.ok) {
                const data = await res.json()
                toast.success("Email envoyé avec succès")
                formRef.current?.reset()
            }


        } catch (err) {
            console.error("Une érreur est survenue: ", err);
        }
    }


    return (
        <div className="contact">
            
            <div className="contact-page">

                <div className="page-header">
                </div>

                <motion.div 
                    className="section" 
                    initial={{opacity: 0,  y: 60}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, ease: "easeIn"}}
                >

                    <div className="contact-card">

                        <motion.div  className="section-top-title">obtenir un devis</motion.div>
                        <motion.div  className="section-title">Me contacter</motion.div>

                        <motion.p  >Merci de donner un maximum de détail sur le projet afin que je puisse évaluer correctement la charge de travail que représente votre projet. Cela permettra aussi d'avoir un premier chiffrage au plus proche du devis final.</motion.p>

                        <motion.form ref={formRef} onSubmit={handleSubmit}  className="contact-form">

                            <div className="first-div" >
                                <input type="text" name="name" placeholder="Nom " required />
                                <input type="text" name="email" placeholder="Email" minLength={8} required />
                            </div>

                            <textarea name="content" placeholder="Description du projet" required minLength={20}></textarea>

                            <div className="second-div">
                                <button type="submit" className="btn">Obtenir un devis</button>
                            </div>
                            
                        </motion.form>


                    </div>
                </motion.div>

                <div className="section-faq">

                    <div className="faq-side">
                        <motion.div   
                            className="section-top-title"
                            initial={{opacity: 0,  y: 60}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, ease: "easeIn"}}
                        >
                            FAQ
                        </motion.div>

                        <motion.div  
                            className="section-title"
                            initial={{opacity: 0,  y: 60}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, ease: "easeIn"}}
                        >
                            Les Questions fréquentes
                        </motion.div>

                    </div>

                    <motion.div 
                        className="faq-body"
                        initial={{opacity: 0,  y: 60}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, ease: "easeIn"}} 
                    >

                        <div className="faq-question">
                            <h3>Quelles sont vos disponibilités ?</h3>
                            <p>Je suis actuellement disponible</p>
                        </div>

                        <div className="faq-question">
                            <h3>Quels sont vos tarifs ?</h3>
                            <p className="price">La tarification dépend du projet et surtout du temps qui sera nécessaire pour le mener à bien. À titre indicatif mon tarif pour le plus petit projet se situe aux alentours de <span>100.000 XAF</span>.</p>
                        </div>

                        <div className="faq-question">
                            <h3>Effectuez-vous des missions en Agence ?</h3>
                            <p>J'effectue l'ensemble de mes missions à distance.</p>
                        </div>

                        <div className="faq-question">
                            <h3>Faites-vous la partie design des projets ?</h3>
                            <p>Je ne suis malheureusement pas en capacité d'effectuer le design d'une application aussi il sera nécessaire de fournir le design si la mission le nécessite. </p>
                        </div>

                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div 
                    className="section-social"
                    initial={{opacity: 0,  y: 60}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, ease: "easeIn"}}
                >

                    <motion.div   className="section-top-title">réseaux sociaux</motion.div>
                    
                    <motion.div   className="section-title">Me retrouver</motion.div>
    
                    <motion.div className="social-links"  >
    
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

                </motion.div>

                <div className="section-footer">
                    Intégration et developpement par <a href="/">Henry</a>
                </div>


            </div>


        </div>
    )
}

export default Contact