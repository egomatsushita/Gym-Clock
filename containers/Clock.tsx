import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import useTime from "../hooks/useTime";

const Clock = () => {
  const { width: windowWidth } = useWindowDimensions();
  const { hours, time } = useTime();

  // Set css properties
  const optimizedFontScale = 0.23; // to fit text in its container
  const fontSize = windowWidth * optimizedFontScale;
  const marginScale = Math.floor(parseInt(hours) / 10) === 1 ? 0.07 : 0; // hours between 10 and 19
  const marginRight = windowWidth * marginScale;

  // Import font
  const [loaded] = useFonts({
    "digital-7": require("../assets/fonts/digital-7.mono.ttf"),
  });
  if (!loaded) return null;

  return (
    <View>
      <Text style={[styles.time, { fontSize, marginRight }]}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    color: "whitesmoke",
    fontFamily: "digital-7",
  },
});

export default Clock;
