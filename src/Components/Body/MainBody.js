import React, { Component } from "react";
import ImgCarousel from "./Carousel";
import ProductsGroup from "./ProductsGroup";
import Products from "./Products";

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <ImgCarousel />
        <ProductsGroup />
        <Products />
      </div>
    );
  }
}
