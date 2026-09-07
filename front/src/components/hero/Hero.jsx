import React from "react";
import "./hero.scss"

function Hero () {
    return(
        <div className="hero">

            <motion.div className="slidingTextContainer" variants={sliderVariant} initial="initial" animate="animate">
                Henry Euloge
            </motion.div>

            <motion.div className="slidingTextContainer2" variants={sliderVariant2} initial="initial" animate="animate">
                Developpeur web
            </motion.div>

            <div className="hero-body">
                <div className="wrapper">  
                    <div className="hero-hello">
                        Bonjour, je suis
                    </div>
                    <div className="hero-name">Henry Euloge</div>
                    <div className="hero-job">Developpeur web FullStack JavaScript</div>
                    </div>
            </div>
            <div className="hero-image">
                <img src={image} alt="Ma photo" />
            </div>


         </div>
    )
}

export default Hero