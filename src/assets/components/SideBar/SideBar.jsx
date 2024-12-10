import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import profileImg from '../../images/about-BgAkqdr2.jpg';
import { Link } from 'react-router-dom';
import './SideBar.css';

export default function SideBar() {
  const openSideBar = () => {
    document.getElementById('sideBar').classList.add('openSideBar');
    document.getElementById('open-btn').classList.add('invisible');
    document.getElementById('close-btn').classList.remove('invisible');
    document
      .querySelectorAll('.layer')
      .forEach(item => item.classList.add('bg-dark', 'opacity-50'));
  };

  const closeSideBar = () => {
    document.getElementById('sideBar').classList.remove('openSideBar');
    document.getElementById('open-btn').classList.remove('invisible');
    document.getElementById('close-btn').classList.add('invisible');
    document
      .querySelectorAll('.layer')
      .forEach(item => item.classList.remove('bg-dark', 'opacity-50'));
  };
  const [activeLink, setActiveLink] = useState('home');
  const changeLinkColor = link => {
    setActiveLink(link);
  };
  return (
    <>
      <button
        id="open-btn"
        className="sideBar-Btn my-2 rounded-1 px-2 py-1 border bg-transparent position-absolute "
        onClick={openSideBar}
      >
        <i className="fa-solid fa-bars fs-3 opacity-75 "></i>
      </button>

      <nav
        id="sideBar"
        className="col-3 col-lg-2 position-fixed start-0 bottom-0 h-100  p-2 d-flex flex-column gap-4 align-items-center text-center"
      >
        <button id="close-btn" className="invisible" onClick={closeSideBar}>
          <i className="fa-solid fa-x fs-3 opacity-75 "></i>
        </button>
        <div className="img-wrapper ">
          <img
            src={profileImg}
            alt="A man wearing glasses and a suit stands confidently in a snowy landscape, surrounded by a serene winter atmosphere"
            className="w-100 h-100 rounded-circle  "
          />
        </div>
        <div className="info">
          <a
            href=""
            className="text-capitalize fs-4 fw-bold text-decoration-none text-black font-f-playfair"
          >
            Jackson Ford
          </a>
          <p className="fs-12px font-f-quicksand text-uppercase mt-1 mb-0 ">
            <a href="" className="text-decoration-none me-1">
              UI/UX/Designer
            </a>
            in Philippines
          </p>
        </div>
        <ul className="list-unstyled d-flex flex-column gap-3 text-uppercase fs-12px font-f-quicksand fw-medium ">
          <li>
            <Link
              to="/home"
              className={`text-decoration-none sideBar-link text-black ${
                activeLink === 'home' ? 'activeLinkStyle' : ''
              }`}
              onClick={() => changeLinkColor('home')}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-decoration-none sideBar-link text-black ${
                activeLink === 'about' ? 'activeLinkStyle' : ''
              }`}
              onClick={() => changeLinkColor('about')}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`text-decoration-none sideBar-link text-black ${
                activeLink === 'skills' ? 'activeLinkStyle' : ''
              }`}
              onClick={() => changeLinkColor('skills')}
            >
              skills
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={`text-decoration-none sideBar-link text-black ${
                activeLink === 'experience' ? 'activeLinkStyle' : ''
              }`}
              onClick={() => changeLinkColor('experience')}
            >
              experience
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={`text-decoration-none sideBar-link text-black ${
                activeLink === 'work' ? 'activeLinkStyle' : ''
              }`}
              onClick={() => changeLinkColor('work')}
            >
              work
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
