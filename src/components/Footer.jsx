import React from "react";
import { Container } from "react-bootstrap";
import FooterLogo from "../assets/footer-logo.png"

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="row py-5 d-flex align-items-center">
          <div className="col-12 col-lg-7 text-center text-md-start">
            <img src={FooterLogo}/>
          </div>
          <div className="col-12 col-lg-5 text-center">
            <ul className="d-flex flex-column flex-md-row justify-content-between ">
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a>Whatsapp</a></li>
                <li><a>Facebook</a></li>
                <li><a>Email</a></li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="row">
        <div className="col-12 col-lg-12 text-center">
          <p>
            &copy; Copyright Tim Sukses
          </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer