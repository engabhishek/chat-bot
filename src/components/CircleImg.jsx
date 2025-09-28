import React from "react";

const CircleImg = (props) => {
  return (
    <div>
      <img className={`w-${props.w} h-${props.h} rounded-full`} src={props.img} alt="" />
    </div>
  );
};

export default CircleImg;
