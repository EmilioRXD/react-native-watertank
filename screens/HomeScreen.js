import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import React, { useEffect } from "react";
import { getLevel } from "../database/supabase";
import Layaout from "../components/Layaout";

var level = 0;
const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  useEffect(() => {
    console.log(10);
  }, []);

  const [widthLevel, setWidth] = React.useState("");
  const onLayout = async (event) => {
    const { x, y, height, width } = await event.nativeEvent.layout;
    setWidth(width);
  };

  console.log("hola");

  return (
    <Layaout>
      <View style={styles.header}>
        <Text style={styles.h1}>Hola Mundo</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          <View style={styles.bottom} onLayout={onLayout}>
            <View
              style={[styles.cube, { transform: [{ translateY: level }] }]}
            ></View>
          </View>
        </View>
        <Button title="Hola"></Button>
      </View>
    </Layaout>
  );
};

const styles = StyleSheet.create({
  header: {
    borderColor: "red",
    borderWidth: 2,
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    borderColor: "blue",
    borderWidth: 2,
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: "80%",
    height: "90%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    padding: "4%",
  },
  cube: {
    width: 80,
    height: 80,
    backgroundColor: "#8E44AD",
    borderRadius: 20,
  },
  bottom: {
    backgroundColor: "#c2c2c2",
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  h1: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "MontserratBold",
  },
  p: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "MontserratRegular",
  },
});

export default HomeScreen;
