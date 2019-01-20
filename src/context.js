import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const productContext = React.createContext();
//provider

//consumer
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct
  };
  handleDetails = () => {
    console.log("hello from detail");
  };
  addToCart = () => {
    console.log("hello from addToCart");
  };
  render() {
    return (
      <productContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </productContext.Provider>
    );
  }
}

const ProductConsumer = productContext.Consumer;

export { ProductProvider, ProductConsumer };
