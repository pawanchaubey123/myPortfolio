import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import logo from '../../images/logo/newLogo.png'

const Navbar = ({scrollingTo}) => {

  const [ham, setHam] = useState(false);
  const [navbarBg, setNavbarBg] = useState('transparent');
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
    const resizeWindow = () => {
      setWidth(window.innerWidth)
    }
   
    window.addEventListener('resize', resizeWindow);
    return () => window.addEventListener('resize', resizeWindow);
  },[width])

  useEffect(() => {
    const sideNavbar = document.querySelector('.side_navbar');
    let firstHam = document.querySelector('.navbar_nav_mobile_ham_first');
    let secondHam = document.querySelector('.navbar_nav_mobile_ham_second');
    let thirdHam = document.querySelector('.navbar_nav_mobile_ham_third');
    let hamburger = document.querySelector('.navbar_nav_mobile_ham');
    let navbar = document.querySelector('.navbar');
    if(width <= 700) {
      if(ham) {
        firstHam.style.margin = '0';
        secondHam.style.opacity = '0';
        navbar.style.paddingRight = '20px';
        secondHam.style.margin = '0 0 0 6px'
        thirdHam.style.width = '30px';
        firstHam.style.width = '30px';
        thirdHam.style.marginLeft = '0px'
        thirdHam.style.marginTop = '-4px';
        thirdHam.style.transform = 'rotate(90deg)'
        document.body.style.overflow = 'hidden'
    
        setTimeout(() => {
            hamburger.style.transform = 'rotate(135deg)';
        },50)
    
        sideNavbar.style.transform = 'translate(0,0)';
      } else {
        firstHam.style.marginBottom = '4px';
        firstHam.style.transform = 'rotate(0deg)';
        firstHam.style.width = '36px'
        secondHam.style.display = 'block';
        secondHam.style.opacity = '1'
        secondHam.style.margin = '4px 0 4px 6px'
        thirdHam.style.transform = 'rotate(0deg)';
        thirdHam.style.width = '24px';
        thirdHam.style.marginLeft = '12px'
        thirdHam.style.marginTop = '4px';
        sideNavbar.style.transform = 'translate(75vw,0)';
        document.body.style.overflow = 'auto'
        navbar.style.padding = '0 25px';
        hamburger.style.transform = 'rotate(0deg)';
      }
    } else {
        navbar.style.padding = '0 50px';
    }
  },[ham, width])

  useEffect(() => {
  const closeHam = e => {
      if(ham) {
          if(e.clientX < window.innerWidth * .25) {
            setHam(false);
          }
      }
  }
   window.addEventListener('click', closeHam);
   return window.addEventListener('click', closeHam);
  }, [ham])

  useEffect(() => {
    const scrollingPage = e => {
      if(window.pageYOffset > 25) {
          setNavbarBg('#252525');
      } else {
          setNavbarBg('transparent');
      }
    }
    window.addEventListener('scroll', scrollingPage);
    return window.addEventListener('scroll', scrollingPage)
  },[])

  const scrollTo = (link) => {
      scrollingTo(link);
      setHam(false);
  }

  return (
    <NavbarWrap ham = {ham} background = {navbarBg}>
    <nav className="navbar">
      <div className='navbar_logo'>
         <img src = {logo} alt = 'logo'/>
      </div>
      <div className='navbar_nav'>
        <div className='navbar_nav_mobile' onClick = {() => setHam(!ham)}>
        <div className="navbar_nav_mobile_ham" >
          <div className="navbar_nav_mobile_ham_first line"></div>
          <div className="navbar_nav_mobile_ham_second line"></div>
          <div className="navbar_nav_mobile_ham_third line"></div>
        </div>
        </div>
      <div className="navbar_nav_links">
        <p onClick = {() => scrollingTo('home')}> HOME </p>
        <p onClick = {() => scrollingTo('about')}> ABOUT </p>
        <p onClick = {() => scrollingTo('skills')}> SKILLS </p>
        <p onClick = {() => scrollingTo('projects')}> PROJECTS </p>
        <a href = 'https://drive.google.com/file/d/1eEC6w9peIgnxAdOsLHPAZGiFPXk5nyft/view?usp=sharing' className='link' target='_blank' rel="nofollow noopener noreferrer">
          <p>RESUME</p>
        </a>
      </div>  
      </div>
    </nav>
    {/* {ham &&  */}
    <aside className='side_navbar'>
        <div className='side_navbar_links'>
        <p onClick = {() => scrollTo('home')}> HOME </p>
        <p onClick = {() => scrollTo('about')}> ABOUT </p>
        <p onClick = {() => scrollTo('skills')}> SKILLS </p>
        <p onClick = {() => scrollTo('projects')}> PROJECTS </p>
        <a href = 'https://drive.google.com/file/d/1eEC6w9peIgnxAdOsLHPAZGiFPXk5nyft/view?usp=sharing' className='link' target='_blank' rel="nofollow noopener noreferrer">
          <p>RESUME</p>
        </a>
        </div>
    </aside>
    {/* } */}
    </NavbarWrap>
  );
};

