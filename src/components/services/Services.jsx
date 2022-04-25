import React from 'react'
import Slide from 'react-reveal/Slide';
import './services.css'

const Services = () => {
    return(
        <section id="services">
            <div className="container services__container">
                <div className="sec-title">
                    <div className="line-title"></div>
                    <h3>Domaines</h3>
                </div>

                <div className="services-sec">  
                    <Slide top>                
                        <div className="card-services">
                            <div className="line-card"></div>
                            <h1>Sites web 
                                <span> &#38; </span> 
                                applications</h1>
                            <p>Intégration de site vitrine, corporate, évènementiel, e-commerce, intranet. Application web et mobile.

                            Compatibles tous supports</p>                       
                        </div>
                    </Slide>  
                    <Slide top>
                        <div className="card-services green-car-services">                    
                            <div className="line-card blue-line-card"></div>
                            <h1>Design</h1>
                            <p>Etude selon un cahier des charges, conception visuelle de logo, charte graphique, réalisation de maquettes et templates.

                            Kits UI et atomic design</p>                        
                        </div>
                    </Slide> 
                </div>
            </div>
        </section>
    )
}

export default Services