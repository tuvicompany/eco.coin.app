import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.0219,
          longitude: 105.8291,
          latitudeDelta: 0.01, 
          longitudeDelta: 0.01, 
        }}
      >
        <Marker
          coordinate={{ latitude: 21.0219, longitude: 105.8291 }}
          title="Quận Đống Đa"
          description="Đây là vị trí của Đống Đa, Hà Nội."
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
