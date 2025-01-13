import React, { useRef, useState } from "react";
import { Animated, Dimensions, ScrollView, Text, View, TouchableWithoutFeedback } from "react-native";
import MapView from "react-native-maps";
import { mainStyles } from "../../styles/mainStyles";

export default function NewsScreen() {
  const [isMapActive, setIsMapActive] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const screenHeight = Dimensions.get("window").height;

  const handleMapPress = () => {
    setIsMapActive(true);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleMapRelease = () => {
    setIsMapActive(false);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderHorizontalBoxes = (title) => (
    <View style={mainStyles.horizontalBoxes}>
      <Text style={mainStyles.sectionTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={mainStyles.slideContainer}
    >
      {Array.from({ length: 5 }, (_, i) => `Box ${i + 1}`).map((box, index) => (
        <View key={index} style={mainStyles.box}>
            <Text style={mainStyles.boxText}>{box}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const renderBannerSection = (title) => (
    <View style={mainStyles.bannerSection}>
      <Text style={mainStyles.sectionTitle}>{title}</Text>
      {Array.from({ length: 2 }, (_, i) => `Banner ${i + 1}`).map((item, index) => (
        <View
          key={index}
          style={[mainStyles.banner, { width: Dimensions.get("window").width - 20 }]}
        >
          <Text style={mainStyles.bannerText}>{item}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={mainStyles.container}>
      <MapView
        style={mainStyles.map}
        initialRegion={{
          latitude: 21.0151,
          longitude: 105.8326,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <TouchableWithoutFeedback onPress={handleMapPress}>
          <View style={mainStyles.mapOverlay} />
        </TouchableWithoutFeedback>
      </MapView>

      <Animated.View
        style={[
          mainStyles.mainContainer,
          {
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [screenHeight * 2, 0],
                }),
              },
            ],
            opacity: fadeAnim,
          },
        ]}
      >
        <ScrollView>
          <View style={mainStyles.header} />
          <View>{renderHorizontalBoxes("Có gì hot")}</View>
          {renderBannerSection("Sự kiện đang diễn ra")}
          {renderBannerSection("Có thể bạn quan tâm")}
          {renderBannerSection("Phân loại rác thải như thế nào?")}
        </ScrollView>
      </Animated.View>

      {isMapActive && (
        <TouchableWithoutFeedback onPress={handleMapRelease}>
          <View style={mainStyles.overlayTouchable} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
