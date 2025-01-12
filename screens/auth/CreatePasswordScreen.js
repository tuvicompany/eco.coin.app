import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import { authStyles } from "../../styles/authStyles";
import { AntDesign } from "@expo/vector-icons";

export default function CreatePasswordScreen({ navigation }) {
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View>
              <AntDesign name="left" size={16} color="#248A3D" />
            </View>
          </TouchableOpacity>

          <Text style={authStyles.title}>Create Password</Text>
        </View>

        <Text style={authStyles.description}>
          Please enter your new password
        </Text>

        <TextInput
          placeholder="Password"
          style={authStyles.input}
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />

        <TextInput
          placeholder="Repeat Password"
          style={authStyles.input}
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />

        <View style={authStyles.actionWrapContainer}>
          <TouchableOpacity style={authStyles.validButton}>
            <Text style={authStyles.validButtonText}>Least 8 characters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={authStyles.validButton}>
            <Text style={authStyles.validButtonText}>One non letter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={authStyles.validButton}>
            <Text style={authStyles.validButtonText}>Digit character</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={authStyles.submitButton} onPress={() => navigation.navigate("Verify")}>
          <Text style={authStyles.submitText}>Next</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
