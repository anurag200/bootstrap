import React from 'react'
import Slider from 'react-slick'

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }
  return (
    <>
      <div className="container ">
        <Slider {...settings}>
          <div>
            <div class="card mx-3 shadow border-0">
              <img
                src={require('../../images/potfolio/portfolio-01.jpg')}
                alt=""
              />
              <div class="card-body">
                <h4 class="card-text text-center mt-2 ">Website Builder.</h4>
                <p className="text-center mt-3">Marketing</p>
              </div>
            </div>
          </div>

          <div>
            <div class="card mx-3 shadow border-0">
              <img
                src={require('../../images/potfolio/portfolio-02.jpg')}
                alt=""
              />
              <div class="card-body">
                <h4 class="card-text text-center mt-2">Website Builder.</h4>
                <p className="text-center mt-3">Marketing</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card mx-3 border-0">
              <img
                src={require('../../images/potfolio/portfolio-03.jpg')}
                alt=""
              />
              <div class="card-body">
                <h4 class="card-text text-center mt-2">Website Builder.</h4>
                <p className="text-center mt-3">Marketing</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card mx-3 shadow border-0">
              <img
                src={require('../../images/potfolio/portfolio-01.jpg')}
                alt=""
              />
              <div class="card-body">
                <h4 class="card-text text-center mt-2">Website Builder.</h4>
                <p className="text-center mt-3">Marketing</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card mx-3 shadow border-0">
              <img
                src={require('../../images/potfolio/portfolio-04.jpg')}
                alt=""
              />
              <div class="card-body">
                <h4 class="card-text text-center mt-2">Website Builder.</h4>
                <p className="text-center mt-3">Marketing</p>
              </div>
            </div>
          </div>
          <div>
            <div class="card mx-3 shadow border-0">
              <img
                src={require('../../images/potfolio/portfolio-04.jpg')}
                alt=""
              />
              <div class="card-body">
                <h4 class="card-text text-center mt-2">Website Builder.</h4>
                <p className="text-center mt-3">Marketing</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Sliders
