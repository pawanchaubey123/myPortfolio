import React from "react";
import styled from "styled-components";
import profile from "../../images/photo/profile.jpg";

const About = ({ about }) => {

  const dots = Array(15).fill('dot')

  return (
    <AboutWrap load={about}>
      <div className="left">
        <h1>About Me</h1>
        <p style={{ marginTop: "0" }}>I'm a Full Stack Developer with 3 years of experience.</p>

        <p>
          I specialize in developing interactive and visually appealing web applications, providing comprehensive software solutions.
        </p>

        <p>
        My goal is to ensure a superior customer experience while consistently delivering projects on time.
        </p>

        <p>I make websites that are :</p>
        <ul>
          <div className="quality">
            <li>Fast.</li>
            <li>Responsive.</li>
            <li>Dynamic.</li>
          </div>
          <div className="other_quality">
            <li>Easy to use.</li>
            <li>Interactive.</li>
            <li>Scalable.</li>
          </div>
        </ul>
      </div>
      <div className="right">
        <img src={profile} alt="profilePic" />
        <div className="dots">
          {dots.map(() => <div className="dot"> </div>)}
        </div>
      </div>
    </AboutWrap>
  );
};

export default About;

const AboutWrap = styled.div`
  // display: grid;
  width: 70%;
  margin: auto;
  padding: 0;
  padding-top: 4rem;
  max-width: 1000px;
  position: relative;
  opacity: ${props => (props.load ? "1" : "0")};
  transform: translate(0, ${props => (props.load ? "0" : "20px")});
  transition: all 2s ease;
  .left {
    color: #dfdfdf;
    width: 66%;
    h1 {
      margin: 0;
      color: orange;
      margin-bottom: 3rem;
    }
    p {
      font-size: 1.3rem;
      font-weight: 300;
      line-height: 1.8rem;
    }
    // margin-right: 2rem;
    ul {
      padding: 0;
      margin: 0;
      margin-left: 1rem;
      display: flex;
      .quality {
        margin-right: 4rem;
      }
      .quality,
      .other_quality {
        li {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          width: 100%;
        }
      }
    }
  }
  .right {
    width: 30%;
    margin-left: auto;
    margin-right: 0;
    position: absolute;
    top: 33%;
    left: 70%;
    transform: translate(0, -50%);
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      border-radius: 2px;
      z-index: 5;
    }

    ::before {
      content: "";
      height: 100%;
      height: 250px;
      width: 100%;
      position: absolute;
      top: -20px;
      left: -20px;
      border: 2px solid white;
      z-index: 1;
    }

    .dots {
      position: absolute;
      right: -50px;
      bottom: -270px;
      transform: translate(0, 50%);
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 0.8rem;
      z-index: 6;
      .dot {
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background: white;
      }
    }
  }

  @media (max-width: 1200px) {
    .right {
      ::before {
        display: none;
      }
      .dots {
        display: none;
      }
    }
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    padding: 0;
    padding-top: 2rem;
    .left {
      width: 100%;
      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      h1 {
        margin-bottom: 1rem;
        // text-align: center;
      }
      ul {
        .quality,
        .other_quality {
          li {
            font-size: 1rem;
          }
        }
        .quality {
          margin-right: 4rem;
        }
      }
    }
    .right {
      position: static;
      transform: translate(0, 0);
      margin: auto;
      margin-top: 2rem;
      img {
        position: static;
      }
    }
  }

  @media (max-width: 480px) {
    .right {
      width: 70%;
    }
  }
`;
