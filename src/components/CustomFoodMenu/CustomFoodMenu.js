import React from "react";
import FoodMenuNav from "components/CustomFoodMenu/FoodMenuNav.js";

const CustomFoodMenu = (props) => {
  if (props.menu) {
    return (
      <div>
        <FoodMenuNav menu={props.menu} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default CustomFoodMenu;
