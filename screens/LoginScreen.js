import { Pressable, StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Input, Button } from "@rneui/base";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Input
        label="Email"
        placeholder="Entrer votre email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        label="Mot de passe"
        placeholder="Entrer votre mot de passe"
        leftIcon={{ type: "material", name: "lock" }}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <View>
        <Button
          title="Se connecter"
          onPress={() => {
            console.log("Bouton clic");
          }}
          style={styles.button}
        />

        <Pressable
          onPress={() => navigation.navigate("Inscription")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            },
            styles.wrapperCustom,
          ]}
        >
          {({ pressed }) => (
            <Text style={styles.text}>
              {pressed ? "Merci!" : "Nouveau? Inscrivez-vous"}
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    width: 150,
    margin: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  containerButton: {
    flex: 1,
    flexDirection: "row",
  },
  text: { padding: 10 },
});
