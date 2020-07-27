import React, { Component } from "react";
import ImgCarousel from "./Carousel";
import ProductsGroup from "./ProductsGroup";
import { ITEMS } from "../../data";

export default class MainBody extends Component {
  render() {
    console.log(ITEMS);
    return (
      <div>
        <ImgCarousel />
        <ProductsGroup />
      </div>
    );
  }
}
