import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Button,
  Dimensions,
} from "react-native";
import ButtonStart from "./ButtonStart";

// const imageBack = require("../assets/images/background.jpg");
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function BackgroundImage({ BackgroundImageSource }) {
  return (
    <View>
      <ImageBackground
        source={BackgroundImageSource}
        resizeMode="stretch"
        style={styles.img}
      >
        <Text style={styles.textStyle}>
          Développez votre création avec des images époustouflantes
        </Text>
        <ButtonStart></ButtonStart>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 25,
    position: "absolute",
    top: 250,
  },
});
