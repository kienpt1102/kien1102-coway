import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from "./HomeScreen";
import COLORS from "../../consts/colors";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
    return (
        <DrawerContentScrollView style={{ paddingVertical: 10 }}>
            <View>
                <FontAwesome5 name="angular" size={24} color="black" />
                <Text> 123 </Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const DrawerScreen = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: 'slide',
                drawerStyle: {
                    width: 250,
                    backgroundColor: COLORS.primary,
                },
                overlayColor: null,
                sceneContainerStyle: {
                    backgroundColor: COLORS.primary
                },
                drawerActiveTintColor: COLORS.white,
                drawerInactiveTintColor: COLORS.primary,
                drawerItemStyle: {backgroundColor: null}
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Home"
                options={{
                    title: 'SẢN PHẨM'
                }} >
                {({ props }) => <HomeScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen
                name="Home1"
                options={{
                    title: 'THÔNG TIN'
                }} >
                {({ props }) => <HomeScreen {...props} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerScreen;








