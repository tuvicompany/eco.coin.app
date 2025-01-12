import { StatusBar } from "expo-status-bar";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useRef } from "react";

export default function NewsScreen() {
  const { setIsLoggedIn } = useAuth();
  const slideAnim = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Animated.View style={[{ transform: [{ translateY: slideAnim }] }]}>
        <Text style={{textAlign: 'center'}}>NewsScreen</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#248A3D",
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={() => setIsLoggedIn(false)}
        >
          <Text style={{ color: "white" }}>Go to Login</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </Animated.View>
    </View>
  );
}
