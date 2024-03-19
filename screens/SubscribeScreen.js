import * as React from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [disabled, setDisabled] = React.useState(true);
  const [email, onChangeEmail] = React.useState("");

  React.useEffect(() => {
    email && setDisabled(!Boolean(validateEmail(email)?.length));
  }, [email]);

  const handleSubscribe = () => {
    Alert.alert(null, "Thank you for subscribing, stay tuned!");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.innerContainer}
        contentContainerStyle={styles.contentContainer}
        keyboardDismissMode="on-drag"
      >
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo-grey.png")}
          resizeMode="contain"
        />
        <Text style={styles.regular}>
          Subscribe to our newstletter for your latest delicious recipies!
        </Text>

        <View style={styles.formContainer}>
          <TextInput
            placeholder="Type your email"
            keyboardType="email-address"
            inputMode="email"
            autoCapitalize="none"
            autoCompleteType="email"
            value={email}
            autoCorrect={false}
            style={styles.input}
            onChangeText={onChangeEmail}
          />
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "#3e523c" : "#3e524b",
              },
              disabled && {
                backgroundColor: "gray",
              },
            ]}
            disabled={disabled}
            onPress={handleSubscribe}
          >
            <Text style={styles.buttonText}>Subscribe</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 0.8,
  },
  contentContainer: {
    alignItems: "center",
  },
  logo: {
    height: 150,
    width: 150,
  },
  regular: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 30,
  },

  input: {
    paddingVertical: Platform.OS === "ios" ? 15 : 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
  formContainer: {
    flex: 0.2,
    flexDirection: "column",
    alignSelf: "center",
    maxWidth: 300,
    width: "100%",
    margin: "auto",
    marginTop: 30,
  },
  button: {
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
