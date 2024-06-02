import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Product from "./product/Product";
import Loader from "./layout/Loader";
import Carousel from "react-bootstrap/Carousel";
import MetaData from "./layout/MetaData";
import { useParams } from "react-router-dom";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.products
  );
  const { keyword } = useParams();
  useEffect(() => {
    if (error) {
      alert.success("Success");
      alert.error(error);
    }
    dispatch(getProducts(keyword, currentPage));
  }, [dispatch, alert, error, keyword, currentPage]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

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
          {loading ? (
            <Loader></Loader>
          ) : (
            <Fragment>
              {/* CARD */}
              <div className="row card-container">
                {products &&
                  products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
              </div>
            </Fragment>
          )}
        </section>

        {resPerPage <= productsCount && (
          <div className="d-flex justify-content-center mt-5">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText={"Next"}
              prevPageText={"Previous"}
              firstPageText={"First"}
              lastPageText={"Last"}
              itemClass="page-item"
              linkClass="page-link"
            ></Pagination>
          </div>
        )}
      </main>
    </Fragment>
  );
};

export default Home;
