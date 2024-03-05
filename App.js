import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup, Welcome,Home } from "./screens";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
 
} from "firebase/auth";
import useAuth from "./hooks/useAuth";
import {auth} from "./config/firebase";

const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyBEvVJsxrOlMioXeOrmSw5NkUxzM2CchrA",
  authDomain: "capstonerewarthe.firebaseapp.com",
  projectId: "capstonerewarthe",
  storageBucket: "capstonerewarthe.appspot.com",
  messagingSenderId: "17188323678",
  appId: "1:17188323678:web:74dc7034b2b417cf6acfcf",
  measurementId: "G-H6HF8MT645",
};

export default function App() {
  const { user } = useAuth();
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
