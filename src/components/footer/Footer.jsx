import React from 'react'
import CookieConsent from "react-cookie-consent";
import LogoFoot from '../../assets/logo-webdesigner.svg'
import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="container footer__container"> 
                <a href="#home"> <img className="logo-foot" src={LogoFoot} alt="Création de site internet en Bourgogne" /></a>
                <p>Fait par Adeline // Kemister <span>with React</span></p>
                <a className="mentions" href="mentions.html" target="_blank">Mentions légales et politique de confidentialité</a>
            </div>
            <CookieConsent
                location="top"
                buttonText="OK"
                cookieName="cookies"
                style={{ background: "#47e1b1", color:"#27204d", fontWeight:"600" }}
                buttonStyle={{ background: "#27204d", color: "white", fontSize: "13px" }}
                expires={150}
                >
                Ce site utilise des cookies 
                <a className="mentions" href="mentions.html" target="_blank"><span style={{ fontSize: "13px", color:"#27204d" }}> Voir De quoi il s'agit</span></a>               
            </CookieConsent>
        </footer>
    )
}

export default Footer