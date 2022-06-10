import React from 'react'
import Sliders from './Slider'
import '../Project/Project.css'
const Project = () => {
  return (
    <>
      <div className="div my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5  my-5 mx-4 ">
              <section>
                <h5>OUR PORTOFOLIO</h5>
                <h1 className="my-1">
                  See Our Recent <span>Projects</span>
                </h1>
                <hr />
              </section>
            </div>
          </div>
          <Sliders />
        </div>
      </div>
    </>
  )
}

export default Project
