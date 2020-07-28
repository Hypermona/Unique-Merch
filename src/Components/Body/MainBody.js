import React, { Component } from "react";
import ImgCarousel from "./Carousel";
import ProductsGroup from "./ProductsGroup";
import Products from "./Products";
import { ITEMS } from "../../data";

export default class MainBody extends Component {
  render() {
    console.log(ITEMS);
    return (
      <div>
        <ImgCarousel />
        <ProductsGroup />
        <Products />
      </div>
    );
  }
}
