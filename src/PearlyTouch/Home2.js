import React from "react";
import classes from "./Home2.module.css";
import Slider from "./homeSlider/Slider";
import Header from "./Header/Header";

import CategoriesPanal from "./categoriesPanal/CategoriesPanal";
import ProductsGroup from "./homeProductSlider/productGroup/ProductsGroup";

import data from "./responses/data";
import categorydata from "./responses/categorydata";

const Home2 = () => {
  return (
    <>
      <Header />
      <div className={classes.Home}>
        <div>
          <div className={classes.topcontainer}>
            <CategoriesPanal Categories={categorydata.Categories} />
            <Slider />
          </div>
        </div>

        <div>
          <>
            <ProductsGroup
              title="My title Best selling"
              products={data.products}
            />
            2
          </>
        </div>
      </div>
    </>
  );
};
export default Home2;
