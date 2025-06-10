import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Login";
import Register from "./src/Register";
import Homeres from "./src/Homeres";
import Homeadm from "./src/Homeadm";
import visec from "./src/visec";
import attend from "./src/attend";
import message from "./src/message";
import lpg from "./src/lpg";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="lpg">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Homeres" component={Homeres} options={{ headerShown: false }} />
        <Stack.Screen name="Homeadm" component={Homeadm} options={{ headerShown: false }} />
        <Stack.Screen name="visec" component={visec} options={{ headerShown: false }} />
        <Stack.Screen name="attend" component={attend} options={{ headerShown: false }} />
        <Stack.Screen name="message" component={message} options={{ headerShown: false }} />
        <Stack.Screen name="lpg" component={lpg} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
