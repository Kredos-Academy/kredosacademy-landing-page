import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import frontendImage from "../Images/IMG_9675.JPG";

function Frontendvideo() {
  return (
    <Video autoplay loop /* poster={frontendImage} */>
      {/* <source src={} type=''/> */}
    </Video>
  );
}

export default Frontendvideo;
