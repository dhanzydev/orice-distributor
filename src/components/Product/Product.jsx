import React from "react";
import { Container } from "react-bootstrap";
import ProductImage from "../../assets/product.jpg"

const Product = () => {
  return (
    <div id="produk">
      <Container>
        <div className="row py-5 text-center">
            <h1 className="title">Produk Kami</h1>
            <p className="content text-dark">Kami menjual produk berkualitas dan terjangkau</p>
          <div className="col-12 col-lg-4">
          <div className="card py-3">
            <img src={ProductImage} className=" img-fluid" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Beras Gandum</h5>
                <p className="card-text">Rp.50.000</p>
                <a href="#" className="btn btn-primary">Beli Produk</a>
            </div>
          </div>
          </div>
          <div className="col-12 col-lg-4">
          <div className="card py-3">
            <img src={ProductImage} className=" img-fluid" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Beras Gandum</h5>
                <p className="card-text">Rp.50.000</p>
                <a href="#" className="btn btn-primary">Beli Produk</a>
            </div>
          </div>
          </div>
          <div className="col-12 col-lg-4">
          <div className="card py-3">
            <img src={ProductImage} className=" img-fluid" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Beras Gandum</h5>
                <p className="card-text">Rp.50.000</p>
                <a href="#" className="btn btn-primary">Beli Produk </a>
            </div>
          </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product