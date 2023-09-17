import React, { useEffect, useState } from "react";
import styled from "styled-components";
import devJunction from "../../images/projects/devCapture.PNG";
import devMobJunction from "../../images/projects/devMobCapture.PNG";
import govtNotify from "../../images/projects/govtCapture.PNG";
import govtMobNotify from "../../images/projects/govtMobileCapture.PNG";
import electroKart from "../../images/projects/electro.PNG";
import electroMobKart from "../../images/projects/electroMob.PNG";

const Projects = ({ project }) => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', windowResize);
    return window.addEventListener('resize', windowResize);
  }, []);

  return (
    <ProjectWrap load={project}>
      <h1>Projects</h1>
      <div className="projects">

        <div className="project">
          <div className="project_img">
            <img src={width > 500 ? govtNotify : govtMobNotify} alt="devJunction" />
          </div>
          <div className="project_detail">
            <div className="project_detail_top">
              <h2 className="project_detail_top_heading">Govt Notify</h2>
              <p>
                It is a website where the customer gets information about upcoming exams and get notification about them. They also get a notification for answer key, admit card and others.
              </p>
              <div className="project_detail_top_skill">
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Mongo DB</p>
              </div>
            </div>
            <div className="project_detail_bottom">
              <a href="http://govtnotify.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="siteBtn btn">View Site</button></a>
              {/* <a href="https://github.com/pawan123e/govJob" target="_blank" rel="noopener noreferrer"><button className="codeBtn btn">View Code</button></a> */}
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project_img">
            <img src={width > 500 ? electroKart : electroMobKart} alt="devJunction" />
          </div>
          <div className="project_detail">
            <div className="project_detail_top">
              <h2 className="project_detail_top_heading">Electro kart</h2>
              <p>
                An e-commerce site for electronics devices. A customer can buy products after login to their account. Payment stripe is used for payments. Authentication is also enabled.
              </p>
              <div className="project_detail_top_skill">
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Mongo DB</p>
              </div>
            </div>
            <div className="project_detail_bottom">
              <a href="http://electrokart.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="siteBtn btn">View Site</button></a>
              <a href="https://github.com/pawan123e/Electro-commerce" target="_blank" rel="noopener noreferrer"><button className="codeBtn btn">View Code</button></a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project_img">
            <img src={width > 500 ? devJunction : devMobJunction} alt="devJunction" />
          </div>
          <div className="project_detail">
            <div className="project_detail_top">
              <h2 className="project_detail_top_heading">Dev Junction</h2>
              <p>
                A website where users can create a profile and view other's profiles. A user can create, delete, and view posts. A user can also comment on the post and like the posts.
              </p>
              <div className="project_detail_top_skill">
                <p>React</p>
                <p>Node</p>
                <p>Express</p>
                <p>Mongo DB</p>
              </div>
            </div>
            <div className="project_detail_bottom">
              <a href="https://dev-social-web-apps.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="siteBtn btn">View Site</button></a>
              <a href="https://github.com/pawan123e/dev" target="_blank" rel="noopener noreferrer"><button className="codeBtn btn">View Code</button></a>
            </div>
          </div>
        </div>
      </div>
    </ProjectWrap>
  );
};

export default Projects;

const ProjectWrap = styled.div`
  min-height: 100vh;
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
  .projects {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    .project {
      width: 100%;
      height: 300px;
      margin-bottom: 3rem;
      background: #353535;
      border-radius: 6px;
      display: grid;
      grid-template-columns: 3fr 2fr;
      align-items: center;
      &_img {
        width: 100%;
        height: 100%;
        // opacity: 0.8;
        img {
          width: 100%;
          height: 300px;
          cursor: pointer;
          transition: all 0.5s ease;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
      }
      &_detail {
        &_bottom {
          padding: 1rem;
          .btn {
            background: none;
            border: none;
            color: black;
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
            outline: none;
            cursor: pointer;
            transition: all 0.5s ease;
            border-radius: 3px;
          }
          .siteBtn {
            background: orange;
            margin-right: 1rem;
            border: 1px solid orange;
            color: black;
            &:hover {
              background: rgba(255, 165, 0, 0.7);
            }
          }
          .codeBtn {
            border: 1px solid white;
            color: #dfdfdf;
            &:hover {
              background: #252525;
              background: white;
              color: black;
            }
          }
        }
        &_top {
          padding: 1rem;
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
          &_heading {
            color: orange;
            margin: 0;
            // color: white;
          }
          p {
            color: #dfdfdf;
            line-height: 1.5rem;
          }
          &_skill {
            display: flex;
            // justify-content: space-between;
            p {
              color: #a0a0a0;
              margin: 0;
              margin-right: 0.8rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1110px) {
    // width: 90%;
    .projects {
      .project {
        height: auto;
        grid-template-columns: 1fr;
        &_img {
          width: 100%;
          height: auto;
         
          img {
            border-bottom-left-radius: 0;
            border-top-right-radius: 6px;
          }
        }
      }
    }
  }

  @media(max-width: 800px) {
    width: 90%;
    padding-top: 2rem;
    h1  {
      margin-bottom: 1.5rem;
    }
    .projects {
      margin-top: 0rem;
    }
  }


  @media (max-width: 350px) {
    .projects {
      .project {
        &_detail {
          &_bottom {
            .btn {
              padding: 0.4rem 1.3rem;
            }
            .siteBtn {
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
