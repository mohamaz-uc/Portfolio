import React from "react";
// import Loader from "react-loader-spinner";
import TypeWriter from "typewriter-effect";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <TypeWriter
      options={{
        strings: [
          "< . . . . . / >",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Preloader;
