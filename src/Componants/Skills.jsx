import React from "react";
import { Element } from "react-scroll";
import Html from "../assests/html.png"
import js from "../assests/javascript.png"
import Css from "../assests/css-3.png"
import Reactt from "../assests/reactjs.png"
import Bootstrab from "../assests/bootstrap.png"
import Github from "../assests/github.png"


const Skills = () => {
  const skills = [
    { name: "HTML", img: Html },
    { name: "CSS", img: Css  },
    { name: "Bootstrap", img:Bootstrab },
    { name: "J.S", img: js },
    { name: "React", img: Reactt },
    { name: "GIT GUB", img:Github  },
  ];

  return (
    <Element name="Skills" >
    <div  className="bg-black py-5 ">
     
      <div className="d-flex justify-content-center mb-5 text-white">
        <h2  className="">Skills & Technologies</h2>
      </div>

      
      <div className="container">
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 text-center"
            >
              <div className="bg-dark text-black rounded p-3 d-flex flex-column align-items-center justify-content-center h-100">
                <img
                  className="mb-3"
                  src={skill.img}
                  alt={skill.name} 
                  width="100"
                  height="100"
                />
                <h3 style={{ color: "rgba(0, 255, 229, 1)" }} >{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Element>
  );
};

export default Skills;
