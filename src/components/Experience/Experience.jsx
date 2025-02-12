import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Experience.css';
import '../About/About.css';

export default function Experience() {
  return (
    <>
      <main className="row  flex-nowrap justify-content-end ">
        <section className="about-sec col-12 col-md-9 col-lg-10  ">
          <p className="title text-uppercase font-f-quicksand fw-medium mb-4">
            EXPERIENCE
          </p>
          <h3 className="text-uppercase font-f-playfair fw-bold mb-4">
            WORK EXPERIENCE
          </h3>
          <div className="experiences-wrapper  py-3 ">
            <div className="experience p-4 position-relative font-f-quicksand mb-4">
              <div className="deco"></div>
              <h4 className="fs-5 mb-4 ">
                <a
                  href=""
                  className="text-decoration-none text-black fw-medium"
                >
                  {' '}
                  Full Stack Developer
                </a>
                <span className="experience-span opacity-50 fs-6">
                  {' '}
                  2017-2018
                </span>
              </h4>
              <div className="icon icon1">
                <i className="fa-solid fa-pencil text-white fs-5"></i>
              </div>
              <p>
                Tolerably earnestly middleton extremely distrusts she boy now
                not. Add and offered prepare how cordial two promise. Greatly
                who affixed suppose but enquire compact prepare all put. Added
                forth chief trees but rooms think may.
              </p>
            </div>
            <div className="experience p-4 position-relative font-f-quicksand mb-4">
              <div className="deco"></div>
              <h4 className="fs-5 mb-4 ">
                <a
                  href=""
                  className="text-decoration-none text-black fw-medium"
                >
                  {' '}
                  Front End Developer at Google Company
                </a>
                <span className="experience-span opacity-50 fs-6">
                  {' '}
                  2017-2018
                </span>
              </h4>
              <div className="icon icon2">
                <i className="fa-solid fa-pencil text-white fs-5"></i>
              </div>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
            <div className="experience p-4 position-relative font-f-quicksand mb-4">
              <div className="deco"></div>
              <h4 className="fs-5 mb-4 ">
                <a
                  href=""
                  className="text-decoration-none text-black fw-medium"
                >
                  {' '}
                  System Analyst
                </a>
                <span className="experience-span opacity-50 fs-6">
                  {' '}
                  2017-2018
                </span>
              </h4>
              <div className="icon icon3">
                <i className="fa-solid fa-pencil text-white fs-5"></i>
              </div>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
