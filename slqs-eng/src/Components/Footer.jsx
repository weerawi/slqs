import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center bg-black
     text-gray-300 text-lg-start  text-muted">
      {/* Section: Links */}
      <section className="">
        <div className="container text-center text-md-start mt-3">
          {/* Grid row */}
          <div className="row pt-5" data-aos="fade-up" data-aos-duration="1800">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" data-aos="zoom-in" data-aos-duration="1500">
              {/* Content */}
              <a className="footer-link" href="https://www.facebook.com/SLQSEngKuwait/" target="_blank">
                <i className="fas fa-home me-3 text-secondary"></i> Kuwait City, Kuwait
              </a>
            </div>
            {/* Grid column */}

            {/* Repeat the above structure for other columns */}

          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-center p-4 border-bottom">
        {/* Right */}
        <div data-aos="zoom-in" data-aos-duration="1500">
          <ul className="social-media-list">
            <li className="tw"><a href="https://www.facebook.com/SLQSEngKuwait/" target="_blank" className="contact-icon">
              <i className="fa-brands fa-twitter"></i></a>
            </li>
            {/* Add other social media icons as required */}
          </ul>
        </div>
      </section>
      {/* Section: Social media end*/}

      {/* Copyright section */}
      <div id="copywrite" className="text-center p-4">
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Webi Inovation</a>
      </div>
    </footer>
  );
}

export default Footer;
