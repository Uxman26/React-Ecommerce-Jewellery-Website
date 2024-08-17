/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

function Category(props) {
  const { title } = useParams();
  const data = props.data.filter((category) => category.title === title);
  const products = data.map((product) => {
    return (
      <Bounce bottom>
      <div className="card col-md-3 mt-2 p-0 categoryCard overflow-hidden">
        <div className="card-body">
          
        <div className="overflow-hidden p-0">
          <img className="img-fluid cardImage" src={product.image} />
          </div>
          <h4 className="mt-4" style={{ color: "white" }}>
                {product.name}
              </h4>
          <div className="text-white justify-content-center d-flex"><h5 className="me-2">Rs. {product.price}</h5><del>Rs. {product.oldPrice}</del></div>
          <a href={`/productDetail/${product.orderID}`}>
            <Button className="btn-gene">Order Now</Button>
          </a>
        </div>
      </div>
      </Bounce>
    );
  });
  const nodata = [1].map(() => {
    return (
      <Bounce bottom>
          <h1 className="text-white">No Product Available</h1>
      </Bounce>
    );
  });
  return (
    <div className="overflow-hidden py-5 bg-dark">
      <div className=" text-white py-3 justify-content-center pt-5">
      <Flip>
        <img
          className="mb-3 p-2 img-fluid"
          id="logo"
          src="/assets/img/jewellery.png"
          width={80}
        />
        </Flip>
        <div className="col-md-10 mx-auto">
          <div className="row justify-content-left">{products.length != 0 ? products : nodata}</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
