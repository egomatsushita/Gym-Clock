import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Clock from "./containers/Clock";

export default function App() {
  return (
    <View style={styles.container}>
      <Clock />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
});
