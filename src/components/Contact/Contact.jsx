import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";
import styled from "styled-components";

const SubTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;

const Information = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;

const Contact = () => {
  return (
    <div className="py-5">
      <Container>
        <div className="row">
          <div className="col-lg-6 col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2279249133917!2d115.21210791531603!3d-8.669861590644835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241cf9da5ebb1%3A0x1f7250a1ec55df91!2sLevel%2021%20Mall%20Bali!5e0!3m2!1sen!2sid!4v1666758917618!5m2!1sen!2sid"
              width="100%"
              height="750"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-6 col-12 contact-information">
            <div className="header">
              <h1 className="title-contact">Kontak Kami</h1>
              <p className="content-contact">
                Hubungi kami jika ada pertanyaan dan silahkan mampir ke toko
                kami
              </p>
            </div>
            <div className="phone">
              <SubTitle>Kontak</SubTitle>
              <Information>0812345678901</Information>
            </div>
            <div className="address">
              <SubTitle>Alamat</SubTitle>
              <Information>Jl. Menuju Kebahagiaan</Information>
            </div>
            <div className="schedule">
              <SubTitle>Jam Buka</SubTitle>
              <Information>Sen : 07.00 - 20.00</Information>
              <Information>Sel : 07.00 - 20.00</Information>
              <Information>Rab : 07.00 - 20.00</Information>
              <Information>Kam : 07.00 - 20.00</Information>
              <Information>Jum : 07.00 - 20.00</Information>
              <Information>Sab : 07.00 - 20.00</Information>
              <Information>Min : 07.00 - 20.00</Information>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
