import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterWrap><div className='icon'>
           <a href="https://github.com/pawanchaubey123" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x git"></i></a> 
           <a href='https://www.linkedin.com/in/pawan-kumar-53250192/' target = '_blank' rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x link"></i></a>
           <a href = 'https://codepen.io/pawanchaubey123' target = '_blank' rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
           </div>
           <p><span className='name'>PAWAN KUMAR</span> &copy; 2021. All right reserved</p>
           
        </FooterWrap>
    )
}

export default Footer

const FooterWrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 0 1rem;
p {
    text-align: center;
    color: whitesmoke;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    line-height: 1.5rem;
    .name {
        color: orange;
    }
}
.icon {
    margin: auto;
    
    .git, .link {
        margin-right: 3rem;
        
    }
    i {
        font-size: 1.5rem;
        color: #dfdfdf;
        cursor: pointer;
        transition: color 0.5s ease;
        &:hover {
            color: orange;
        }
    }
}

`
