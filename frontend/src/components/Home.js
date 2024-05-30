import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import MetaData from "./layout/MetaData";

const Home = () => {
  return (
    <Fragment>
      <MetaData title={"Home Page"}></MetaData>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <center>Welcome to GeekBasement</center>
          </h1>
        </div>

        <section className="section dashboard">
          {/* Carousel Start */}
          <Carousel className="Carousel">
            <Carousel.Item interval={1500}>
              <img
                className="carousel-img"
                src="/assets/img/berserk.jpg"
                alt="Berserk"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="carousel-img"
                src="/assets/img/bocchitherock.jpg"
                alt="Bocchi! The Rock"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="carousel-img"
                src="/assets/img/chainsaw.jpg"
                alt="Chainsaw Man"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="carousel-img"
                src="/assets/img/attack.jpg"
                alt="Attack On Titan"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="carousel-img"
                src="/assets/img/vagabond.jpg"
                alt="Vagabond"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="carousel-img"
                src="/assets/img/spyxfamily.jpg"
                alt="Spy X Family"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="carousel-img"
                src="/assets/img/vinland-saga--20942.jpg"
                alt="Vinland Saga"
              />
            </Carousel.Item>
          </Carousel>
          {/* Carousel End */}
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title"></h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-folder"></i>
                        </div>
                        <div className="ps-3">
                          <h6>Name of the Category</h6>
                          <span className="text-muted small pt-2 ps-1">
                            Description or additional info
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagetitle">
            <h1>Latest Products</h1>
          </div>
          {/* CARD */}
          <div className="row card-container">
            <div className="col-lg-3">
              <div className="card">
                <img
                  src="assets/img/card.jpg"
                  className="card-img-top"
                  alt="SanDisk Ultra"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    128GB Solid Storage Memory card - SanDisk Ultra
                  </h5>
                  <div className="card-rating">
                    <span className="stars">★★★★☆ </span>
                    <span className="reviews">(5 Reviews)</span>
                  </div>
                  <p className="card-price">$45.67</p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
