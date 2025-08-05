import React from 'react'
import "./root.css";

export default function Contact() {
  return (
    <div>
{/* Contact */}
      <section className="contact-section py-5" id="contact">
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <h2 className='pt-5'>Plan Your Journey</h2>
              <p className="lead">Reach out to start crafting your dream trip.</p>
              <div className="contact-info">
                <div className="contact-item"><i className="fas fa-phone text-primary"></i><span>+91 9199245 536</span></div>
                <div className="contact-item"><i className="fas fa-envelope text-primary"></i><span>tour@paradisecliff.com</span></div>
                <div className="contact-item"><i className="fas fa-map-marker-alt text-primary"></i><span>Siwan, Bihar, India</span></div>
              </div>
            </div>
            <div className="col-md-6">
              <form className="contact-form pt-5">
                <div className="mb-3"><input type="text" className="form-control" placeholder="Your Name" /></div>
                <div className="mb-3"><input type="email" className="form-control" placeholder="Your Email" /></div>
               <div className="mb-3"><input type="destination" className="form-control" placeholder="Your Destination" /></div>

                <div className="mb-3"><textarea rows="4" className="form-control" placeholder="Tell us about your dream trip..."></textarea></div>
                <button type="submit" className="btn btn-primary w-100">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
