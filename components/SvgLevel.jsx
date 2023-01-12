import React, { Component } from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default class SvgLevel extends Component {
  render() {
    return (
      <Svg
        style={{ overflow: "hidden" }}
        height={"150%"}
        width={"200%"}
        viewBox="0 0 1000 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M 1000 49.98 L 1000 1200 L 0 1200 L 0 49.98 C 149.99 150 349.2 -49.98 500 49.98 C 649.99 150 849.2 -49.98 1000 49.98 Z"
          fill="url(#b)"
        />
        <Defs>
          <LinearGradient id="b" y1="100%" x1="100%" gradientUnits="userSpaceOnUse">
            <Stop stopColor="rgba(95, 209, 249, 1)" offset="0%" />
            <Stop stopColor="rgba(85, 88, 218, 1)" offset="100%" />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  }
}
