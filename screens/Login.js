import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button2 from '../components/Button2';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 35 }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        marginTop: 35,
                        color: COLORS.black,
                        textAlign: 'center'
                    }}>
                        Hi Welcome Back ! 👋
                    </Text>

                    <Text style={{
                         fontSize: 20,
                         color: COLORS.dull,
                         fontWeight: "500",
                         textAlign : "center",
                    }}>You have been missed !</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "500",
                        marginVertical: 8,
                        color: COLORS.black,
                       
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 55,
                        borderColor: COLORS.black,
                        borderWidth: 0,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        backgroundColor: COLORS.bg,
                        elevation: 7,
                        shadowColor: COLORS.black,
                        shadowOffset: {
                          width: 0,
                          height: 2,

                        },
                        shadowOpacity: 0.50,
                        shadowRadius: 5,
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "500",
                        marginVertical: 8,
                        color: COLORS.black,
                       
                    }}>Password</Text>

                    <View style={{
                         width: "100%",
                         height: 55,
                         borderColor: COLORS.black,
                         borderWidth: 0,
                         borderRadius: 8,
                         alignItems: "center",
                         justifyContent: "center",
                         paddingLeft: 22,
                         backgroundColor: COLORS.bg,
                         elevation: 7,
                         shadowColor: COLORS.black,
                         shadowOffset: {
                           width: 1,
                           height: 2,
                         },
                         shadowOpacity: 0.50,
                         shadowRadius: 5,
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                   flexDirection: "row",
                   marginVertical: 6,
                   alignItems: "center",
                   justifyContent: "center",
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>Remember Me</Text>
                </View>

                <Button2
                    title="Login"
                    filled
                    style={{
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
                    }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or Login with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
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
                        }}
                    >
                        <Image
                            source={require("../assets/images/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
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
                        }}
                    >
                        <Image
                            source={require("../assets/images/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account ?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{
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
                              shadowOpacity: 0.50,
                              shadowRadius: 5,
                              
                        }}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login