import React from "react";
import { ThreeCircles } from "react-loader-spinner";

function LoaderFile(props) {
  return (
    <div id="loaderParent">
      <div id="loader">
        <ThreeCircles
          height="80"
          width="80"
          radius="9"
          color="#ffd700"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    </div>
  );
}

export default LoaderFile;
