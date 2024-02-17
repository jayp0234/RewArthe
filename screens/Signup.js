import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button2 from "../components/Button2";
import { LinearGradient } from "expo-linear-gradient";

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={{
          flex: 1,
        }}
        colors={[COLORS.white, COLORS.white]}
      >
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Register</Text>
            <Text style={styles.headerSubtitle}>
              Make your Shopping Special !
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email address</Text>
            <View
              style={{
                ...styles.inputWrapper,
                ...styles.inputWrapperElevation,
              }}
            >
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mobile Number</Text>
            <View
              style={[
                {
                  ...styles.inputWrapper,
                  ...styles.inputWrapperElevation,
                },
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <TextInput
                placeholder="+1"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={[
                  styles.input,
                  { width: "12%", borderRightWidth: 1, height: "100%" },
                ]}
              />

              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={{ width: "80%" }}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View
              style={{
                ...styles.inputWrapper,
                ...styles.inputWrapperElevation,
              }}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!isPasswordShown}
                style={styles.input}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={styles.icon}
              >
                {isPasswordShown ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.primary : undefined}
            />
            <Text>I agree to the terms and conditions</Text>
          </View>

          <Button2 title="Sign Up" filled style={styles.signUpButton} />

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or Sign up with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialButtonsContainer}>
            <SocialButton platform="Facebook" />
            <SocialButton platform="Google" />
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.alreadyAccountText}>
              Already have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const getPlatformImage = (platform) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return require("../assets/images/facebook.png");
    case "google":
      return require("../assets/images/google.png");
    // Add more cases as needed
    default:
      return null; // Return null or handle the case when platform is not recognized
  }
};

const SocialButton = ({ platform }) => (
  <TouchableOpacity
    onPress={() => console.log("Pressed")}
    style={styles.socialButton}
  >
    <Image
      source={getPlatformImage(platform)}
      style={styles.socialIcon}
      resizeMode="contain"
    />
    <Text>{platform}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 22,
  },
  headerContainer: {
    marginVertical: 12,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.black,
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 20,
    color: COLORS.dull,
    fontWeight: "500",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 8,
    color: COLORS.black,
  },
  inputWrapper: {
    width: "100%",
    height: 55,
    borderColor: COLORS.black,
    borderWidth: 0,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
    backgroundColor: COLORS.bg,
  },
  inputWrapperElevation: {
    elevation: 7,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 5,
  },
  input: {
    width: "100%",
  },
  icon: {
    position: "absolute",
    right: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButton: {
    marginTop: 25,
    marginBottom: 4,
    elevation: 7,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 5,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    marginRight: 4,
    borderRadius: 10,
    backgroundColor: COLORS.bg,
    elevation: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 5,
  },
  socialIcon: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  alreadyAccountText: {
    fontSize: 16,
    color: COLORS.black,
  },
  loginText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "900",
    marginLeft: 6,
    elevation: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
});

export default Signup;
