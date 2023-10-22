import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "UI/UX Desinger",
          "Full Stack Web Developer",
        ],
        autoStart: true,
        loop: true,
        typeSpeed:100,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
