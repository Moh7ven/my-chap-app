import { StyleSheet, View, Pressable, Text, Alert } from "react-native";

export default function ButtonStart({ navigation }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, { backgroundColor: "#FABA10" }]}
        onPress={() => navigation.navigate("Inscription")}
      >
        <Text
          style={{
            fontSize: 17.5,
            fontFamily: "sans-serif-medium",
            fontWeight: "500",
          }}
        >
          Commencer Maintenant!
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 230,
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
});
