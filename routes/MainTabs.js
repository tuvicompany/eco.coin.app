import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewsScreen from "../screens/main/NewsScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import DashboardScreen from "../screens/main/DashboardScreen";
import ScanScreen from "../screens/main/ScanScreen";
import PromoScreen from "../screens/main/PromoScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="News">
      <Tab.Screen
        options={{ headerShown: false }}
        name="News"
        component={NewsScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Promo"
        component={PromoScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Scan"
        component={ScanScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={DashboardScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
