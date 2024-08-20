import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Shivam Gupta </span>

            <br />I am a final year undergraduate at  Kanpur University.
            <br />
            <br />
            Some of my  programming achievements are:
          </p>
          <ul>
            <li className="about-activity">
              Knowledge of  programming languages <b className="purple">C, C++, Python, JavaScript, TypeScript</b>
            </li> <br />

          <li className="about-activity">
              I have solved <b className="purple">  500+ DSA question </b> on various coding plateform
           </li> <br />
            <li className="about-activity">
              Expetise in Front end technology <b className="purple"> HTML, CSS, JS, ReactJS, NextJS
              </b> </li> <br />
              
              <li className="about-activity">
              Familiar with Backend Technology <b className="purple"> Node JS, Express JS and MongoDB</b>
            </li> <br />

            <li className="about-activity">
              Good Command on <b className="purple"> Bootstrap , Tailwind CSS and Material UI</b>
            </li> <br />
            <li className="about-activity">
              Build projects on <b className="purple"> Vanilla JavaScript  React JS MERN Stack and Next JS
              </b>   </li> <br />

              <li className="about-activity">
              I have written <b className= "purple">10+ article</b> on Hashnode
            </li> <br />

          
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
