import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./routes/MainTabs";
import AuthStack from "./routes/AuthStack";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function AppContent() {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
