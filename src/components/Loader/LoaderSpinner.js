import React from "react";
import Lottie from "react-lottie";
import * as loading from "./loading-21-pencil.json";

const LoaderSpinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {/* <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />{" "} */}
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LoaderSpinner;
