import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { useAlert } from "react-alert";
import Slider from "rc-slider";
import Pagination from "react-js-pagination";
import Product from "./product/Product";
import Loader from "./layout/Loader";
import Carousel from "react-bootstrap/Carousel";
import MetaData from "./layout/MetaData";
import { useParams } from "react-router-dom";
import "rc-slider/assets/index.css";

const createSliderWithToolTip = Slider.createSliderWithTooltip;
const Range = createSliderWithToolTip(Slider.Range);

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 500]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const categories = [
    "Mangas",
    "Bluray",
    "Figures",
    "Shirts",
    "Hoodies",
    "Poster",
  ];
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
    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);

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

          <div className="pagetitle">
            <h1>Latest Products</h1>
          </div>
          <div className="container-fluid">
            <div className="row no-gutters">
              {keyword ? (
                <Fragment>
                  <div className="col-12 col-md-3 mt-5 mb-5">
                    <div className="px-5">
                      <Range
                        marks={{
                          1: `$1`,
                          500: `$500`,
                        }}
                        min={1}
                        max={500}
                        defaultValue={[1, 500]}
                        tipFormatter={(value) => `$${value}`}
                        tipProps={{
                          placement: "top",
                          visible: true,
                        }}
                        value={price}
                        onChange={(price) => setPrice(price)}
                      />

                      <hr className="my-5" />
                      <div className="mt-5">
                        <h4 className="mb-3">Categories</h4>
                        <ul className="pl-0">
                          {categories.map((category) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              key={category}
                              onClick={() => setCategory(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <hr className="my-3" />
                      <div className="mt-5">
                        <h4 className="mb-3">Ratings</h4>
                        <ul className="pl-0">
                          {[5, 4, 3, 2, 1].map((star) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              key={star}
                              onClick={() => setRating(star)}
                            >
                              <div className="rating-outer">
                                <div
                                  className="rating-inner"
                                  style={{
                                    width: `${star * 20}%`,
                                  }}
                                ></div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-8">
                    <div className="row card-container">
                      {products &&
                        products.map((product) => (
                          <Product key={product._id} product={product} />
                        ))}
                    </div>
                  </div>
                </Fragment>
              ) : (
                <div className="col-12">
                  <div className="row card-container">
                    {products &&
                      products.map((product) => (
                        <Product key={product._id} product={product} />
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {loading ? <Loader></Loader> : <Fragment>{/* CARD */}</Fragment>}
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
