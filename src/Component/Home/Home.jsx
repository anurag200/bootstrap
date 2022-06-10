import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import AOS from 'aos'
import About from '../About/About'
import Services from '../Services/Services'
import Project from '../Project/Project'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Footer from '../Footer'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: '1000',
    })
  })

  return (
    <>
      <div className="homepage">
        <div className="container">
          <div className="row text-center text-lg-start d-flex align-items-center flex-wrap ">
            <div
              className="col-lg-6 col-12 clo-12 mt-lg-0 mt-5"
              data-aos="slide-right"
            >
              <div className="row">
                <div className="col-12">
                  <h5>DIGITAL MEDIA AGENCY</h5>
                  <img src="" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h1>We Boost Your Website Traffic</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    This template is brought to you by TemplateMo website. Feel
                    free to use this for a commercial purpose. You are not
                    allowed to redistribute the template ZIP file on any other
                    template website. Thank you.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button>Free Quote</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 clo-12 mt-lg-0 mt-5">
              <figure>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={require('../../images/homeSider/slider-dec-v3.png')}
                  className="img-fluid homepage_image_animaition"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
