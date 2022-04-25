import React from 'react'
import Bounce from 'react-reveal/Bounce';
import './about.css'
import DecoAbout from '../../assets/deco-about.svg'
import Profil from '../../assets/webdesigner-bourgogne.png'
import Eye from '../../assets/services-cta.svg'
import Bug from '../../assets/experience-cta.svg'

const About = () => {
    return(
        <section id="about">
            <div className="container about__container">
                <img className="deco-about" src={DecoAbout} alt="décoration section" />
                <div className="profil">
                    <img className="profil-img" src={Profil} alt="Développement de site web en Bourgogne" />
                    <Bounce>
                        <div className="card-about">
                            <h3>XP +</h3>
                            <p>Depuis 6 ans, <span>l’identité visuelle</span> est mon coeur de métier. Je crée des <span>sites internet</span> car c’est une solution efficace en terme de <span>communication</span>.</p>
                            <a href="#work"><img src={Eye} alt="Services de création de site internet en Bourgogne" /></a>
                        </div>
                    </Bounce>
                    <Bounce>
                        <div className="card-about">
                            <h3>Level up ^</h3>
                            <p>Ma passion pour les <span>nouvelles technologies</span> m’incite à me tenir informée. J’enrichis ainsi mes connaissances au sujet des outils et langages que j’utilise.</p>
                            <a href="#experience"><img src={Bug} alt="Expérience de développement React" /></a>
                        </div>
                    </Bounce>
                </div>
            </div>
        </section>
    )
}

export default About