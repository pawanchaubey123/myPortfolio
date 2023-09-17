import React, {useState} from "react";
import styled from "styled-components";
import codingPic from "../../images/main/coding.jpg";

const LandingPage = ({scrollingTo}) => {

  const [load, setLoad] = useState(false);

  window.onload = function () { 
   setLoad(true) 
  }

  return (
    <LandingWrap backImg={codingPic} load = {load}>
      <div className='content'>
      <h1>
        Hello I'm  <a href="https://github.com/pawanchaubey123" target="_blank" rel="noopener noreferrer"><span className="name">Pawan Kumar.</span></a>
      </h1>
      <h1>I'm a full-stack developer.</h1>
      <button onClick = {() => scrollingTo('projects')}>Go to Projects</button>
      </div>
    </LandingWrap>
  );
};

export default LandingPage;

const LandingWrap = styled.div`
  height: 100vh;
  background: url(${props => props.backImg}) no-repeat center center/cover;
  background-attachment: fixed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .content {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: ${props => props.load ? '1' : '0'};
          transform: translate(0, ${props => props.load ? '0' : '20px'});
          transition: all 1s ease;
      a {
        text-decoration: none;
      }
      h1{
          color: white;
          text-align: center;
          font-size: 2.5rem;
          line-height: 2.5rem;
          font-weight: 700;
          margin: 0.5rem;
      }
      .name {
          color: red;
          color: orange;
          cursor: pointer;
          text-decoration: none;
      }
      button {
          padding: 0.8rem 2rem;
          background: none;
          font-size: 1.3rem;
          color: white;
          border: none;
          outline: none;
          cursor: pointer;
          transition: all .5s ease;
          border: 2px solid white;
          margin-top: 1rem;
          &:hover {
            background: rgba(255,165,0,1);
            border: 2px solid orange;
          }
      }
  }
  &::after {
    content: "";
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
@media (max-width: 600px) {
  background-attachment: scroll;
 .content {
     h1 {
         font-size: 2rem;
         line-height: 2rem;
     }
 }
}

@media (max-width: 400px) {
    .content {
        h1 {
            font-size: 1.7rem;
        }
    }
}
`;
