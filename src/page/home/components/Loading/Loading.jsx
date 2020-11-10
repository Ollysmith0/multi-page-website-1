import React from "react";
import "../Loading/Loading.scss";

const Loading = () => {
  return (
    <div>
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
