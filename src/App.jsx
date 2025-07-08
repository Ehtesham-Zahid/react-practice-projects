import React from "react";
import Accordian from "./components/accordian/accordian";
import RandomColor from "./components/randomColor/randomColor";
import StarRating from "./components/starRating/starRating";

const App = () => {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      <StarRating noOfStars={10} />
    </div>
  );
};

export default App;
