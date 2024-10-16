import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './components/learn/home';
import HomeDetail from './components/learn/home.detail';
import Like from './components/learn/like';
import LikeDetail from './components/learn/like.detail';
import About from './components/learn/about';
import ChangePassword from './components/learn/change.password';



export default function App() {

    const Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();
    function HomeScreen(props: any) {
        const navigation = props.navigation;


        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <View style={{ marginVertical: 10 }}>
                    <Button onPress={() => navigation.navigate("Details")} title='Go to Detail'></Button>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button onPress={() => navigation.navigate("Details", { userId: 1, name: "Eric" })} title='Go to user=1'></Button>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button onPress={() => navigation.navigate("Details", { userId: 2, name: "hoidanit" })} title='Go to user=2'></Button>
                </View>


            </View>
        );
    }
    function DetailsScreen() {
        const navigation: any = useNavigation();
        const route: any = useRoute();

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>user id={route?.params?.userId}</Text>
                <Button title='Go Back Home' onPress={() => navigation.goBack()}></Button>
            </View>
        );
    }
    const TabApp = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Like" component={Like} />
            </Tab.Navigator>

        )
    }
    const StackApp = () => {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="TabApp"
                    component={TabApp}
                    options={{ headerTitle: "Trang chủ", headerShown: false }}
                />
                <Stack.Screen name="HomeDetails"
                    component={HomeDetail}
                    options={(props: any) => ({ headerTitle: `Xem chi tiết ${props.route?.params?.userId ?? ""}` })}

                />
                <Stack.Screen name="LikeDetail"
                    component={LikeDetail}

                />
            </Stack.Navigator>
        );
    }

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            {/* <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'american-football'
                                : 'american-football-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'aperture' : 'aperture-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName as any} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Settings" component={HomeDetail} />
            </Tab.Navigator> */}
            <Drawer.Navigator initialRouteName="Details">
                <Drawer.Screen name="StackApp" component={StackApp} />
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="ChangePassword" component={ChangePassword} />
            </Drawer.Navigator>
            {/* <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="TabApp"
                    component={TabApp}
                    options={{ headerTitle: "Trang chủ", headerShown: false }}
                />
                <Stack.Screen name="HomeDetails"
                    component={HomeDetail}
                    options={(props: any) => ({ headerTitle: `Xem chi tiết ${props.route?.params?.userId ?? ""}` })}

                />
                <Stack.Screen name="LikeDetail"
                    component={LikeDetail}

                />
            </Stack.Navigator> */}
        </NavigationContainer>
    );
}

