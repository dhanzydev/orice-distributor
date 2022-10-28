import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import HeroImageSmall from "../../assets/hero-1.png";
import HeroImageBig from "../../assets/hero-2.png";

const Home = () => {
  return (
    <div className="bg-color">
      <Container>
        <div className="row py-5 d-flex align-items-center ">
          <div className="col-12 col-lg-6 content-wrapper">
            <h1 className="title text-white">Kami Penuhi Kebutuhan Pangan Anda</h1>
            <p className="content">
              Kami penuh kebutuhan pangan anda dengan produk yang kami sediakan
              dengan <br />
              dengan harga bersahabat dan kualitas yang terjamin
            </p>
            <button className="btn-start">Produk Kami</button>
          </div>
          <div className="col-12 col-lg-6 d-flex hero-container gap-3">
            <img src={HeroImageSmall} alt="" className="img-fluid hero-small" />
            <img src={HeroImageBig} alt="" className="img-fluid hero-big" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
