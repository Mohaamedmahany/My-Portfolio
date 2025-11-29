import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Element } from 'react-scroll'

const Support = () => {
  return (
    <Element name='Support' >
    <div className="bg-black text-white py-5" style={{ minHeight: "90vh" }}>
      
      
      <div className="info container text-center mb-5" style={{ maxWidth: "700px" }}>
        <h2 className="fw-bold mb-3" style={{ color: "rgba(0, 255, 229, 1)" }}>Contact Me</h2>
        <p className="fs-5">
          Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through my contact information.
        </p>
      </div>

      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start gap-5">
        
        
        <div className="text-white" style={{ flex: 1 }}>
          <p className="fs-4 fw-bold mb-4">Contact Information</p>

          <div className="mb-3">
            <i className="bi bi-envelope fs-5 pe-2" style={{ color: "rgba(0, 255, 229, 1)" }}></i>
            <span className="fs-6">mohamedmohany018@gmail.com</span>
          </div>

          <div className="mb-3">
            <i className="bi bi-telephone fs-4 pe-2" style={{ color: "rgba(0, 255, 229, 1)" }}></i>
            <span className="fs-5">01125218188</span>
          </div>

          <div className="mb-4">
            <i className="bi bi-geo-alt-fill fs-4 pe-2" style={{ color: "rgba(0, 255, 229, 1)" }}></i>
            <span className="fs-5">EGYPT</span>
          </div>

          <p className="fs-4 mb-2">Follow Me : </p>
          <div className="d-flex gap-3">
            <a href=""></a>
            <a href="https://www.facebook.com/share/1AyvqzgQZW/" target=' blank'><i className="bi bi-facebook fs-3" style={{ color: "rgba(0, 255, 229, 1)" }}></i></a>
            <a href="https://www.linkedin.com/in/mohamed-mahany-47b415342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'><i className="bi bi-linkedin fs-3" style={{ color: "rgba(0, 255, 229, 1)" }}></i></a>
            <a href="https://wa.me/201125218188"target=' blank' ><i className="bi bi-whatsapp fs-3" style={{ color: "rgba(0, 255, 229, 1)" }}></i></a>
            <a href="https://github.com/Mohaamedmahany" target=' blank'><i className="bi bi-github fs-3" style={{ color: "rgba(0, 255, 229, 1)" }}></i></a>
          </div>
        </div>

       
        <div className="bg-dark p-4 rounded w-100 w-md-50" style={{ flex: 1 }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Your Name" />
              <Form.Control type="email" placeholder="Your Email" className="mt-3" />
              <Form.Control type="text" placeholder="Subject" className="mt-3" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>

            <Button className="fw-bold px-4" style={{ backgroundColor: "rgba(0, 255, 229, 1)", color: "black", border: "none" }}>
              SEND <i className="bi bi-send ps-1"></i>
            </Button>
          </Form>
        </div>
      </div>
    </div>
 </Element>
 )
}

export default Support
