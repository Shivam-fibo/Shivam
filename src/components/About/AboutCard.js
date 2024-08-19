import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Shivam Gupta </span>

            <br />I am a 3rd year undergraduate at UIET Kanpur.
            <br />
            <br />
            Some of my  programming achievements are:
          </p>
          <ul>
            <li className="about-activity">
              Knowledge of  programming languages <b className="purple">C, C++, Python, JavaScript</b>
            </li> <br />

            <li className="about-activity">
              Expetise in Front end technology <b className="purple"> HTML, CSS and JS
              </b> </li> <br />
            <li className="about-activity">
              Good Command on <b className="purple"> Bootstrap , Tailwind CSS and Material UI</b>
            </li> <br />
            <li className="about-activity">
              Build projects on <b className="purple"> Vanilla JavaScript and React JS
              </b>   </li>
            <li className="about-activity">
              Familiar with Backend Technology <b className="purple"> Node JS, Express JS and MongoDB</b>
            </li> <br />
            <li className="about-activity">
              Currently Learning TypeScript<b className="purple">  Next JS  and Machine Learning</b>
            </li> <br />
            <li className="about-activity">

            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
