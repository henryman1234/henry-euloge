import React from "react";
import "./contact.scss"
import whatsapp from "../../../public/images/whatsapp.png"
import phone from "../../../public/images/phone.png"
import github from "../../../public/images/github.png"

function Contact () {
    return (
        <div className="contact">
            
            <div className="contact-page">

                <div className="page-header">
                </div>

                <div className="section">

                    <div className="contact-card">

                        <div className="section-top-title">obtenir un devis</div>
                        <div className="section-title">Me contacter</div>
                        <p>Merci de donner un maximum de détail sur le projet afin que je puisse évaluer correctement la charge de travail que représente votre projet. Cela permettra aussi d'avoir un premier chiffrage au plus proche du devis final.</p>

                        <form action="/contact" className="contact-form">

                            <div className="first-div" >
                                <input type="text" name="name" placeholder="Nom & prénom" required />
                                <input type="text" name="email" placeholder="Email" minLength={8} required />
                            </div>

                            <textarea name="description" placeholder="Description du projet" required minLength={20}></textarea>

                            <div className="second-div">
                                <button type="submit" className="btn">Obtenir un devis</button>
                            </div>
                        </form>


                    </div>
                </div>

                <div className="section-faq">

                    <div className="faq-side">
                        <div className="section-top-title">FAQ</div>
                        <div className="section-title">Les questions fréquentes</div>
                    </div>

                    <div className="faq-body">
                        <div className="faq-question">
                            <h3>Quelles sont vos disponibilités ?</h3>
                            <p>Je suis actuellement disponible</p>
                        </div>

                        <div className="faq-question">
                            <h3>Quels sont vos tarifs ?</h3>
                            <p className="price">La tarification dépend du projet et surtout du temps qui sera nécessaire pour le mener à bien. À titre indicatif mon tarif pour le plus petit projet se situe aux alentours de <span>80.000 XAF</span>.</p>
                        </div>

                        <div className="faq-question">
                            <h3>Effectuez-vous des missions en Agence ?</h3>
                            <p>J'effectue l'ensemble de mes missions à distance.</p>
                        </div>

                        <div className="faq-question">
                            <h3>Faites-vous la partie design des projets ?</h3>
                            <p>Je ne suis malheureusement pas en capacité d'effectuer le design d'une application aussi il sera nécessaire de fournir le design si la mission le nécessite. </p>
                        </div>

                    </div>
                </div>

                <div className="section-social">

                    <div className="section-top-title">réseaux sociaux</div>
                    <div className="section-title">Me retrouver</div>
    
                    <div className="social-links">
    
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
    
                    </div>

                </div>

                <div className="section-footer">
                    Intégration et developpement par <a href="/">Henry</a>
                </div>


            </div>


        </div>
    )
}

export default Contact