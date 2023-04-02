import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Input } from "@rneui/base";
import { Avatar } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons/faSignOut";
import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { signOut } from "firebase/auth";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase";

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  useLayoutEffect(() => {
    const q = query(collection(db, "MESSAGES"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        const data = {
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        };
        messages = [...messages, data];
      });
      setMessages(messages);
      return unsub;
    });
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];

    const msgColRef = collection(db, "MESSAGES");

    addDoc(msgColRef, {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Bienvenue");
      })
      .catch((error) => {
        console.log(error.messages);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL,
            }}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 30,
          }}
          onPress={onSignOut}
        >
          <FontAwesomeIcon style={styles.icon} icon={faSignOut} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
        name: auth?.currentUser?.displayName,
        avatar: auth?.currentUser?.photoURL,
      }}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    color: "#9933FF",
  },
});

export default ChatScreen;
