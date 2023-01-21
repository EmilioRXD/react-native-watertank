import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Layaout from "../components/Layaout";
import ButtonGradient from "../components/ButtonGradient";
import QrCodeButton from "../components/svg/QrCodeButton";
import QrCodeHeader from "../components/svg/QrCodeHeader";

const HomeScreen = () => {
  return (
    <Layaout>
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.whiteBox}>
            <Text style={styles.h1}>ScanQr</Text>
            <Text style={styles.p}>
              Escanea el código QR o ingresa el código para vincularte al sensor
              de medición
            </Text>
            <QrCodeHeader style={{width:"60%", height:"60%"}}/>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.textInput}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                placeholder="Codigo ID"
                autoCapitalize="characters"
                autoComplete="off"
                autoCorrect={false}
                autoFocus={true}
                maxLength={9}
              />
              <View
                style={{
                  width: 40,
                }}
              >
                <QrCodeButton style={styles.qr} />
              </View>
            </View>
          </View>
          <TextInput
            placeholder="Profundidad (cm)"
            style={styles.textInput}
            maxLength={4}
          />
          <ButtonGradient />
        </View>
      </View>
    </Layaout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    felx: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  whiteBox: {
    width: "75%",
    height: "70%",
    padding: "5%",
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
  textInput: {
    padding: 10,
    paddingStart: 30,
    paddingEnd: 20,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  h1: {
    fontSize: 25,
  },
  p: {
    fontSize: 15,
    marginTop: 8,
    color: "gray",
    textAlign: "center",
  },
});
