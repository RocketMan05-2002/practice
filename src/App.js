import React from "react";
import "./App.css";
import Accordian from "./components/01_accordian/inde";
import RandomColor from "./components/02_random_color_generator";
import StarRating from "./components/03_star_rating";
import ImageSlider from "./components/04_image_slider/index";
import LoadMore from "./components/05_load_more_button";
import QRCodeGenerator from "./components/07_qr_code_generator";
import ItemsManager from "./containers/01_items_manager";

const App = () => {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} /> */}
      {/* <LoadMore /> */}
      {/* <QRCodeGenerator /> */}
      <ItemsManager />
    </div>
  );
};

export default App;
