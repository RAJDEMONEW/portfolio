import React from "react"
import Header from "./components/header/Header";

import About from "./components/about/About"
import Nav from "./components/nav/Nav"
import Experience from "./components/experience/Experience"
import Testimonial  from "./components/testimonial/Testimonial";
import Portfolio from "./components/portfolio/Portfolio"
import Service from "./components/services/Services"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Education from "./components/education/Education";
const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Education/>
            <Experience />
            <Service/>
            <Portfolio/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </>
    )

}
export default App