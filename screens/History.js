import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";
import Navbar from "../components/Navbar";
import COLOURS from "../constants/colors";
import { style } from "twrnc";

const History = () => {
  return (
    <>
    <View style={{height:300, }}>
<View style={styles.expenceContainer}>
<Text style={styles.exTitle}>Expense</Text>
<Text style={styles.exText}>$ 2,000</Text>
<Text style={styles.exDec}>in April</Text>
<Text style={styles.text1}>RewArthe</Text>
</View>

    </View>
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={["#C84B31", "#2D4263", "#191919"]}
        end={{ x: 0.1, y: 0.8 }}
      >
        <View style={styles.welcomeBar}>
         
          <Text style={styles.text2}>Transaction History</Text>
        </View>
        <View style={styles.historyContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.card, styles.cardOne]}>
           
            
            </View>
            <View style={[styles.card, styles.cardOne]}>
           
            
            </View>
            <View style={[styles.card, styles.cardOne]}>
           
            
            </View>
            <View style={[styles.card, styles.cardOne]}>
           
            
            </View>
            <View style={[styles.card, styles.cardOne]}>
           
            
            </View>
            <View style={[styles.card, styles.cardOne]}>
           
            
            </View>
            </ScrollView>
        </View>
        <Navbar/>
      </LinearGradient>
    </View> 
    </>
  );
};

export default History;

const styles = StyleSheet.create({
    welcomeBar: {
        alignItems: "center",
      },
    
      text1: {
        color: COLOURS.black,
        fontSize: 30,
        fontWeight: "600",
        opacity:1,
        top:"20%"
      },
      text2: {
        color: COLOURS.light,
        fontSize: 30,
        fontWeight: "600",
      },
      card: {
        width: "96%",
        height: 80,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        margin: 8,
      
      },
      cardOne: {
        backgroundColor: "#FBF6EE",
        elevation: 5,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "white",
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      scrollContainer: {
        padding: 15,
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
      lineStyle:{
        height: 1, // Set the thickness of the line
        backgroundColor: 'black', // Set the color of the line
        width: '100%', // Make the line as wide as its container
        alignSelf: 'center', // Center the line within its container, if necessary
        bottom:"8%"
      },
      historyContainer:{
        padding:5,
        
        height:480
      },
      expenceContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        top:20

      },
      exTitle:{
        fontSize:25,
        fontWeight:"600",
        
      },
      exText:{
        fontSize:40,
        fontWeight:"800",
        top:"5%",


      },
      exDec:{
        fontSize:20,
        fontWeight:"500",
        top:"5%"
      }
})