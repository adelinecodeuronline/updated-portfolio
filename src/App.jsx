import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
    return(
        <>               
            <Header />
            <Nav />
            <Services />
            <Work />
            <About />
            <Experience />            
            <Contact />
            <Footer />             
        </>
    )
}

export default App