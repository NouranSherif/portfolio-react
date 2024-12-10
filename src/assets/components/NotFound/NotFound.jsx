import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function NotFound() {
  return (
    <>
      <div className="notfound w-100 vh-100 d-flex justify-content-center align-items-center ">
        <div className="wrapper  font-f-quicksand d-flex flex-column gap-3  ">
          <div className="message rounded-1 border border-1 p-3 fw-medium ">
            <p>
              <span className="mb-2 d-block"> 404: NOT_FOUND </span>
              <span className="mb-2 d-block">Code: NOT_FOUND </span>
              ID: fra1::f5z94-1733161417123-ce52ccc7e145
            </p>
          </div>
          <button className="btn bg-transparent border-primary btn-lg">
            <a
              href="https://vercel.com/docs/errors#not_found"
              className="text-decoration-none text-primary fs-6"
            >
              Read our documentation to learn more about this error.
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
