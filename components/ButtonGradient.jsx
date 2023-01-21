import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function ButtonGradient() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Level")}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#5FD1F9", "#5558DA"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0}}
        style={styles.button}
      >
        <Text style={styles.text}>Ingresar</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 200,
    marginTop: 60,
    
  },

  text: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
