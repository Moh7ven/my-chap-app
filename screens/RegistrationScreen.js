import { Pressable, StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Input, Button } from "@rneui/base";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageURL
            ? imageURL
            : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        navigation.popToTop();
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Input
        label="Nom"
        leftIcon={{
          type: "material",
          name: "badge",
        }}
        placeholder="Entrez votre nom"
        value={name}
        onChangeText={setName}
      />
      <Input
        label="Email"
        leftIcon={{
          type: "material",
          name: "email",
        }}
        placeholder="Entrez votre email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        label="Mot de passe"
        leftIcon={{
          type: "material",
          name: "lock",
        }}
        placeholder="Entrez votre Mot de passe"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Input
        label="Photo"
        leftIcon={{
          type: "material",
          name: "face",
        }}
        placeholder="Enregistrez  une photo"
        value={imageURL}
        onChangeText={setImageURL}
      />

      <View>
        <Button
          style={styles.button}
          title="S'enregistrez"
          onPress={register}
        />
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
