import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./carousel.css";
export default class ImgCarousel extends Component {
  render() {
    return (
      <Carousel
        infiniteLoop
        autoPlay
        swipeable={true}
        showArrows={true}
        showThumbs={false}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div className="carousels">
          <img src={require("../../images/rakiposter.jpg")} alt="image1" />
        </div>
        <div className="carousels">
          <img src={require("../../images/saleposter.jpg")} alt="image1" />
        </div>
        <div className="carousels">
          <img src={require("../../images/laptopposter.jpg")} alt="image1" />
        </div>
      </Carousel>
    );
  }
}
