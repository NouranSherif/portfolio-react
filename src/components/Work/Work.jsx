import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Work.css';
import '../About/About.css';

import img1 from '../../assets/images/img-1-C4nS0eD8.jpg';
import img2 from '../../assets/images/img-2-D-4H1m4L.jpg';
import img3 from '../../assets/images/img-3-pR2ZEVY9.jpg';
import img4 from '../../assets/images/img-4-tHccITd-.jpg';
import img5 from '../../assets/images/img-5-lAucr__a.jpg';
import img6 from '../../assets/images/img-6-DFW03AZ3.jpg';

export default function Work() {
  const [activeButton, setActiveButton] = useState('graphic-design');

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };
  const showMore = () => {
    const moreBtn = document.getElementById('moreBtn');
    document.querySelector('.more-work').classList.toggle('d-none');

    moreBtn.innerHTML =
      moreBtn.innerHTML === 'show more' ? 'show less' : 'show more';
  };
  return (
    <>
      <main className="row  flex-nowrap justify-content-end ">
        <section className="about-sec col-12 col-md-9 col-lg-10   ">
          <p className="title text-uppercase font-f-quicksand fw-medium mb-4">
            MY WORK
          </p>
          <h3 className="text-uppercase font-f-playfair fw-bold mb-4">
            RECENT WORK
          </h3>
          <div className="btns font-f-quicksand ">
            <button
              className={`bg-transparent border-0 ps-0 ${
                activeButton === 'graphic-design' ? 'active' : ''
              }`}
              onClick={() => handleButtonClick('graphic-design')}
            >
              Graphic Design
            </button>
            <button
              className={`bg-transparent border-0 ${
                activeButton === 'apps' ? 'active' : ''
              }`}
              onClick={() => handleButtonClick('apps')}
            >
              Apps
            </button>
            <button
              className={`bg-transparent border-0 ${
                activeButton === 'software' ? 'active' : ''
              }`}
              onClick={() => handleButtonClick('software')}
            >
              Software
            </button>
          </div>
          <div className="gallery row mt-4 ps-3 gap-3">
            <div className="work col-lg-5 col-12 flex-grow-1  position-relative p-0 ">
              <div className="img-layer p-4 w-100 h-100 position-absolute z-2 bg-primary d-flex flex-column justify-content-between gap-2 opacity-0">
                <div>
                  <a
                    href=""
                    className="text-white d-block font-f-quicksand text-uppercase letter-spacing fw-medium"
                  >
                    work 01
                  </a>
                  <span className="text-white fs-12px font-f-quicksand ">
                    Animation
                  </span>
                </div>

                <div className="img-icons d-flex gap-2 mb-5">
                  <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                    <i className="fa-solid fa-share-nodes "></i>
                  </div>
                  <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                    <i className="fa-regular fa-eye"></i>
                    <a href="" className="text-black">
                      100
                    </a>
                  </div>
                  <div className="bg-secondary-subtle  opacity-75 rounded-1 p-1">
                    <i className="fa-regular fa-heart"></i>
                    <a href="" className="text-black">
                      49
                    </a>
                  </div>
                </div>
              </div>
              <img
                src={img1}
                alt="A fork and knife placed on a yellow surface, accompanied by a small serving of food, creating a vibrant dining setting."
                className="w-100 h-100 object-fit-cover"
              />
            </div>{' '}
            <div className="work col-lg-5 col-12 flex-grow-1  position-relative p-0 ">
              <div className="img-layer p-4 w-100 h-100 position-absolute z-2 bg-primary d-flex flex-column justify-content-between gap-2 opacity-0">
                <div>
                  {' '}
                  <a
                    href=""
                    className="text-white d-block font-f-quicksand text-uppercase letter-spacing fw-medium"
                  >
                    work 02
                  </a>
                  <span className="text-white fs-12px font-f-quicksand ">
                    Animation
                  </span>
                </div>

                <div className="img-icons d-flex gap-2 mb-5">
                  <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                    <i className="fa-solid fa-share-nodes "></i>
                  </div>
                  <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                    <i className="fa-regular fa-eye"></i>
                    <a href="" className="text-black">
                      100
                    </a>
                  </div>
                  <div className="bg-secondary-subtle  opacity-75 rounded-1 p-1">
                    <i className="fa-regular fa-heart"></i>
                    <a href="" className="text-black">
                      49
                    </a>
                  </div>
                </div>
              </div>
              <img
                src={img2}
                alt="A person stands on a vibrant red floor, showcasing their stylish red sneakers."
                className="w-100 h-100 object-fit-cover"
              />
            </div>{' '}
            <div className="work col-lg-5 col-12 flex-grow-1  position-relative p-0 ">
              <div className="img-layer p-4 w-100 h-100 position-absolute z-2 bg-primary d-flex flex-column justify-content-between gap-2 opacity-0">
                <div>
                  {' '}
                  <a
                    href=""
                    className="text-white d-block font-f-quicksand text-uppercase letter-spacing fw-medium"
                  >
                    work 03
                  </a>
                  <span className="text-white fs-12px font-f-quicksand ">
                    Animation
                  </span>
                </div>

                <div className="img-icons d-flex gap-2 mb-5">
                  <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                    <i className="fa-solid fa-share-nodes "></i>
                  </div>
                  <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                    <i className="fa-regular fa-eye"></i>
                    <a href="" className="text-black">
                      100
                    </a>
                  </div>
                  <div className="bg-secondary-subtle  opacity-75 rounded-1 p-1">
                    <i className="fa-regular fa-heart"></i>
                    <a href="" className="text-black">
                      49
                    </a>
                  </div>
                </div>
              </div>
              <img
                src={img3}
                alt="A person stands on a tennis court, poised to hit a ball with a racket, surrounded by green court lines and a net"
                className="w-100 h-100 object-fit-cover"
              />
            </div>{' '}
            <div className="work col-lg-5 col-12 flex-grow-1  position-relative p-0 ">
              <div className="img-layer p-4 w-100 h-100 position-absolute z-2 bg-primary d-flex flex-column justify-content-between gap-2 opacity-0">
                <div>
                  {' '}
                  <a
                    href=""
                    className="text-white d-block font-f-quicksand text-uppercase letter-spacing fw-medium"
                  >
                    work 04
                  </a>
                  <span className="text-white fs-12px font-f-quicksand ">
                    Animation
                  </span>
                </div>

                <div className="img-icons d-flex gap-2 mb-5">
                  <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                    <i className="fa-solid fa-share-nodes "></i>
                  </div>
                  <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                    <i className="fa-regular fa-eye"></i>
                    <a href="" className="text-black">
                      100
                    </a>
                  </div>
                  <div className="bg-secondary-subtle  opacity-75 rounded-1 p-1">
                    <i className="fa-regular fa-heart"></i>
                    <a href="" className="text-black">
                      49
                    </a>
                  </div>
                </div>
              </div>
              <img
                src={img4}
                alt="A basketball hoop elevated on a pole, ready for play under a bright sky."
                className="w-100 h-100 object-fit-cover"
              />
            </div>{' '}
            <div className="col-12 p-0">
              <div className="more-work d-none row gap-3  ">
                <div className="work col-lg-5 col-12 flex-grow-1  position-relative p-0 ">
                  <div className="img-layer p-4 w-100 h-100 position-absolute z-2 bg-primary d-flex flex-column justify-content-between gap-2 opacity-0">
                    <div>
                      {' '}
                      <a
                        href=""
                        className="text-white d-block font-f-quicksand text-uppercase letter-spacing fw-medium"
                      >
                        work 05
                      </a>
                      <span className="text-white fs-12px font-f-quicksand ">
                        Animation
                      </span>
                    </div>

                    <div className="img-icons d-flex gap-2 mb-5">
                      <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                        <i className="fa-solid fa-share-nodes "></i>
                      </div>
                      <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                        <i className="fa-regular fa-eye"></i>
                        <a href="" className="text-black">
                          100
                        </a>
                      </div>
                      <div className="bg-secondary-subtle  opacity-75 rounded-1 p-1">
                        <i className="fa-regular fa-heart"></i>
                        <a href="" className="text-black">
                          49
                        </a>
                      </div>
                    </div>
                  </div>
                  <img
                    src={img5}
                    alt="A hand holding a coffee mug that displays a thoughtful quote, surrounded by a comfortable and relaxed environment."
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>{' '}
                <div className="work col-lg-5 col-12 flex-grow-1  position-relative p-0 ">
                  <div className="img-layer p-4 w-100 h-100 position-absolute z-2 bg-primary d-flex flex-column justify-content-between gap-2 opacity-0">
                    <div>
                      {' '}
                      <a
                        href=""
                        className="text-white d-block font-f-quicksand text-uppercase letter-spacing fw-medium"
                      >
                        work 06
                      </a>
                      <span className="text-white fs-12px font-f-quicksand ">
                        Animation
                      </span>
                    </div>

                    <div className="img-icons d-flex gap-2 mb-5">
                      <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                        <i className="fa-solid fa-share-nodes "></i>
                      </div>
                      <div className="bg-secondary-subtle opacity-75 rounded-1 p-1">
                        <i className="fa-regular fa-eye"></i>
                        <a href="" className="text-black">
                          100
                        </a>
                      </div>
                      <div className="bg-secondary-subtle  opacity-75 rounded-1 p-1">
                        <i className="fa-regular fa-heart"></i>
                        <a href="" className="text-black">
                          49
                        </a>
                      </div>
                    </div>
                  </div>
                  <img
                    src={img6}
                    alt="A person seated on the ground with legs crossed, appearing relaxed and contemplative in their surroundings"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>{' '}
              </div>
              <button
                id="moreBtn"
                className="btn btn-primary text-capitalize font-f-quicksand my-3"
                onClick={showMore}
              >
                show more
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
