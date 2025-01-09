import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import { authStyles } from "../../styles/authStyles";

export default function LoginScreen({ navigation }) {
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
        style={[
          authStyles.authContainer,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Text style={authStyles.title}>Login</Text>

        <Text style={authStyles.description}>
          Please enter your details to sign in
        </Text>

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

        <View style={authStyles.actionContainer}>
          <TouchableOpacity onPress={() => alert("Forgot Password")}>
            <Text style={authStyles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={authStyles.submitButton}>
          <Text style={authStyles.submitText}>Login</Text>
        </TouchableOpacity>

        <Text style={authStyles.descText}> or login with </Text>

        <View style={authStyles.socialLoginContainer}>
          <TouchableOpacity style={authStyles.socialButton}>
            <Text style={authStyles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={authStyles.socialButton}>
            <Text style={authStyles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={authStyles.socialButton}>
            <Text style={authStyles.socialButtonText}>iCloud</Text>
          </TouchableOpacity>
        </View>

        <Text style={authStyles.descText}>Dont have an account yet?</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={authStyles.linkCenter}>Register</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
