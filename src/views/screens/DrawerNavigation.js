import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import HomeScreen from './HomeScreen';
import COLORS from '../../consts/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
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
                    backgroundColor: COLORS.primary,
                },
                drawerActiveTintColor: COLORS.white,
                drawerInactiveTintColor: COLORS.grey,
                drawerItemStyle: { backgroundColor: null },
                drawerLabelStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Drawer.Screen
                name="SẢN PHẨM"
                options={{ title: 'SẢN PHẨM' }}
            >
                {props => <HomeScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen
                name="E-BROCHURE"
                options={{ title: 'E-BROCHURE' }}
            >
                {props => <HomeScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen
                name="KHUYẾN MÃI"
                options={{ title: 'KHUYẾN MÃI' }}
            >
                {props => <HomeScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen
                name="DỊCH VỤ"
                options={{ title: 'DỊCH VỤ' }}
            >
                {props => <HomeScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen
                name="TÍNH NĂNG"
                options={{ title: 'TÍNH NĂNG' }}
            >
                {props => <HomeScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen
                name="TIN TỨC"
                options={{ title: 'TIN TỨC' }}
            >
                {props => <HomeScreen {...props} />}
            </Drawer.Screen>

            <Drawer.Screen
                name="VIDEO"
                options={{ title: 'VIDEO' }}
            >
                {props => <HomeScreen {...props} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;









