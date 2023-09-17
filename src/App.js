import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import LandingPage from './components/landing/LandingPage'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

function App() {

  const [skill, setSkill] = useState(false);
  const [about, setAbout] = useState(false);
  const [project, setProject] = useState(false);

  useEffect(() => {
   
    const scrollingItems = (el) => {
      console.log(window.scrollY)
      if(window.scrollY > 200) {
       setAbout(true);
      } 
      if(window.scrollY > 900) {
        setSkill(true);
      }
      if(window.scrollY > 1400) {
        setProject(true);
      }
  }

    window.addEventListener('scroll', scrollingItems);
    return () => window.addEventListener('scroll', scrollingItems);

  },[])

  const scrollingTo = (link) => {
       const page = document.querySelector(`.${link}`).offsetTop - 60;
       window.scroll({ top: page, behavior: "smooth" });
  }


  return (
    <div className="App">
      <div className='nav'><Navbar scrollingTo = {scrollingTo}/></div>
      <div className='home'><LandingPage scrollingTo = {scrollingTo}/></div>
      <div className='about'><About about = {about} /></div>
      <div className='skills'><Skills skill = {skill} /></div>
      <div className='projects'><Projects project = {project} /></div>
      <Footer/>
    </div>
  );
}

export default App;
