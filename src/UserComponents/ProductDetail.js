/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import { Button, Input, Label } from "reactstrap";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

function ProductDetail(props) {
  const [quantity, setQuantity] = useState(1);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const { id } = useParams();
  const product = props.data.filter((category) => category.orderID === id)[0];
  const data = props.data.filter((category) => category.title === product.title && category.featured === true).slice(0, 4);
  const doSomething = () => {
    document.getElementById("myCheck").click();
  };
  const addQuantity = () => {
    var quant = document.getElementById("quantity").value;
    setQuantity(++quant);
  };
  const removeQuantity = () => {
    var quant = document.getElementById("quantity").value;
    if (quant > 1) {
      setQuantity(quant - 1);
    }
  };
  const handleImageClick = () => {
    setShowFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
  };
  const products = data.map((product) => {
    return (
      <Bounce bottom>
      <div className="card col-md-3 mt-2 categoryCard overflow-hidden">
        <div className="card-body">
          <img className="img-fluid cardImage" src={product.image} width={200} />
          <h4 className="mt-4" style={{ color: "white" }}>
                {product.name}
              </h4>
          <div className="text-white justify-content-center"><del>Rs. {product.oldPrice}</del><h5>Rs. {product.price}</h5></div>
          <a href={`/productDetail/${product.orderID}`}>
            <Button className="btn-gene">Order Now</Button>
          </a>
        </div>
      </div>
      </Bounce>
    );
  });
  return (
    <div className="bg-dark overflow-hidden py-5">
      <div style={{ paddingTop: "100px" }}>
        <div className="row">
          <div className="col-md-8">
            <img className="img-fluid" onClick={handleImageClick} src={product.image} width={500} />

            {showFullScreen && (
              <div
                className="fullscreen-overlay active"
                onClick={handleCloseFullScreen}
              >
                <div className="fullscreen-image">
                  <img
                    className="img-fluid"
                    width={700}
                    src={product.image}
                    alt="Full Screen"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="col-md-2 pt-2" style={{ textAlign: "left", background:'rgb(49, 49, 49)', border:'2px solid white', borderRadius:'10px' }}>
            <h3 style={{ color: "white" }}>
              {product.name}
            </h3>
            <p style={{ color: "white" }}>{product.orderID}</p>
            <p style={{ color: "white" }}>{product.discription}</p>
            <div className="text-white form-inline d-flex"><h5 className="me-2">Rs. {product.price}</h5><del>Rs. {product.oldPrice}</del></div>
            <Label className="text-white">Quantity: </Label>
            <div className="quanity-group d-flex col-md-6 mb-4">
              <Button style={{borderTopRightRadius:'0px', borderBottomRightRadius:'0px'}} negative className="" onClick={removeQuantity}>
                -
              </Button>
              <Input
                className="input-quanity text-center"
                style={{borderRadius:'0px'}}
                type="number"
                id="quantity"
                value={quantity}
              />
              <Button style={{borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px'}}  positive className="" onClick={addQuantity}>
                +
              </Button>
            </div>
            <ReactWhatsapp
              className="d-none"
              id="myCheck"
              number="+923270145124"
              message={`I want to buy your product :  ${product.orderID} , Quantity : ${quantity}`}
            />
            <Button onClick={doSomething} className="btn btn-success">
              Whatsapp Now
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white py-5 justify-content-center">
          <Fade top>
            <h1 className="mt-5" style={{ fontSize: "40px", opacity: "" }}>
              You May Also Like
            </h1>
          </Fade>
          <div className="col-md-10 mx-auto">
            <div className="row justify-content-center">{products}</div>
          </div>
        </div>
    </div>
  );
}

export default ProductDetail;
