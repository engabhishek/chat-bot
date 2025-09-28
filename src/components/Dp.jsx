import React from "react";

const Dp = (props) => {
  return (
    <div className={`w-${props.w} h-${props.h} bg-${props.bg} flex justify-center items-center rounded-full border `}>
      <h1 className={`text-${props.textSize} font-extrabold`}>{props.text}</h1>
    </div>
  );
};

export default Dp;
