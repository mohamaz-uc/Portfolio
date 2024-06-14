import React from "react";
import {ThreeDots} from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#343e47"
        radius="9"
      />
    </div>
  );
}

export default Preloader;
