import React from 'react'
import './contact.scss';


const ContactUs = () => {
  return (
    <>
      <div className="contact-container">
      <div className="contact-content">
        <div className="contact-heading">
          <p>Contact</p>
        </div>
        <div className="contact-subheading">
          <p>Submit the form below to get in touch with us</p>
        </div>

        <div className="form-container">
          <form action="https://getform.io/f/RdGLp0eD" method="POST" className="form">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input-field"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input-field"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="textarea-field"
            ></textarea>

            <button className="submit-btn">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default ContactUs
