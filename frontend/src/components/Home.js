import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <Fragment>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            <center>Welcome to GeekBasement</center>
          </h1>
        </div>

        <section className="section dashboard">
          {/* Carousel Start */}
          <Carousel className="Carousel" style={{ marginBottom: 25 }}>
            <Carousel.Item interval={1000}>
              <img
                className="carousel-img"
                src="/assets/img/berserk.jpg"
                alt="Berserk"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="carousel-img"
                src="/assets/img/bocchitherock.jpg"
                alt="Bochhi! The Rock"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img"
                src="/assets/img/chainsaw.jpg"
                alt="Chainsaw Man"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img"
                src="/assets/img/attack.jpg"
                alt="Attack On Titan"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img"
                src="/assets/img/vagabond.jpg"
                alt="Vagabond"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-img"
                src="/assets/img/spyxfamily.jpg"
                alt="Spy X Family"
              />
            </Carousel.Item>
            <Carousel.Item>
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
                  <div class="card info-card sales-card">
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-folder"></i>
                        </div>
                        <div class="ps-3">
                          <h6>Name of the Category</h6>
                          <span class="text-muted small pt-2 ps-1">
                            Description or additional info
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-md-6">
                  <div class="card info-card sales-card">
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-folder"></i>
                        </div>
                        <div class="ps-3">
                          <h6>Name of the Category</h6>
                          <span class="text-muted small pt-2 ps-1">
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
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
