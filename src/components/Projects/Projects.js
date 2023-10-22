  import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import color_picure from "../../Assets/Projects/color_picure.jpeg"
import real_state from "../../Assets/Projects/real_state.jpeg"

import textutils from "../../Assets/Projects/textutils.png"
import cv_scaner from "../../Assets/Projects/cv_scaner.jpeg"
import tictac from "../../Assets/Projects/tictac.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="textUtils"
              description="TextUtilities is a React project that provides various text manipulation functions such as converting text to uppercase or lowercase, removing extra spaces, and replacing certain characters."
              ghLink="https://github.com/Shivam-fibo/TextUtils"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={real_state}
              isBlog={false}
              title="Real State"
              description="Real State is a React project that show a view of website for a Real State Company. Here i use yarn and vite"
              ghLink="https://github.com/Shivam-fibo/real-state"
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color_picure}
              isBlog={false}
              title="Color Picure Crome Extenstion"
              description="This project leverages the power of HTML, CSS, and JavaScript to revolutionize the way you select colors for your web development projects. With an intuitive interface and seamless integration, this extension enhances your coding experience by providing an efficient and visually appealing color selection tool."
              ghLink="https://github.com/Shivam-fibo/Color-picker-Extension"
            />
          </Col>

       
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cv_scaner}
              isBlog={false}
              title="CV Scanner"
              description="CV Scanner is  go-to tool for effortlessly analyzing and extracting information from resumes and CVs. This straightforward web application, built using HTML, CSS, and JavaScript, streamlines the process of reviewing job applicants' qualifications, saving you time and ensuring efficient recruitment."
              ghLink="https://github.com/Shivam-fibo/CV-Scanner"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="Developed a Tic Tac Toe Game while I was Learning HTML, CSS, JavaScript."
              ghLink="https://github.com/Shivam-fibo/tik-tok-toe"
           
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
