import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import React from "react";

const SvgTop = () => {
  return (
    <Svg
      width={400}
      height={363.58}
      viewBox="0 0 200 181.79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M200 0v177.59c-12.75-9.34-26-18.85-44.29-18.85-36 0-60.15 23-105.35 23-18.14 0-35.65-9.85-50.36-21.65V0h200Z"
        fill="url(#a)"
        fillOpacity={0.2}
      />
      <Path
        d="M200,0V145.51c-12.75,9.64-28.25,17-43.94,17-45.2,0-69.33-23-105.35-23-21.22,0-35,12.75-50.71,23.22V0h200Z"
        fill="url(#a)"
        fillOpacity={0.5}
      />
      <Path
        d="M0,0V132.37c14,10.29,30.51,18.37,47,18.37,45.42,0,69-23.06,105.21-23.06,20.12,0,34.78,11.35,47.78,21.43V0h-200Z"
        fill="url(#a)"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={1023.47}
          y1={150.74}
          x2={1023.47}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5ba1ed" offset="100%" />
          <Stop stopColor="rgba(85, 88, 218, 1)" offset="0%" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SvgTop;
