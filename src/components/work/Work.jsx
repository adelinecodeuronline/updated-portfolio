import React from 'react'
import Fade from 'react-reveal/Fade';
import './work.css'
import DecoWork from '../../assets/deco-about.svg'
import Work1 from '../../assets/acs-mobile.png'
import Work2 from '../../assets/azuream.png'
import Work3 from '../../assets/stellar.png'

const Work = () => {
    return(
        <section id="work">
             <div className="container work__container">                 
                    <img className="deco-work" src={DecoWork} alt="décoration section" />
                    <div className="sec-title-work">                
                        <div className="line-title-work"></div>
                        <h3>Travail [Coming Soon]</h3>  
                        <a className="link-book" href="https://adelineb.promo-91.codeur.online/">► Ancien Book</a>            
                    </div>
                    <Fade>
                        <div className="inside">
                            <article className="portfolio__item">{/*Un item*/}
                                <div className="container-item">
                                    <div className="portfolio__item-image">
                                        <img className="thumbnail" src={Work1} alt="Application mobile de musique"/>
                                    </div>
                                    <h3>Application Musique</h3>
                                </div>                            
                                <a href="https://github.com/adelinecodeuronline/ACS-Music" className="btn btn-primary btn-work" >Voir le projet</a>
                            </article>{/*Fin item*/}

                            <article className="portfolio__item">
                                <div className="container-item">
                                    <div className="portfolio__item-image">                               
                                        <img className="thumbnail" src={Work2} alt="Template page web tourisme spatial"/>
                                    </div>
                                    <h3>Template de site internet</h3>
                                </div>
                                <a href="https://github.com/adelinecodeuronline/azuream" className="btn btn-work" >Voir le projet</a>                           
                            </article>

                            <article className="portfolio__item">
                                <div className="container-item">
                                    <div className="portfolio__item-image">
                                        <img className="thumbnail" src={Work3} alt="Site web API films"/>
                                    </div>
                                    <h3>Application web</h3>
                                </div>
                                <a href="https://adelineb.promo-91.codeur.online/Stellar" className="btn btn-work" >Voir le projet</a>                            
                            </article>
                        </div>
                    </Fade>
             </div>
        </section>
    )
}

export default Work