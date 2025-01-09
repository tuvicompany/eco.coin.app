import React, { useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { authStyles } from "../../styles/authStyles";

export default function RegisterScreen({ navigation }) {
  const slideAnim = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <View style={authStyles.container}>
      <View style={authStyles.header} />
      <Animated.View
        style={[authStyles.authContainer, { transform: [{ translateY: slideAnim }] }]}
      >
        <Text style={authStyles.title}>Register</Text>

        <TextInput
          placeholder="Phone"
          style={authStyles.input}
          placeholderTextColor="#aaa"
        />

        <TextInput
          placeholder="Password"
          style={authStyles.input}
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />

        <TouchableOpacity style={authStyles.submitButton}>
          <Text style={authStyles.submitText}>Submit</Text>
        </TouchableOpacity>

        <View style={authStyles.actionContainer}>
          <TouchableOpacity onPress={() => alert("Forgot Password")}>
            <Text style={authStyles.link}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={authStyles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}