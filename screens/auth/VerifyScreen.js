import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import { authStyles } from "../../styles/authStyles";
import { AntDesign } from "@expo/vector-icons";
import { useAuth } from "../../contexts/AuthContext";

export default function OtpScreen({ navigation }) {
  const { login } = useAuth();
  const slideAnim = useRef(new Animated.Value(200)).current;
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputs = useRef([]);
  const [resendTimer, setResendTimer] = useState(60);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    inputs.current[0]?.focus();

    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [slideAnim]);

  const handleInputChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 5) {
        inputs.current[index + 1]?.focus();
      } else {
        inputs.current[index]?.blur();
        login();
      }
    } else if (text === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handleNext = () => {
    if (otp.every((digit) => digit !== "")) {
      login();
    } else {
      alert("Please fill in all OTP fields.");
    }
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      setResendTimer(60);
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

          <Text style={authStyles.title}>Verify OTP</Text>
        </View>

        <Text style={authStyles.description}>
          Please enter the 6-digit OTP sent to your phone
        </Text>

        <View style={authStyles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={authStyles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              value={value}
              onChangeText={(text) => handleInputChange(text, index)}
              ref={(el) => (inputs.current[index] = el)}
              autoFocus={index === 0}
            />
          ))}
        </View>

        <View style={authStyles.actionRightContainer}>
          {resendTimer > 0 ? (
            <Text style={authStyles.timerText}>Resend in {resendTimer}s</Text>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={authStyles.link}>Resend</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={authStyles.submitButton} onPress={handleNext}>
          <Text style={authStyles.submitText}>Next</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
