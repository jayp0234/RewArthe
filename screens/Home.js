import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import Button2 from "../components/Button2";
import COLOURS from "../constants/colors";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { LinearGradient } from "expo-linear-gradient";
import profilePic from "../assets/images/profile.png";
import { style } from "twrnc";
import Navbar from "../components/Navbar";

import orange from "../assets/images/orange.png";
import kiwi from "../assets/images/kiwi.png";
import apple from "../assets/images/apple.png";
import banana from "../assets/images/banana.png";
import pizza from "../assets/images/pizza.png";
import grapes from "../assets/images/grapes.png";

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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.points}>1,500</Text>
            <Text style={styles.points1}>points</Text>
          </View>
        </View>

        <View style={{ top: 75 }}>
          <Text style={styles.headingText}>Best Deals</Text>
          <ScrollView styles={{}}>
            <ScrollView
              horizontal={true}
              style={styles.scrollContainer}
              showsHorizontalScrollIndicator={false}
            >
              <View style={[styles.card, styles.cardOne]}>
                <Image source={orange} style={styles.cardImage} />
                <View style={styles.lineStyle} />
                <Text style={styles.cardTitle}>2,000 points</Text>
                <Text style={styles.cardText}>for $10 spent on Oranges</Text>
              </View>
              <View style={[styles.card, styles.cardOne]}>
                <Image source={apple} style={styles.cardImage} />
                <View style={styles.lineStyle} />
                <Text style={styles.cardTitle}>2,500 points</Text>
                <Text style={styles.cardText}>for $15 spent on Apples</Text>
              </View>
              <View style={[styles.card, styles.cardOne]}>
                <Image source={kiwi} style={styles.cardImage} />
                <View style={styles.lineStyle} />
                <Text style={styles.cardTitle}>1,500 points</Text>
                <Text style={styles.cardText}>for $15 spent on Kiwi</Text>
              </View>
              <View style={[styles.card, styles.cardOne]}>
                <Image source={banana} style={styles.cardImage} />
                <View style={styles.lineStyle} />
                <Text style={styles.cardTitle}>1,500 points</Text>
                <Text style={styles.cardText}>for $15 spent on Banana</Text>
              </View>
              <View style={[styles.card, styles.cardOne]}>
                <Image source={grapes} style={styles.cardImage} />
                <View style={styles.lineStyle} />
                <Text style={styles.cardTitle}>1,500 points</Text>
                <Text style={styles.cardText}>for $15 spent on Grapes</Text>
              </View>
              <View style={[styles.card, styles.cardOne]}>
                <Image source={pizza} style={styles.cardImage} />
                <View style={styles.lineStyle} />
                <Text style={styles.cardTitle}>1,500 points</Text>
                <Text style={styles.cardText}>for $15 spent on Pizza</Text>
              </View>
            </ScrollView>
          </ScrollView>
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
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "white", // Directly using white color
    shadowOpacity: 0.5, // You might need to adjust the opacity for visibility
    shadowRadius: 5, // Can be adjusted for the blur effect
    zIndex: 10,
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
    top: 30,
    left: 125,
  },
  carousel: {
    top: "8%",
  },
  headingText: {
    color: COLOURS.light,
    fontSize: 25,
    fontWeight: "600",
    paddingLeft: 25,
  },
  line: {
    height: 6,
    backgroundColor: "#000000",
  },
  card: {
    width: 300,
    height: 200,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    margin: 8,
    borderWidth: 2,
  },
  cardOne: {
    backgroundColor: "#FBF6EE",
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  scrollContainer: {
    padding: 15,
  },
  cardImage: {
    width: "100", // Set your desired width
    height: "70%", // Set your desired height
    aspectRatio: 1 / 1,
    bottom: "7%",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#124076",
    right: "25%",
    bottom: "4%",
  },
  cardText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000000",
    right: "17%",
    bottom: "2%",
  },
  lineStyle: {
    height: 1, // Set the thickness of the line
    backgroundColor: "black", // Set the color of the line
    width: "100%", // Make the line as wide as its container
    alignSelf: "center", // Center the line within its container, if necessary
    bottom: "8%",
  },
});

export default Home;
