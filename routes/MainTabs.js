import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import NewsScreen from "../screens/main/NewsScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import DashboardScreen from "../screens/main/DashboardScreen";
import ScanScreen from "../screens/main/ScanScreen";
import PromoScreen from "../screens/main/PromoScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="News"
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#FFFFFF", height: 60 },
        tabBarActiveTintColor: "#248A3D",
        tabBarInactiveTintColor: "#C0C0C0",
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "News":
              iconName = "home";
              break;
            case "Promo":
              iconName = "local-offer";
              break;
            case "Scan":
              iconName = "qr-code-scanner";
              break;
            case "Dashboard":
              iconName = "dashboard";
              break;
            case "Profile":
              iconName = "person";
              break;
            default:
              iconName = "circle";
          }

          return (
            <MaterialIcons
              name={iconName}
              size={route.name === "Scan" ? 24 : size}
              color={color}
            />
          );
        },
        gestureEnabled: true,
      })}
    >
      <Tab.Screen name="News" component={NewsScreen} options={{ lazy: true }} />
      <Tab.Screen name="Promo" component={PromoScreen} options={{ lazy: true }} />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          lazy: true,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={styles.scanButtonContainer}
              activeOpacity={0.8}
            >
              <View style={styles.scanButton}>
                <MaterialIcons name="qr-code-scanner" size={24} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ lazy: true }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ lazy: true }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  scanButtonContainer: {
    top: -30,
    left: 10,
  },
  scanButton: {
    width: 60,
    height: 60,
    borderRadius: 45,
    backgroundColor: "#248A3D",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});
