import React from 'react'
import { Button } from 'react-bootstrap'
import { Element, Link } from 'react-scroll'

const Main = () => {
  return (
    <Element name='Home'>
      <div className='bg-black text-white d-flex flex-column flex-md-row align-items-center justify-content-center vh-100 p-3'>
        <div className='container text-center text-md-start w-100 w-md-50 mb-4 mb-md-0'>
          <h2 className='fs-1'>Hii, I'm Mohamed Mahany</h2>
          <p className='fs-4'>Frontend Developer</p>
          <p className='fs-5'>
            I create beautiful, responsive, and user-friendly web applications using modern technologies and best practices.
          </p>

          <div className='d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-2 mt-3'>
            
           
            <Link
              to="Tutorials"
              smooth={true}
              duration={40}
              offset={-70}
            >
              <Button
                className='fs-5 fw-bold'
                style={{ backgroundColor: "rgba(0, 255, 229, 1)", color: "black" }}
              >
                View My Work
              </Button>
            </Link>

           
            <Link
              to="Support"
              smooth={true}
              duration={40}
              offset={-70}
            >
              <Button
                className='fs-5 fw-bold'
                style={{ backgroundColor: "rgba(0, 255, 229, 1)", color: "black" }}
              >
                Get In Touch
              </Button>
            </Link>

           
            <a href="/CV.pdf" download="Mohamed_Mohany_CV.pdf">
  <Button className='fs-5' variant="success">
    Download CV
  </Button>
</a>

          </div>
        </div>
      </div>
    </Element>
  )
}

export default Main
