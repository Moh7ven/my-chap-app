import { SafeAreaView, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { React } from "react";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ChatScreen from "./screens/ChatScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="Bienvenue"
          component={WelcomeScreen}
          options={{
            title: "ChatApp",
            headerStyle: {
              backgroundColor: "#301E67",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerShadowVisible: {
              elevation: 1,
              shadowOpacity: 1,
              borderBottomWidth: 1,
            },
          }}
        />
        <Stack.Screen name="Connexion" component={LoginScreen} />
        <Stack.Screen name="Inscription" component={RegistrationScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
