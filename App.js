import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import firestore from "@react-native-firebase/firestore";
export default function App() {
  useEffect(() => {
    (async () => {
      firestore().collection("teste").add({
        name: "ssss",
        old: 34,
      });
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Teste do firesotre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
