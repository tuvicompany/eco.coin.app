import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./routes/MainTabs";
import AuthStack from "./routes/AuthStack";

export default function App() {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
