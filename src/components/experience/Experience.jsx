import React from 'react'
import Slide from 'react-reveal/Slide';
import './experience.css'
import Deco from '../../assets/deco-header.svg'

const Experience = () => {
    return(
        <section id="experience">
            <div className="container experience__container">
                <Slide top>
                    <div className="skills-component">
                        <div className="skills-container">
                            <div className="skills bar-1">
                                <div className="left-bar"><p>HTML / SASS - (S)CSS / JS</p></div>
                                <div className="right-bar green-bar"><p>PHP /SQL</p></div>
                            </div>

                            <div className="skills bar-2">
                                <div className="left-bar"><p>React</p></div>
                                <div className="right-bar green-bar"><p>Firebase</p></div>
                            </div>

                            <div className="skills bar-3">
                                <div className="left-bar orange-bar"><p>Node</p></div>
                                <div className="right-bar"><p>Design / UI / UX</p></div>
                            </div>

                            <div className="skills bar-4">
                                <div className="left-bar violet-bar"><p>Wordpress</p></div>
                                <div className="right-bar red-bar"><p>Vue</p></div>
                            </div>
                        </div>
                    </div>
                </Slide>
                <img className="deco-xp" src={Deco} alt="Décoration section expérience" />
            </div>
        </section>
    )
}

export default Experience