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
        tabBarStyle: { backgroundColor: "#FFFFFF" },
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

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        gestureEnabled: true,
      })}
      tabBarOptions={{
        swipeEnabled: true,
      }}
    >
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Promo" component={PromoScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
