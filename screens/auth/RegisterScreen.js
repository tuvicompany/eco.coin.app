import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import { authStyles } from "../../styles/authStyles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function RegisterScreen({ navigation }) {
  const slideAnim = useRef(new Animated.Value(200)).current;

  const [isPermissionChecked, setIsPermissionChecked] = useState(false);

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
        <Text style={authStyles.title}>Register</Text>

        <Text style={authStyles.description}>
          Please enter your details to register
        </Text>

        <TextInput
          placeholder="Username"
          style={authStyles.input}
          placeholderTextColor="#aaa"
        />

        <TextInput
          placeholder="Phone"
          style={authStyles.input}
          placeholderTextColor="#aaa"
        />

        <View style={authStyles.actionLeftContainer}>
          <TouchableOpacity
            onPress={() => setIsPermissionChecked(!isPermissionChecked)}
            style={{
              ...authStyles.checkboxContainer,
              backgroundColor: isPermissionChecked ? "#000" : "#fff",
            }}
          >
            {isPermissionChecked && <View style={authStyles.checkboxButton} />}
          </TouchableOpacity>
          <Text style={authStyles.checkboxText}>
            I agree to the{" "}
            <Text
              style={authStyles.link}
              onPress={() => alert("Terms and Conditions")}
            >
              Terms and Conditions
            </Text>
          </Text>
        </View>

        <TouchableOpacity
          style={authStyles.submitButton}
          onPress={() => navigation.navigate("CreatePassword")}
        >
          <Text style={authStyles.submitText}>Register</Text>
        </TouchableOpacity>

        <Text style={authStyles.descText}> or register with </Text>

        <View style={authStyles.socialLoginContainer}>
          <TouchableOpacity style={authStyles.socialButton}>
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

        <Text style={authStyles.descText}>Already have an account yet?</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={authStyles.linkCenter}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
