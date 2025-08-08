import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import { FaHome, FaBook, FaQuestionCircle, FaUser } from 'react-icons/fa'; // For web-style icons
import Mainpage from '../MainComponents/Mainpage';
import Bookings from '../MainComponents/Bookings';
import Queries from '../MainComponents/Queries';
import Profile from '../MainComponents/Profile';
import { Ionicons } from '@expo/vector-icons'; // Mobile icons

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, // 🚀 Hide the header
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') iconName = 'home';
                    else if (route.name === 'Bookings') iconName = 'book';
                    else if (route.name === 'Queries') iconName = 'help-circle';
                    else if (route.name === 'Profile') iconName = 'person';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007bff',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Mainpage} />
            <Tab.Screen name="Bookings" component={Bookings} />
            <Tab.Screen name="Queries" component={Queries} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}
