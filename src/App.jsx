import React from "react";
import Accordian from "./components/accordian/accordian";
import RandomColor from "./components/randomColor/randomColor";
import StarRating from "./components/starRating/starRating";
import ImageSlider from "./components/imageSlider/imageSlider";

const App = () => {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
};

export default App;
