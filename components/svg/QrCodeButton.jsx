import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"

const QrCodeButton = () => (
  <Svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Defs></Defs>
    <Path
      d="M1.851 12h20.298M6.926 22.149H3.543a1.694 1.694 0 0 1-1.692-1.692v-3.383m20.298 0v3.383c0 .933-.759 1.692-1.692 1.692h-3.383m0-20.298h3.383c.933 0 1.692.759 1.692 1.692v3.383M6.926 1.851H3.543c-.933 0-1.692.759-1.692 1.692v3.383"
      style={{
        stroke: "#666666",
        fillRule: "evenodd",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
      }}
    />
  </Svg>
)

export default QrCodeButton