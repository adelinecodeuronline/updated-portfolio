import React from 'react'
import CTA from './CTA'
import Social from './Social'
import Zoom from 'react-reveal/Zoom';
import './header.css'
import Logo from '../../assets/logo-webdesigner.svg'
import Deco from '../../assets/deco-header.svg'

const Header = () => {
    return(
        <header id="home">
            <div className="container header__container">
                 <img className="logo" src={Logo} alt="Webdesigner Bourgogne" />
                <h1 className="titre">Développeuse front end</h1>
                <h1 className="titre2"><span>&#38;</span> Webdesigner</h1>
                <h2 className="text-light">[ création de sites internet + applications ]</h2>
                <Zoom top>
                    <CTA /> 
                </Zoom>
                <img className="deco-header" src={Deco} alt="motifs décoratifs webdesign" />           
                <Social />
                <a href="#contact" className="scroll__down"><i class="bi bi-arrow-bar-down"></i></a>
            </div>
        </header>
    )
}

export default Header