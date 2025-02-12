import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './../About/About.css';
import './Skills.css';

export default function Skills() {
  return (
    <>
      <main className="row  flex-nowrap justify-content-end ">
        <section className="about-sec col-12 col-md-9 col-lg-10  d-flex flex-column justify-content-center">
          <p className="title text-uppercase font-f-quicksand fw-medium mb-4">
            MY SPECIALTY
          </p>
          <h3 className="text-uppercase font-f-playfair fw-bold mb-4">
            my skills
          </h3>

          <p className="about-p font-f-quicksand pt-3">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </p>
          <div className="skills-progress row px-3 mt-4 gap-4 font-f-quicksand ">
            <div className="col-12 col-lg-5 flex-grow-1 p-0">
              <p className="my-2 fw-normal">Photoshop</p>
              <div className="progress ">
                <div
                  className="progress-bar progress-bar-1 "
                  role="progressbar"
                ></div>
              </div>
            </div>
            <div className="col-12 col-lg-5 flex-grow-1 p-0">
              <p className="my-2 fw-normal">jQuery</p>
              <div className="progress ">
                <div
                  className="progress-bar progress-bar-2 "
                  role="progressbar"
                ></div>
              </div>
            </div>
            <div className="col-12 col-lg-5 flex-grow-1 p-0">
              <p className="my-2 fw-normal">HTML5</p>
              <div className="progress ">
                <div
                  className="progress-bar progress-bar-3 "
                  role="progressbar"
                ></div>
              </div>
            </div>
            <div className="col-12 col-lg-5 flex-grow-1 p-0">
              <p className="my-2 fw-normal">CSS3</p>
              <div className="progress ">
                <div
                  className="progress-bar progress-bar-4 "
                  role="progressbar"
                ></div>
              </div>
            </div>
            <div className="col-12 col-lg-5 flex-grow-1 p-0">
              <p className="my-2 fw-normal">WordPress</p>
              <div className="progress ">
                <div
                  className="progress-bar progress-bar-5 "
                  role="progressbar"
                ></div>
              </div>
            </div>
            <div className="col-12 col-lg-5 flex-grow-1 p-0">
              <p className="my-2 fw-normal">SEO</p>
              <div className="progress ">
                <div
                  className="progress-bar progress-bar-6 "
                  role="progressbar"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
