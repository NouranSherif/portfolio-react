import React from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import slideImg1 from '../../images/img_bg_1-PzvG2r05.jpg';
import slideImg2 from '../../images/img_bg_2-DzCs5o-0.jpg';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="row vh-100 flex-nowrap justify-content-end  overflow-hidden">
        <div
          id="carouselExampleControls"
          className="carousel slide  col-12 col-md-9 col-lg-10 p-0"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner h-100">
            <div className="carousel-item position-relative active h-100">
              <img
                src={slideImg1}
                className="d-block w-100 h-100 slide-img"
                alt="A man in a white shirt."
              />
              <div className="layer position-absolute w-100 h-100 top-0 start-0 p-5 d-flex  flex-column justify-content-center gap-3 ms-md-5">
                <h1 className="text-black home-h1 ms-5">
                  Hi! <br />
                  I'm Jackson
                </h1>
                <p className="home-p text-black ms-5 font-f-quicksand">
                  100% html5 bootstrap templates Made <br /> By
                  <a href="">Colorlib.com</a>
                </p>
                <button className="text-uppercase bg-transparent border-1 px-3 py-2 ms-5 font-f-quicksand">
                  download cv <i className="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
            <div className="carousel-item position-relative  h-100">
              <img
                src={slideImg2}
                className="d-block w-100 h-100 slide-img"
                alt=" A man dressed in a coat."
              />
              <div className="layer position-absolute w-100 h-100 top-0 start-0 px-5 pb-5 d-flex  flex-column justify-content-center gap-3 mx-md-5">
                <h1 className="home-h1 text-black mx-5">
                  Hi! <br />
                  I'm Designer
                </h1>
                <p className="home-p text-black mx-5 font-f-quicksand">
                  100% html5 bootstrap templates Made <br /> By
                  <a href="">Colorlib.com</a>
                </p>
                <button className="text-uppercase bg-transparent border-1 px-3 py-2 mx-5 font-f-quicksand">
                  view portfolio <i className="fa-solid fa-briefcase"></i>
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
