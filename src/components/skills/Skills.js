import React from "react";
import styled from "styled-components";
import html from "../../images/skill logos/html5.png";
import css from "../../images/skill logos/css3.png";
import javascript from "../../images/skill logos/javascript.png";
import react from "../../images/skill logos/react.png";
import sass from "../../images/skill logos/sass.png";
import node from "../../images/skill logos/nodejs.png";
import express from "../../images/skill logos/express.png";
import mongo from "../../images/skill logos/mongodb.png";
import postgre from "../../images/skill logos/postgresql.png";
import nextjs from '../../images/skill logos/nextjs.png'
import graphql from '../../images/skill logos/graphql.png'
import typescript from '../../images/skill logos/typescript.png'

const Skills = ({skill}) => {
  return (
    <SkillWrap load = {skill}>
      <h1>Skills</h1>
      <div className="main">
        <div className="frontEnd">
          <h3>Front End Technologies</h3>
          <div className="skills">
            <div className="skill html">
              <img src={html} alt="html" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src={javascript} alt="javascript" />
              <p>Javascript</p>
            </div>
            <div className="skill css">
              <img src={css} alt="css" />
              <p>CSS</p>
            </div>
            
            <div className="skill sass">
              <img src={sass} alt="sass" />
              <p>SASS</p>
            </div>
            <div className="skill react">
              <img src={react} alt="react" />
              <p>React</p>
            </div>
            <div className="skill next">
              <img src={nextjs} alt="react" />
              <p>Next js</p>
            </div>
          </div>
        </div>
        <div className="backEnd">
          <h3>Back End Technologies</h3>
          <div className="skills">
          <div className="skill node">
              <img src={node} alt="node" />
              <p>Node.js</p>
            </div>
            
            <div className="skill postgre">
              <img src={postgre} alt="postgre" />
              <p>PostgreSQL</p>
            </div>
            <div className="skill mongo">
              <img src={mongo} alt="mongo" />
              <p>Mongo DB</p>
            </div>
            <div className="skill express">
              <img src={express} alt="express" />
              <p>Express</p>
            </div>
            <div className="skill express">
              <img src={typescript} alt="express" />
              <p>TypeScript</p>
            </div>
            <div className="skill express">
              <img src={graphql} alt="express" />
              <p>GraphQL</p>
            </div>
           
          </div>
        </div>
      </div>
    </SkillWrap>
  );
};

export default Skills;
const SkillWrap = styled.div`
  // min-height: 100vh;
  width: 70%;
  margin: auto;
  padding-top: 4rem;
  max-width: 1000px;
  opacity: ${props => (props.load ? "1" : "0")};
  transform: translate(0, ${props => (props.load ? "0" : "20px")});
  transition: all 2s ease;
  h1 {
    color: orange;
    margin: 0;
    margin-bottom: 3rem;
  }
  .main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;
    margin-top: 2rem;
    justify-content: space-between;
    width: 100%;
    color: white;
    color: #dfdfdf;
    .frontEnd,
    .backEnd {
      // height: 350px;
      background: #353535;
      border-radius: 6px;
      padding: 1.5rem 2rem;
      h3 {
        color: orange;
        text-align: center;
        font-size: 22px;
        margin: 0;
        margin-bottom: 3rem;
        word-spacing: 0.3rem;
        letter-spacing: 0.5px;
      }
      .skills {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        grid-row-gap: 3.2rem;
        align-items: center;
        // height: 80%;
        width: 100%;
        .next img{
          background: white;
          padding: .5rem;
        }
        .skill {
          // justify-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            height: 40px;
            width: auto;
          }
        }
      }
    }
  }

  @media(max-width: 1100px) {
    .main {
      .frontEnd, .backEnd {
        padding: 1.5rem;
      }
    }
  }

  @media (max-width: 800px) {
    width: 90%;
    padding-top: 2rem;
    h1 {
      margin-bottom: 1.5rem;
    }
    .main {
      margin-top: 0;
      .frontEnd, .backEnd {
        // padding: 0 1rem;
        .skills {
          .skill {
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;