export default Navbar;

const NavbarWrap = styled.div`
  height: 10vh;
  height: 60px;
  position: fixed;
  width: 100%;
  margin: auto;
  z-index: 12;
  background: ${props => props.background};
  top: 0;
  left: 0;
  transition: background 0.15s ease;
  box-shadow: ${props => props.background === 'transparent' ? 'none' : 'rgba(2, 12, 27, 0.7) 0px 10px 30px -10px'};
  .navbar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 50px;
      height: 100%;
      &_logo {
          height: 42px;
          width: 42px;
          img {
              width: 100%;
              height: 100%;
          }
      }
      &_nav {
          width: 50%;
          margin-left: auto;
          &_mobile {
            display: none;
          }
          &_links {
              display: flex;
              justify-content: space-between;
              .current {
                  color: orange;
              }
              .link {
                  text-decoration: none;
                  display: flex;
                  align-items: center;
                  p {
                  margin: 0;
                  padding: 0.5rem 1rem;
                  background: orange;
                  border-radius: 25px;
                  color: black;
                  &:hover {
                    color: black;
                    background: rgba(255,165,0,0.7);
                  }
                  }
              }
              p {
                  transition: color 0.2s ease;
                  cursor: pointer;
                  color: white;
                  font-weight: 700;
                  &:hover {
                      color: orange;
                  }
              }
          }
      }
  }

  .side_navbar{
      display: none;
  }

  @media (max-width: 1200px) {
      .navbar {
          &_nav {
              width: 70%;
          }
      }
  }

  @media (max-width: 900px) {
    .navbar {
        &_nav {
            width: 80%;
        }
    }
}

@media (max-width: 700px) {
   .navbar {
       padding: 0 25px;
       &_nav {
           position: relative;
           &_mobile {
               padding: 1rem;
               display: block;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0, -50%);
                z-index: 13;
                padding-right: 0;
               &_ham {
                width: 100%;
                transition: all .15s ease;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                   &_first, &_second, &_third {
                       height: 2px;
                       background: orange;
                       margin: 4px 0;
                       text-align: right;
                       transition: all .15s ease;
                   }
                   &_first {
                       width: 36px;
                   }
                   &_second {
                    width: 30px;
                    margin-left: 6px;
                }
                &_third {
                    width: 24px;
                    margin-left: 12px;
                    margin-bottom: 0;
                }
               }}
           &_links {
               display: none;
           }

       }
   }
   .side_navbar {
    // display: block;
    position: absolute;
    top: 0;
    right: 0;
    background: #353535;
    width: 75vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(75vw, 0);
    transition: all 0.15s ease;
    &_links {
        height: 50%;
        margin: auto;
        display: flex;
        flex-direction: column;
        // align-items: space-between;
        justify-content: space-between;
        align-items: center;
        p {
            color: white;
            cursor: pointer;
        }
        .link {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          p {
          margin: 0;
          padding: 0.5rem 1rem;
          background: orange;
          border-radius: 25px;
          color: black;
          margin-top: 1rem;
          }
    }
   }
}
`

