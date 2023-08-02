import React from "react";
import Product from "../product/product";
import classes from "./ProductsGroup.module.css";
import ProductsSlider from "../productSlider/ProductsSlider";

const ProductsGroup = ({ products, title }) => {
  return (
    <div className={classes.ProductsGroup}>
      <h3>{title}</h3>
      <div className={classes.productsArea}>
        <ProductsSlider elementwidth={199} containerwidth={1194} step={597}>
          {products &&
            products.map((prod) => <Product key={prod._id} product={prod} />)}
        </ProductsSlider>
      </div>
    </div>

    // 199 1194

    /* { data.products.map(product => 
          <Product key={product._id} product={product} />
          )} */

    // orignal code

    // <div className={classes.ProductsGroup}>
    //   <h3>{title}</h3>
    //   <div className={classes.productsArea}>
    //     <ProductsSlider elementwidth={199} containerwidth={1194} step={597}>
    //       {products && products.map(prod => <Product key={prod._id}
    //         product={prod} />)}
    //     </ProductsSlider>
    //   </div>
    // </div>
  );
};

export default React.memo(ProductsGroup);
