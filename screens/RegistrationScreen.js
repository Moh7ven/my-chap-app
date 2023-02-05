import { Pressable, StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Input, Button } from "@rneui/base";

const RegistrationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input
        label="Nom"
        leftIcon={{
          type: "material",
          name: "badge",
        }}
        placeholder="Entrez votre nom"
      />
      <Input
        label="Email"
        leftIcon={{
          type: "material",
          name: "email",
        }}
        placeholder="Entrez votre email"
      />
      <Input
        label="Mot de passe"
        leftIcon={{
          type: "material",
          name: "lock",
        }}
        placeholder="Entrez votre Mot de passe"
      />
      <Input
        label="Photo"
        leftIcon={{
          type: "material",
          name: "face",
        }}
        placeholder="Enregistrez  une photo"
      />

      <View>
        <Button style={styles.button} title="S'enregistrez" />
      </View>
    </View>
  );
};

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

export default RegistrationScreen;
