import React from 'react'

const About = () => {
  return (
    <>
      <div className="aboutpage">
        <div className="container">
          <div className="row d-flex mt-lg-0 mt-5 align-items-center flex-wrap">
            <div className="col-lg-6 col-12">
              <figure>
                <img
                  src={require('../../images/aboutUs/about-dec-v3.png')}
                  alt=""
                  className="img-fluid w-100"
                />
              </figure>
            </div>
            <div className="col-lg-6 col-12 about_left">
              <div className="row">
                <div className="col-12 mt-lg-0 mt-5">
                  <h5>ABOUT US</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-12 my-3">
                  <h1>
                    Who Is DigiMedia <span className="agency">Agency</span>
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <hr className="hr" />
                </div>
              </div>
              <div className="row">
                <div className=" col-12 my-3">
                  <p>
                    We hope this DigiMedia template is useful for your work. You
                    can use this template for any purpose. You may contribute a
                    little amount via PayPal to support TemplateMo in creating
                    new templates regularly.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6 col-6  mt-lg-0 mt-3">
                  <div className="circle1">
                    <h1>80%</h1>
                    <p>css</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6  col-6 mt-lg-0 mt-3">
                  <div className="circle2">
                    <h1>70%</h1>
                    <p>javascripr</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6  col-6 mt-md-3  mt-lg-0 mt-5">
                  <div className="circle3">
                    <h1>80%</h1>
                    <p>react.js</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
