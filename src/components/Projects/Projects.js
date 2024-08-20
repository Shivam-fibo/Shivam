  import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import real_state from "../../Assets/Projects/real_state.jpeg"
import textutils from "../../Assets/Projects/textutils.png"



import codeedtion from "../../Assets/Projects/codeeditor.png"
import file_sharing from  "../../Assets/Projects/file_sharing.png"
import  jobApplication from "../../Assets/Projects/jobApplication.png"
import logomaker from "../../Assets/Projects/logomaker.png"
import music from "../../Assets/Projects/music_player.png"
import quiz from "../../Assets/Projects/quiz.png"
import typing from "../../Assets/Projects/typing.png"


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
              imgPath={file_sharing}
              isBlog={false}
              title="File Sharing Application"
              description="This application offers a seamless way for users to upload, share, and manage various types of files, such as documents, images, and videos. Users can quickly upload files from their device and share them with others via a secure link. "
              ghLink="https://github.com/Shivam-fibo/ShareLink-"
            
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobApplication}
              isBlog={false}
              title="Job Application Portal"
              description="Developed a MERN stack job portal that enables job seekers to search and apply for jobs, featuring resume upload functionality, with admin capabilities for comprehensive CRUD operations on job postings and user management for both applicants and providers, while also designing secure user authentication systems, including login and logout processes."
              ghLink="https://github.com/Shivam-fibo/Jobify"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logomaker}
              isBlog={false}
              title="Logo Maker"
              description="Developed a logo maker application with customization features for icon colors and backgrounds to enhance user creativity, implemented localStorage for persisting user-generated logos across sessions, and utilized React Context API for efficient state management and smooth data flow throughout the application."
              ghLink="https://github.com/Shivam-fibo/LogoCraft"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeedtion}
              isBlog={false}
              title="Code Editor"
              description="This project involves the development of a fully functional, browser-based code editor that supports multiple programming languages, including Python, JavaScript, HTML, CSS, and JS. The editor provides a user-friendly interface where developers can write, edit, and execute code directly in the browser, making it ideal for coding practice, quick prototyping, or educational purposes."
              ghLink="https://github.com/Shivam-fibo/Code-editor"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="JavaScript Quiz Application"
              description="his quiz website helps users test their knowledge of JavaScript through a series of questions. It covers topics from basic concepts to more advanced features of the language"
              ghLink="https://github.com/Shivam-fibo/JavaScript-Quiz"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typing}
              isBlog={false}
              title="Typing Speed"
              description="This project is a simple typing speed test designed to measure how quickly and accurately a person can type. Users are presented with a text passage, and their typing speed is calculated based on the time taken and the number of correct words typed."
              ghLink="https://github.com/Shivam-fibo/typing"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Application"
              description="A feature-rich music web app that offers essential functionalities such as play, pause, next, and previous for seamless audio playback. Users can easily control their listening experience and enjoy a smooth, responsive interface designed for music lovers"
              ghLink="https://github.com/Shivam-fibo/Music-player"
            
            />
          </Col>

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

         

       
         

       

        
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
