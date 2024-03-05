import { View, Text } from 'react-native'
import React from 'react'
import Button2 from '../components/Button2'
import COLOURS from '../constants/colors'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

const Home = () => {
    const handleLogout = async() => {
        await signOut(auth);
    }
  return (
    <View>
     <Button2
                    title="Login"
                    filled
                    style={{
                      marginTop: 25,
                      marginBottom: 4,
                      elevation: 7,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 1,
                        height: 2,
                      },
                      shadowOpacity: 0.50,
                      shadowRadius: 5,
                    }}
onPress={handleLogout}
                />
    </View>
  )
}

export default Home