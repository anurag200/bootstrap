import React from 'react'
import '../Contact/Contact.css'
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5 mx-auto text-center ">
              <section>
                <h5>CONTACT US</h5>
                <h1 className="my-4">
                  Get In Touch With Us <span>Now</span>
                </h1>
                <hr className="mx-auto" />
              </section>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1724.4653731156634!2d77.61162131197968!3d30.181972200107516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1654141021449!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0  col-12">
              <div className="row">
                <div className="col-md-6 contact_form mx-auto   ">
                  <input
                    type="text"
                    placeholder="Name"
                    className=" w-100 mb-5 px-1  py-3 shadow"
                  />
                  <input
                    type="Email"
                    placeholder="email"
                    className=" w-100 mb-5 px-1  py-3 shadow"
                  />
                  <input
                    type="number"
                    placeholder="Phone"
                    className=" w-100 mb-5 px-1  py-3 shadow"
                  />
                </div>
                <div className="col-md-6">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    // rows="11"
                    className="shadow w-100"
                  ></textarea>
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-10 ">
                  <button className="w-100 py-2 send_button">
                    Send Massage Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
