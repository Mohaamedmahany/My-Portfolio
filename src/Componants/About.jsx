import React from 'react'
import { Button } from 'react-bootstrap'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name="About" >
    <div className="bg-dark fw-bold text-white d-flex flex-column text-center justify-content-start align-items-center py-5" style={{ minHeight: "70vh" }}>
      
      <div className="container mb-4" style={{ maxWidth: "700px" }}>
        <p className="fs-2">About Me</p>
        <p className="fs-4">
          I studied with SEF ACADEMIC and received a course completion certificate from them. Skilled Front-End Developer with expertise in HTML, CSS, JavaScript, Bootstrap, and React Js
        </p>
      </div>

      
      <hr style={{ border: "2px solid rgba(0, 255, 229, 1)", width: "50%", margin: "15px auto" }} />

      <div className="container mb-4" style={{ maxWidth: "800px" }}>
        <p className="fs-5">
          Currently pursuing a Bachelor's in Business Information Systems at Higher Institute of Administrative Sciences in Katameya. Passionate about creating responsive, user-friendly applications and eager to learn new technologies. Strong team player with excellent problem-solving and communication skills.
        </p>
      </div>
<a href={`${process.env.PUBLIC_URL}/Cretificate.jpg`} download="Mohamed_Mohany_Cretificate.jpg">
  <Button className='fs-5' variant="success">
    Download Certificate
  </Button>
</a>

    </div>
    </Element>
  )
}

export default About
