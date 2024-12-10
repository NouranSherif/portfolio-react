import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './About.css';

export default function About() {
  return (
    <>
      <main className="row  flex-nowrap justify-content-end ">
        <section className="about-sec col-12 col-md-9 col-lg-10  ">
          <p className="title text-uppercase font-f-quicksand fw-medium mb-4">
            about us
          </p>
          <h3 className="text-uppercase font-f-playfair fw-bold mb-4">
            who am i?
          </h3>
          <p className="about-p font-f-quicksand  mb-4 pt-2">
            <span className="fw-bolder me-1">Hi Im Jackson Ford</span>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            (and) and the Little Blind Text should turn around and return to its
            own, safe country.
          </p>
          <p className="about-p font-f-quicksand ">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
          <div className="row d-flex flex-lg-nowrap gap-3 px-2 mt-4">
            <div className="service col-12 col-sm-5 col-lg-3 shadow  p-4 service-1  font-f-quicksand">
              <i className="fa-regular fa-lightbulb mb-4"></i>
              <p className="fw-medium">Graphic Design</p>
            </div>
            <div className="service col-12 col-sm-5 col-lg-3 shadow  p-4 service-2 font-f-quicksand">
              <i className="fa-solid fa-earth-americas mb-4"></i>
              <p className="fw-medium">Web Design</p>
            </div>
            <div className="service col-12 col-sm-5 col-lg-3 shadow  p-4 service-3 font-f-quicksand">
              <i className="fa-solid fa-database mb-4"></i>
              <p className="fw-medium">Software</p>
            </div>
            <div className="service col-12 col-sm-5 col-lg-3 shadow  p-4 service-4 font-f-quicksand">
              <i className="fa-solid fa-mobile-screen-button mb-4"></i>
              <p className="fw-medium">Application</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
