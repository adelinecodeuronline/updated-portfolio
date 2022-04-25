import React from 'react'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    const conditionActive = activeNav === '#' ? 'active' : '';
    const conditionAbout = activeNav === '#about' ? 'active' : '';
    const conditionExperience = activeNav === '#experience' ? 'active' : '';
    const conditionServices = activeNav === '#services' ? 'active' : '';
    const conditionWork = activeNav === '#work' ? 'active' : '';
    const conditionContact = activeNav === '#contact' ? 'active' : '';
    return(
        <nav>
            <a href="#home" onClick={() => setActiveNav('#')} className={`picto-nav ${conditionActive}`}><i class="bi bi-house"></i></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={`picto-nav ${conditionServices}`}><i class="bi bi-display"></i></a>
            <a href="#work" onClick={() => setActiveNav('#work')} className={`picto-nav ${conditionWork}`}><i class="bi bi-file-code"></i></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={`picto-nav ${conditionAbout}`}><i class="bi bi-person-circle"></i></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={`picto-nav ${conditionExperience}`}><i class="bi bi-award"></i></a>            
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={`picto-nav ${conditionContact}`}><i class="bi bi-chat-square-text"></i></a>
        </nav>
    )
}

export default Nav