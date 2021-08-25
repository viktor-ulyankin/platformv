import React from "react";

const Icon = ({ source, ...attr }) => (
  <svg
    viewBox={source.viewBox}
    { ...attr }
  >
    <use xlinkHref={source.url}/>
  </svg>
);

export default Icon;