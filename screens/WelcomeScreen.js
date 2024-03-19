import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo.png")}
          resizeMode="contain"
        />
        <Text style={styles.regular}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Subscribe");
          }}
        >
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 250,
    width: 250,
  },
  regular: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
  },

  buttonContainer: {
    flex: 0.1,
    flexDirection: "column",
    alignSelf: "center",
    maxWidth: 300,
    width: "100%",
    margin: "auto",
  },
  button: {
    backgroundColor: "#3e524b",
    padding: 10,
    borderRadius: 10,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
