import React from "react";
import 'react-native-gesture-handler';
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigation from "./src/views/screens/DrawerNavigation";

const Stack = createDrawerNavigator();

const App = () => {
  return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name="HomeScreen" component={DrawerNavigation}/>
          {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;














