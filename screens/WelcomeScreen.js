import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const imageBack = require("../assets/images/background.jpg");

const WelcomeScreen = ({ navigation }) => {
  function ButtonStart({}) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: "#FABA10" }]}
          onPress={() => navigation.replace("Connexion")}
        >
          <Text
            style={{
              fontSize: 17.5,
              fontFamily: "sans-serif-medium",
              fontWeight: "500",
              fontWeight: "bold",
            }}
          >
            Commencez !
          </Text>
        </Pressable>
      </View>
    );
  }

  function BackgroundImage({ BackgroundImageSource }) {
    return (
      <View>
        <ImageBackground
          source={BackgroundImageSource}
          resizeMode="stretch"
          style={styles.img}
        >
          <Text style={styles.textStyle}>
            Découvrez une nouvelle façon de communiquer. Bienvenue !
          </Text>
          <ButtonStart></ButtonStart>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View>
      <BackgroundImage BackgroundImageSource={imageBack} />
      <StatusBar style="auto" />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 55,
    marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 25,
    position: "absolute",
    top: 200,
  },
});
