import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ButtonGradient from "./ButtonGradient";

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get("window");

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  function SvgTop() {
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
            <Stop stopColor="rgba(95, 209, 249, 1)" offset="100%" />
            <Stop stopColor="rgba(85, 88, 218, 1)" offset="0%" />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  }
  function SvgLevel() {
    return (
      <Svg
        style={{overflow:"hidden"}}
        height={"100%"}
        width={"100%"}
        viewBox="0 0 500 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,1000.00 L0.00,1000.00 Z"
          fill="url(#b)"
        />
        <Defs>
          <LinearGradient
            id="b"
            x1={1023.47}
            y1={150.74}
            x2={1023.47}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="rgba(85, 88, 218, 1)" offset="0%" />
            <Stop stopColor="rgba(95, 209, 249, 1)" offset="100%" />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  }
  return (
    <View style={styles.mainContainer} onLayout={onLayoutRootView}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <View style={styles.upheader}>
          <Text style={styles.titulo}>Nivel</Text>
          <Text
            style={{
              fontSize: 40,
              color: "#fff",
              fontFamily: "MontserratRegular",
            }}
          >
            8
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#fff",
              fontFamily: "MontserratRegular",
            }}
          >
            Tanque casi Lleno
          </Text>
        </View>
        <View style={styles.whitebox}>
          <View style={styles.margen}>
            <View style={styles.nivel}>
              <SvgLevel style={{position:"absolute"}}/>
            </View>
          </View>
          {/* <View style={styles.containerSVGlevel}></View> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  whitebox: {
    width: "75%",
    height: "65%",
    padding: "2%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  upheader: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    paddingTop: "20%",
  },
  margen: {
    width:"100%",
    height:"100%",
    backgroundColor:"#000"
  },
  nivel: {
    width: "100%",
    height: "100%",
    backgroundColor: "#C8C8C8",
    borderRadius: 20,
  },
  containerSVGlevel: {
    width: "106%",
    height: "103%",
    borderRadius: 20,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 12,
    position: "absolute",
  },
  containerSVG: {
    width: width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "MontserratBold",
  },
});
