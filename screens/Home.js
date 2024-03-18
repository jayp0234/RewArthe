import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Button2 from "../components/Button2";
import COLOURS from "../constants/colors";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { LinearGradient } from "expo-linear-gradient";
import profilePic from "../assets/images/profile.png";
import { style } from "twrnc";
import Navbar from "../components/Navbar";

const Home = ({ navigation }) => {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={["#C84B31", "#2D4263", "#191919"]}
        end={{ x: 0.1, y: 0.8 }}
      >
        <View style={styles.welcomeBar}>
          <Text style={styles.text1}>Hello</Text>
          <Text style={styles.text2}>Customer</Text>
        </View>

        <Image source={profilePic} style={styles.profilePic} />

        <View style={styles.pointsContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.points}>1,500</Text>
            <Text style={styles.points1}>points</Text>
          </View>
        </View>

        <Navbar />
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeBar: {
    top: "8%",
    paddingLeft: "6%",
  },
  text1: {
    color: COLOURS.light,
    fontSize: 25,
    opacity: 0.7,
  },
  text2: {
    color: COLOURS.light,
    fontSize: 30,
    fontWeight: "600",
  },
  profilePic: {
    width: 65,
    height: 65,
    borderRadius: 50,
    left: "80%",
    right: "auto",
    top: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  pointsContainer: {
    backgroundColor: "#FEFBF6",
    width: "90%",
    height: 100,
    top: "5%",
    left: "5%",
    right: "auto",
    borderRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: "white", // Directly using white color
    shadowOpacity: 0.5, // You might need to adjust the opacity for visibility
    shadowRadius: 8, // Can be adjusted for the blur effect
  },
  points: {
    fontSize: 50,
    fontWeight: "900",
    color: "#0C2D57",
    top: 20,
    left: 30,
    right: "auto",
  },
  points1: {
    fontSize: 25,
    fontWeight: "800",
    color: "#0C2D57",
    top: 40,
    left: 125,
  },
  carousel: {
    top: "8%",
  },
});

export default Home;
