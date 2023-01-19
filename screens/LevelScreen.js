import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import React, { useEffect } from "react";
import Layaout from "../components/Layaout";
import SvgLevel from "../components/SvgLevel";

const AnimatedSVG = Animated.createAnimatedComponent(SvgLevel);
var level = 0;

const LevelScreen = () => {

  const [widthLevel, setWidth] = React.useState("");

  const onLayout = async (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    await setWidth(width);
  };

  const [aniX, setaniX] = React.useState(new Animated.Value(0));
  const [isAnimated, setIsAnimated] = React.useState(false);

  useEffect(() => {
    //Animación
    if (!isAnimated) {
      Animated.loop(
        Animated.timing(aniX, {
          toValue: -widthLevel,
          duration: 6000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    }
  });

  return (
    <Layaout>
      <View style={styles.header}>
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
          <View onLayout={onLayout} style={styles.nivel}>
            <AnimatedSVG
              style={[
                styles.box,
                { transform: [{ translateX: aniX, translateY: level }] },
              ]}
            />
          </View>
        </View>
        <View style={styles.containerSVGlevel}></View>
      </View>
    </Layaout>
  );
};

const styles = StyleSheet.create({
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
  header: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    paddingTop: "20%",
  },
  margen: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  nivel: {
    width: "100%",
    height: "100%",
    backgroundColor: "#C8C8C8",
    borderRadius: 20,
    overflow: "hidden",
  },
  titulo: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "MontserratBold",
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
});

export default LevelScreen;
