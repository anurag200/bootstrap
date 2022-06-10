import React, { useState } from 'react'
import '../Services/Services.css'

const Services = () => {
  return (
    <>
      <div className="container">
        <div className="services">
          <div className="row mt-5 provides">
            <div className="col-12 mt-5 mx-auto text-center ">
              <section>
                <h5>OUR SERVICES</h5>
                <h1 className="my-4">
                  What Our Agency <span>Provides</span>
                </h1>
                <hr className="mx-auto" />
              </section>
            </div>
          </div>
          <div className="row enjoy_travel">
            <div className="col-12">
              <div className="row d-flex mt-5 justify-content-center  enjoy_travel_top">
                <div
                  class="card shadow border-0 mb-3 mx-2 "
                  style={{ width: '12rem', height: '12rem' }}
                >
                  <img
                    src={require('../../images/service/service-icon-01.png')}
                    class="card-img-top mx-auto mt-5  "
                    alt="..."
                    style={{ width: '4rem' }}
                  />
                  <div class="card-body text-center">
                    <p class="card-text ">Some quick </p>
                  </div>
                </div>
                <div
                  class="card shadow border-0 mb-3 mx-2 "
                  style={{ width: '12rem', height: '12rem' }}
                >
                  <img
                    src={require('../../images/service/service-icon-02.png')}
                    class="card-img-top mx-auto mt-5  "
                    alt="..."
                    style={{ width: '4rem' }}
                  />
                  <div class="card-body text-center">
                    <p class="card-text ">Food & Life </p>
                  </div>
                </div>
                <div
                  class="card shadow border-0 mb-3 mx-2 "
                  style={{ width: '12rem', height: '12rem' }}
                >
                  <img
                    src={require('../../images/service/service-icon-03.png')}
                    class="card-img-top mx-auto mt-5  "
                    alt="..."
                    style={{ width: '4rem' }}
                  />
                  <div class="card-body text-center">
                    <p class="card-text ">Cars </p>
                  </div>
                </div>
                <div
                  class="card shadow border-0 mb-3 mx-2 "
                  style={{ width: '12rem', height: '12rem' }}
                >
                  <img
                    src={require('../../images/service/service-icon-04.png')}
                    class="card-img-top mx-auto mt-5  "
                    alt="..."
                    style={{ width: '4rem' }}
                  />
                  <div class="card-body text-center">
                    <p class="card-text ">Shopping </p>
                  </div>
                </div>
                <div
                  class="card shadow border-0 mb-3 mx-2 "
                  style={{ width: '12rem', height: '12rem' }}
                >
                  <img
                    src={require('../../images/service/service-icon-04.png')}
                    class="card-img-top mx-auto mt-5  "
                    alt="..."
                    style={{ width: '4rem' }}
                  />
                  <div class="card-body text-center">
                    <p class="card-text ">Traveling </p>
                  </div>
                </div>
              </div>
              <div
                className="row mt-5 shadow  d-flex justify-content-center"
                style={{ padding: '100px' }}
              >
                <div className="col-lg-5 col-12 clo-12 mt-lg-0 mt-5">
                  <h4 className="h4">SEO Analysis & Daily Reports</h4>
                  <p className="my-4 text-secondary lh-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedr do eiusmod deis tempor incididunt ut labore et dolore
                    kengan darwin doerski token. dover lipsum lorem and the
                    others.
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <ul className="p-0 ">
                        <li>&#128504;Optimized Template</li>
                        <li>&#128504;Data Info</li>
                        <li>&#128504;SEO Analysis</li>
                      </ul>
                    </div>
                    <div className="col-6 ">
                      <ul className="p-0">
                        <li>&#128504;Data Info</li>
                        <li>&#128504;SEO Analysis</li>
                        <li>&#128504;Optimized Template</li>
                      </ul>
                    </div>
                  </div>
                  <p className="my-4 text-secondary lh-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sedr do eiusmod deis tempor incididunt.
                  </p>
                </div>
                <div className="col-lg-5 col-12 clo-12 mt-lg-0 mt-5 d-flex justify-content-center">
                  <img
                    src={require('../../images/service/services-image.jpg')}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row mt-5 ">
          <div className="col-12 mt-5 mx-auto text-center ">
            <section>
              <h5>GET YOUR FREE QUOTE</h5>
              <h1 className="my-4">Grow With Us Now</h1>
              <hr className="mx-auto" />
            </section>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-10 col-12  mx-auto shadow">
            <div className="row">
              <div className=" col-sm-8  ">
                <input
                  type="text"
                  className="py-4  border-0 mx-1 "
                  placeholder="enter name"
                />
                <input
                  type="email"
                  className="py-4   border-0 mx-1 "
                  placeholder="enter email"
                />
              </div>
              <div className=" col-sm-4  d-flex justify-content-center">
                <button className="w-100  border-0">Get Quete Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
