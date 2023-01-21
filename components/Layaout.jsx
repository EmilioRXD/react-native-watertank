import { View, StyleSheet, Dimensions } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import SvgTop from "./SvgTop";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get("window");

const Layaout = ({ children }) => {
  const [fontsLoaded] = useFonts({
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if ((fontsLoaded)) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.mainContainer} onLayout={onLayoutRootView}>
      <View style={styles.svgContainer}>
        <SvgTop />
      </View>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  svgContainer: {
    width: width,
    alignItems: "center",
  },
  container: {
    position: "absolute",
    width: width,
    height: height,
  },
});

export default Layaout;
