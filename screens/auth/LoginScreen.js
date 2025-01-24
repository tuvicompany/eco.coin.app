import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import { authStyles } from "../../styles/authStyles";
import { useAuth } from "../../contexts/AuthContext";
import Icon from "react-native-vector-icons/FontAwesome";
import { fetchUserInfo, getGoogleLoginUrl } from "../../services/authService";

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const slideAnim = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const handleGoogleLogin = async () => {
    try {
      const { url } = await getGoogleLoginUrl();

      Linking.openURL(url);
    } catch (error) {
      Alert.alert('Error', 'Failed to initiate Google login.');
    }
  };

  const handleCallback = async (code) => {
    try {
      const userInfo = await fetchUserInfo(code);
      Alert.alert('Login Successful', `Welcome ${userInfo.name}`);
      login();
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch user information.');
    }
  };

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

        <View style={authStyles.actionRightContainer}>
          <TouchableOpacity onPress={() => alert("Forgot Password")}>
            <Text style={authStyles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={authStyles.submitButton} onPress={login}>
          <Text style={authStyles.submitText}>Login</Text>
        </TouchableOpacity>

        <Text style={authStyles.descText}> or login with </Text>

        <View style={authStyles.socialLoginContainer}>
          <TouchableOpacity
            style={authStyles.socialButton}
            onPress={handleGoogleLogin}
          >
            <Icon name="google" size={20} color="#DB4437" />
            <Text style={authStyles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={authStyles.socialButton}>
            <Icon name="facebook" size={20} color="#4267B2" />
            <Text style={authStyles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={authStyles.socialButton}>
            <Icon name="apple" size={20} color="#000000" />
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
